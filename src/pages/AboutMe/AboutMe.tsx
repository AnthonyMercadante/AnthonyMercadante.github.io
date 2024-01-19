// AboutMe.tsx
import React from 'react';
import { Button, IconButton, Grid, Box, useTheme } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import profileImage from '../../assets/images/professional-photo.jpg';
import LandscapeOverlay from '../../components/LandscapeOverlay'; 

const AboutMe = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const navigateToSkills = () => {
    navigate('/skills');
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: '100vh',
        minWidth: '100vw',
        padding: theme.spacing(4),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Roboto, Arial, sans-serif',
        boxSizing: 'border-box',
        overflow: 'hidden',
        px: [2, 4, 8],
        '@media (max-width: 932px)': {
          // Adjustments for screens smaller than 932px
          px: [1, 2, 4],
          '& .about-me-profile-image': {
            maxWidth: '75%', 
          },
          '& h1': {
            fontSize: '1.5rem', 
          },
          '& p': {
            fontSize: '0.9rem', 
          },
        },
        '@media (max-width: 667px)': {
          // Further adjustments for screens smaller than 667px
          '& .about-me-profile-image': {
            maxWidth: '70%', 
          },
          '& h1': {
            fontSize: '1.25rem', 
          },
          '& p': {
            fontSize: '0.8rem', 
          },
        },
      }}
    >
      <IconButton onClick={handleBack} sx={{ position: 'absolute', top: 20, left: 20, zIndex: 1 }}>
        <ArrowBackIcon />
      </IconButton>
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <img
            src={profileImage}
            alt="Profile"
            style={{
              maxWidth: '100%',
              height: 'auto',
              borderRadius: '100px',
              boxSizing: 'border-box',
            }}
            className='about-me-profile-image'
          />
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={5} style={{ textAlign: 'center', padding: theme.spacing(5) }}>
          <h1>Hello! I'm Anthony Mercadante</h1>
          <p>
            Founder of Raethexn Technologies, specializing in custom software solutions.
            I'm also a 3rd year Software Development student at Mohawk College,
            driven by a lifelong passion for technology.
          </p>
          <Button
            variant="contained"
            color="primary"
            sx={{ marginTop: theme.spacing(2) }}
            onClick={navigateToSkills}
          >
            View My Skills
          </Button>
        </Grid>
      </Grid>
      <LandscapeOverlay />
    </Box>
  );
};

export default AboutMe;
