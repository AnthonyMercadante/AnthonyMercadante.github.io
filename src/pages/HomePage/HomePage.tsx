import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button, Box } from '@mui/material';
import cursorImage from '../../assets/images/arrow.png';
import LandscapeOverlay from '../../components/LandscapeOverlay'; 

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
      <LandscapeOverlay />
    </Container>
  );
};

export default HomePage;
