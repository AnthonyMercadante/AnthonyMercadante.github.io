import { createTheme } from '@mui/material/styles';

export default createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#c5dfaa' },
    background: { default: '#0b1012', paper: '#141a1d' },
    text: { primary: '#f0efe8', secondary: '#959e9e' },
    divider: 'rgba(213,225,219,.14)',
  },
  typography: {
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    body1: { fontSize: '1rem', lineHeight: 1.85, color: '#c0c4c2' },
    h1: {
      fontSize: 'clamp(38px, 5vw, 68px)',
      lineHeight: 1.06,
      fontWeight: 500,
      letterSpacing: '-.055em',
    },
    h2: { fontSize: '1.6rem', lineHeight: 1.25, fontWeight: 500, letterSpacing: '-.03em' },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          minHeight: 46,
          color: '#f0efe8',
          padding: '10px 18px',
          textTransform: 'none',
          fontSize: '.8125rem',
          borderRadius: 5,
          border: '1px solid rgba(213,225,219,.2)',
          backgroundColor: '#141a1d',
          boxShadow: 'none',
          '&:hover': { backgroundColor: '#1b2225', boxShadow: 'none' },
        },
      },
    },
  },
});
