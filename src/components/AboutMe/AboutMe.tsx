import React from 'react';
import { Button, IconButton} from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import profileImage from '../../assets/images/professional-photo.jpg';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Back icon

const AboutMe = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const navigateToSkills = () => {
    navigate('/skills');
  };

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
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
      }}
    >
      <IconButton onClick={handleBack} sx={{ position: 'absolute', top: 20, left: 20, zIndex: 1 }}>
        <ArrowBackIcon />
      </IconButton>
      <Grid container spacing={0} justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={4}>
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
        <Grid item xs={12} sm={8} md={6} style={{ textAlign: 'center', padding: theme.spacing(5) }}>
          <h1>Hello! I'm Anthony Mercadante</h1>
          <p>Founder of Raethexn Technologies, specializing in custom software solutions.
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
    </Box>
  );
};

export default AboutMe;
