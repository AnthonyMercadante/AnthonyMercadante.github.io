import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import HomePage from './components/HomePage/HomePage'; 
import theme from './theme'; 
import Portfolio from './components/Portfolio/Portfolio';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;

