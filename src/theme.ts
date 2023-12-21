import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#000',
    },
    text: {
      primary: '#fff',
    },
    // ... other theme options
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
  // ... other theme options like typography
});

export default theme;
