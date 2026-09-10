import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import BackButton from './components/BackButton';

beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: true,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    }),
  });
});

test('the homepage keeps all eight social destinations primary and work secondary', () => {
  render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  );
  expect(
    screen.getByRole('heading', { level: 1, name: /Anthony.*Mercadante/ }),
  ).toBeInTheDocument();
  const links = within(
    screen.getByRole('navigation', { name: 'Find Anthony online' }),
  ).getAllByRole('link');
  expect(links).toHaveLength(8);
  expect(links.map((link) => link.textContent)).toEqual(
    expect.arrayContaining([
      expect.stringContaining('Strava'),
      expect.stringContaining('Goodreads'),
      expect.stringContaining('Letterboxd'),
      expect.stringContaining('Music'),
      expect.stringContaining('GitHub'),
      expect.stringContaining('Email'),
      expect.stringContaining('TikTok'),
      expect.stringContaining('Instagram'),
    ]),
  );
  expect(screen.getByRole('link', { name: /The work/ })).toHaveAttribute('href', '/portfolio');
  expect(screen.getByRole('link', { name: /Email — Say hello/ })).not.toHaveAttribute('target');
});

test.each(['/CellTower', '/CellTower/', '/CELLTOWER/'])(
  'a direct project entry at %s has a parent destination without relying on history',
  (path) => {
    render(
      <MemoryRouter initialEntries={[path]}>
        <BackButton />
      </MemoryRouter>,
    );
    expect(screen.getByRole('link', { name: /XR projects/ })).toHaveAttribute(
      'href',
      '/XRDeveloper',
    );
  },
);
