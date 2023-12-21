import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import HomePage from './components/HomePage/HomePage'; // Adjust the path as necessary
import theme from './theme'; // Adjust the path to your theme file


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

