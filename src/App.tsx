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
import OpenFlowMachine from './pages/OpenFlowMachine/OpenFlowMachine';
import CellTower from './pages/CellTower/CellTower';
import OVIN from './pages/OVIN/OVIN';
import Projects from './pages/Projects/Projects';
import RealEstateBot from './pages/RealEstateBot/RealEstateBot';
import BotInteraction from './pages/BotInteraction/BotInteraction';
import BattleShipBot from './pages/BattleShipBot/BattleShipBot';

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
            <Route path="/OpenFlowMachine" element={<OpenFlowMachine/>}/>
            <Route path="/CellTower" element={<CellTower/>}/>
            <Route path='/OVIN' element={<OVIN/>}/>
            <Route path='/Projects' element={<Projects/>}/>
            <Route path='/RealEstateBot' element={<RealEstateBot/>}/>
            <Route path='/BotInteraction' element={<BotInteraction/>}/>
            <Route path='/BattleShipBot' element={<BattleShipBot/>}/>
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
