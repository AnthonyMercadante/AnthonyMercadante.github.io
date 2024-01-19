import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';
import cursorImage from '../../assets/images/arrow.png';

const HomePage = () => {
  return (
    <Container maxWidth={false}
      style={{
        position: 'relative',
        backgroundColor: '#000',
        color: '#fff',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '20px',
      }}>
      <div className="floating-cursor">
        <img src={cursorImage} alt="Cursor" />
      </div>
      <Typography variant="h1" component="h1" gutterBottom className="name-title">
        <Link to="/about-me" style={{ color: 'inherit', textDecoration: 'none' }}>
          Anthony Mercadante
        </Link>
      </Typography>
      <Typography variant="body1" className="body-text" style={{ maxWidth: '600px', marginBottom: '20px' }}>
        I'm a full-stack software developer. Here you can find my portfolio,
        a small glimpse of recently worked on projects using various programming languages.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/portfolio"
        className="view-work-button"
      >
        View My Work
      </Button>
      {/* Overlay for landscape mode */}
      <Box sx={{
    display: 'none',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 1)',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    '@media (orientation: landscape) and (max-width: 768px)': { // Adjust max-width as needed
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
    },
  }}>
    <Typography variant="h6">
      Please rotate your device to portrait mode.
    </Typography>
</Box>


    </Container>
  );
};

export default HomePage;
