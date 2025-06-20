import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import HomePage from './pages/HomePage/HomePage';
import Portfolio from './pages/Portfolio/Portfolio';
import AboutMe from './pages/AboutMe/AboutMe';
import Skills from './pages/Skills/Skills'; 
import theme from './theme';
import './App.css';
import WorkExperience from './pages/WorkExperience/WorkExperience';
import XRDeveloper from './pages/XRSoftwareDeveloper/XRDeveloper';
import AutomationAssistant from './pages/AutomationAssistant/AutomationAssistant';
import BaslEngineer from './pages/BaslEngineer/BaslEngineer'
import OpenFlowMachine from './pages/OpenFlowMachine/OpenFlowMachine';
import CellTower from './pages/CellTower/CellTower';
import OVIN from './pages/OVIN/OVIN';
import Projects from './pages/Projects/Projects';
import RealEstateBot from './pages/RealEstateBot/RealEstateBot';
import BotInteraction from './pages/BotInteraction/BotInteraction';
import BattleShipBot from './pages/BattleShipBot/BattleShipBot';
import Bots from './pages/Bots/Bots';
import ReactProjects from './pages/ReactProjects/ReactProjects';
import EcoChallengeTracker from './pages/EcoChallengeTracker/EcoChallengeTracker';
import TorontoNightlifeExplorer from './pages/TorontoNightlifeExplorer/TorontoNightlifeExplorer';
import MachineLearningProjects from './pages/MachineLearningProjects/MachineLearningProjects';
import AircraftIdentifierAI from './pages/AircraftIdentifierAI/AircraftIdentifierAI';
import VoidGame from './pages/Games/Void/Void';
import Music from './pages/Music/Music';
import WaterScreen from './components/WaterScreen';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/about-me" element={<AboutMe />} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/WorkExperience" element={<WorkExperience/>}/>
            <Route path="/XRDeveloper" element={<XRDeveloper/>}/>
            <Route path="/AutomationAssistant" element={<AutomationAssistant/>}/>
            <Route path='BaslEngineer' element={<BaslEngineer/>}/>
            <Route path="/OpenFlowMachine" element={<OpenFlowMachine/>}/>
            <Route path="/CellTower" element={<CellTower/>}/>
            <Route path='/OVIN' element={<OVIN/>}/>
            <Route path='/Projects' element={<Projects/>}/>
            <Route path='/RealEstateBot' element={<RealEstateBot/>}/>
            <Route path='/BotInteraction' element={<BotInteraction/>}/>
            <Route path='/BattleShipBot' element={<BattleShipBot/>}/>
            <Route path='/Bots' element={<Bots/>}/>
            <Route path='/ReactProjects' element={<ReactProjects/>}/>
            <Route path='/EcoChallengeTracker' element={<EcoChallengeTracker/>}/>
            <Route path='/TorontoNightlifeExplorer' element={<TorontoNightlifeExplorer/>}/>
            <Route path='/MachineLearningProjects' element={<MachineLearningProjects/>}/>
            <Route path='/AircraftIdentifierAI' element={<AircraftIdentifierAI/>}/>
            <Route path='/Games/Void' element={<VoidGame/>}/>
            <Route path='/Music' element={<Music/>}/>
            <Route path="/water" element={<WaterScreen />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
