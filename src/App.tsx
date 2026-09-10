import React, { lazy, Suspense, useLayoutEffect, useRef } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigationType,
  Link,
} from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { MotionConfig } from 'framer-motion';
import HomePage from './pages/HomePage/HomePage';
import theme from './theme';
import './App.css';
import Ambient from './components/Ambient';
import SiteNavigation, { SiteFooter } from './components/SiteNavigation';
import { routeInfo } from './routeInfo';

const Portfolio = lazy(() => import('./pages/Portfolio/Portfolio'));
const AboutMe = lazy(() => import('./pages/AboutMe/AboutMe'));
const Skills = lazy(() => import('./pages/Skills/Skills'));
const WorkExperience = lazy(() => import('./pages/WorkExperience/WorkExperience'));
const XRDeveloper = lazy(() => import('./pages/XRSoftwareDeveloper/XRDeveloper'));
const AutomationAssistant = lazy(() => import('./pages/AutomationAssistant/AutomationAssistant'));
const BaslEngineer = lazy(() => import('./pages/BaslEngineer/BaslEngineer'));
const OpenFlowMachine = lazy(() => import('./pages/OpenFlowMachine/OpenFlowMachine'));
const CellTower = lazy(() => import('./pages/CellTower/CellTower'));
const OVIN = lazy(() => import('./pages/OVIN/OVIN'));
const Projects = lazy(() => import('./pages/Projects/Projects'));
const RealEstateBot = lazy(() => import('./pages/RealEstateBot/RealEstateBot'));
const BotInteraction = lazy(() => import('./pages/BotInteraction/BotInteraction'));
const BattleShipBot = lazy(() => import('./pages/BattleShipBot/BattleShipBot'));
const Bots = lazy(() => import('./pages/Bots/Bots'));
const ReactProjects = lazy(() => import('./pages/ReactProjects/ReactProjects'));
const EcoChallengeTracker = lazy(() => import('./pages/EcoChallengeTracker/EcoChallengeTracker'));
const TorontoNightlifeExplorer = lazy(
  () => import('./pages/TorontoNightlifeExplorer/TorontoNightlifeExplorer'),
);
const MachineLearningProjects = lazy(
  () => import('./pages/MachineLearningProjects/MachineLearningProjects'),
);
const AircraftIdentifierAI = lazy(
  () => import('./pages/AircraftIdentifierAI/AircraftIdentifierAI'),
);
const VoidGame = lazy(() => import('./pages/Games/Void/Void'));
const Music = lazy(() => import('./pages/Music/Music'));
const Story = lazy(() => import('./pages/Story/Story'));
const WaterScreen = lazy(() => import('./components/WaterScreen'));

const positions = new Map<string, number>();
function RouteEffects({ initial }: { initial: React.MutableRefObject<boolean> }) {
  const location = useLocation();
  const navigationType = useNavigationType();
  useLayoutEffect(() => {
    const title = routeInfo[location.pathname.toLowerCase()]?.title ?? 'Page not found';
    document.title = location.pathname === '/' ? title : `${title} — Anthony Mercadante`;
    const previousRestoration = window.history.scrollRestoration;
    window.history.scrollRestoration = 'manual';
    const frame = requestAnimationFrame(() => {
      if (location.hash) {
        const target = document.getElementById(location.hash.slice(1));
        target?.scrollIntoView({ block: 'start' });
      } else {
        window.scrollTo(0, navigationType === 'POP' ? (positions.get(location.key) ?? 0) : 0);
      }
      if (!initial.current && !location.hash)
        document.getElementById('main-content')?.focus({ preventScroll: true });
      initial.current = false;
    });
    const save = () => positions.set(location.key, window.scrollY);
    window.addEventListener('scroll', save, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', save);
      window.history.scrollRestoration = previousRestoration;
    };
  }, [location.key, location.pathname, location.hash, navigationType, initial]);
  return null;
}

class RouteErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (this.state.failed)
      return (
        <div className="page-shell error-surface" role="alert">
          <h1>This page couldn’t load.</h1>
          <p>Try reloading, or return to the homepage.</p>
          <a className="action-link" href={window.location.href}>
            Reload page
          </a>
          <a className="text-link" href="/">
            Back to home ↑
          </a>
        </div>
      );
    return this.props.children;
  }
}

function Site() {
  const { pathname } = useLocation();
  const initial = useRef(true);
  const isHome = pathname === '/';
  const isWater = pathname.toLowerCase() === '/water';
  return (
    <div className="App">
      <Ambient />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      {!isHome && !isWater && <SiteNavigation />}
      <main id="main-content" tabIndex={-1}>
        <RouteErrorBoundary key={pathname}>
          <Suspense
            fallback={
              <div className="route-loading" role="status">
                Opening page…
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about-me" element={<AboutMe />} />
              <Route path="/story" element={<Story />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/WorkExperience" element={<WorkExperience />} />
              <Route path="/XRDeveloper" element={<XRDeveloper />} />
              <Route path="/AutomationAssistant" element={<AutomationAssistant />} />
              <Route path="/BaslEngineer" element={<BaslEngineer />} />
              <Route path="/OpenFlowMachine" element={<OpenFlowMachine />} />
              <Route path="/CellTower" element={<CellTower />} />
              <Route path="/OVIN" element={<OVIN />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/RealEstateBot" element={<RealEstateBot />} />
              <Route path="/BotInteraction" element={<BotInteraction />} />
              <Route path="/BattleShipBot" element={<BattleShipBot />} />
              <Route path="/Bots" element={<Bots />} />
              <Route path="/ReactProjects" element={<ReactProjects />} />
              <Route path="/EcoChallengeTracker" element={<EcoChallengeTracker />} />
              <Route path="/TorontoNightlifeExplorer" element={<TorontoNightlifeExplorer />} />
              <Route path="/MachineLearningProjects" element={<MachineLearningProjects />} />
              <Route path="/AircraftIdentifierAI" element={<AircraftIdentifierAI />} />
              <Route path="/Games/Void" element={<VoidGame />} />
              <Route path="/Music" element={<Music />} />
              <Route path="/water" element={<WaterScreen />} />
              <Route
                path="*"
                element={
                  <div className="page-shell error-surface">
                    <p className="eyebrow">404 / A loose end</p>
                    <h1>Nothing at this address.</h1>
                    <p>There’s plenty to explore a little closer to home.</p>
                    <Link className="action-link" to="/">
                      Back to Anthony ↑
                    </Link>
                    <Link className="text-link" to="/portfolio">
                      Explore the work →
                    </Link>
                  </div>
                }
              />
            </Routes>
            <RouteEffects initial={initial} />
          </Suspense>
        </RouteErrorBoundary>
      </main>
      {!isHome && !isWater && <SiteFooter />}
    </div>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <ThemeProvider theme={theme}>
        <Router>
          <Site />
        </Router>
      </ThemeProvider>
    </MotionConfig>
  );
}
