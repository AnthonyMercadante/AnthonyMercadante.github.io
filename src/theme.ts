import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
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

theme = responsiveFontSizes(theme);

export default theme;
