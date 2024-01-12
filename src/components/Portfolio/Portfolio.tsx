import React from 'react';
import { Box, Button, Grid, Typography, useTheme } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work'; 
import ProjectIcon from '@mui/icons-material/Build'; 
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; 

const Portfolio = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const buttonStyle = {
    width: 150, // Fixed width for desktop
    height: 150, // Fixed height for desktop
    borderRadius: '20%', // Rounded corners
    margin: '10px', // Space between buttons
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)', // Subtle shadow for depth
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.5)', // More pronounced shadow on hover
    },
    '@media (max-width: 600px)': {
      width: 100, // Smaller width for mobile
      height: 100, // Smaller height for mobile
      '& .MuiSvgIcon-root': {
        fontSize: '2rem', // Smaller icon size for mobile
      },
    },
  };

  const textStyle = {
    marginTop: theme.spacing(1), // Space between icon and text
    fontSize: '1rem', // Default text size
    textAlign: 'center', // Center align text
    '@media (max-width: 600px)': {
      fontSize: '0.8rem', // Smaller text size for mobile
    },
  };

  const navigateToWorkExperience = () => {
    navigate('/WorkExperience');
  };

  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <Box sx={{
      backgroundColor: 'background.default', 
      minHeight: '100vh',
      minWidth: '100vw',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Grid container spacing={2} justifyContent="center">
        <Grid item>
          <Button sx={buttonStyle} onClick={navigateToWorkExperience}>
            <WorkIcon sx={{ fontSize: '3rem' }} />
            <Typography sx={textStyle}>Work Experience</Typography>
          </Button>
        </Grid>
        <Grid item>
          <Button sx={buttonStyle} onClick={() => {/* navigate to Projects */}}>
            <ProjectIcon sx={{ fontSize: '3rem' }} />
            <Typography sx={textStyle}>Projects</Typography>
          </Button>
        </Grid>
      </Grid>
      <Button startIcon={<ArrowBackIcon />} onClick={goBack} sx={{ position: 'absolute', top: 20, left: 20 }}>
      </Button>
    </Box>
  );
};

export default Portfolio;
