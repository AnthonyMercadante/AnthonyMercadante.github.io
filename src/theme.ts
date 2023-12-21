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
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#1a1a1a',
          color: '#fff', 
          padding: '10px 20px', 
          textTransform: 'none', 
          fontSize: '1rem', 
          borderRadius: '8px', 
          boxShadow: 'none', 
          '&:hover': {
            backgroundColor: '#333',
          },
        },
      },
    },
  },
  // ... other theme options like typography
});

theme = responsiveFontSizes(theme);

export default theme;
