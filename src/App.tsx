import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import HomePage from './components/HomePage/HomePage';
import Portfolio from './components/Portfolio/Portfolio';
import AboutMe from './components/AboutMe/AboutMe';
import Skills from './components/Skills/Skills'; 
import theme from './theme';
import './App.css';
import WorkExperience from './components/WorkExperience/WorkExperience';
import XRDeveloper from './components/XRSoftwareDeveloper/XRDeveloper';
import AutomationAssistant from './components/AutomationAssistant/AutomationAssistant';
import OpenFlowMachine from './components/OpenFlowMachine/OpenFlowMachine';
import CellTower from './components/CellTower/CellTower';
import OVIN from './components/OVIN/OVIN';

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
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
