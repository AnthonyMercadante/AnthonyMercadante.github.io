import { fireEvent, render, screen, within } from '@testing-library/react';
import EvidenceTrail from './EvidenceTrail';

test('a citation opens its own synthetic message and provider provenance', () => {
  render(<EvidenceTrail />);
  expect(screen.getByText(/Synthetic conversations · no live query/)).toBeInTheDocument();
  const source = within(screen.getByRole('region', { name: 'Selected synthetic source' }));
  expect(source.getByText('demo-chatgpt-export.zip')).toBeInTheDocument();

  fireEvent.click(screen.getByRole('button', { name: /evidence E2 from Claude/ }));
  expect(source.getByText('demo-claude-export.zip')).toBeInTheDocument();
  expect(source.getByText('demo-message-02')).toBeInTheDocument();
  expect(source.queryByText('demo-chatgpt-export.zip')).not.toBeInTheDocument();
  expect(screen.getByRole('button', { name: /evidence E1/ })).toHaveAttribute(
    'aria-pressed',
    'false',
  );
  expect(screen.getByRole('button', { name: /evidence E2/ })).toHaveAttribute(
    'aria-pressed',
    'true',
  );

  fireEvent.click(screen.getByRole('button', { name: /evidence E3 from Gemini/ }));
  expect(source.getByText('Activity record')).toBeInTheDocument();
  expect(source.getByText('demo-activity-03')).toBeInTheDocument();
  expect(source.getByText(/A thread is not inferred/)).toBeInTheDocument();
});
