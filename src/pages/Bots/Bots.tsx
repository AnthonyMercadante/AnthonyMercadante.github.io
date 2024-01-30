// React and Hooks
import React from 'react';
import { useNavigate } from 'react-router-dom';
import LandscapeOverlay from '../../components/LandscapeOverlay';

// Material UI Components, Icons, and Styles
import { Box, Grid, Typography, IconButton, useTheme, styled } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Back icon

// Asset Imports
import ProjectImage from '../../assets/images/RealEstateBot.png';
import ProjectImage2 from '../../assets/images/BattleShipBot.png';

const ProjectIcon = styled('img')(({ theme }) => ({
  borderRadius: '20%',
  width: '70%', // Default width for larger screens
  height: 'auto',
  objectFit: 'cover',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.2)',
  },
  [theme.breakpoints.down('sm')]: {
    width: '60%', // Adjusted width for mobile screens to bring icons closer
  },
}));

const Bots = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const projects = [
    {
      title: 'Real Estate AI Bot',
      route: '/RealEstateBot',
      imageUrl: ProjectImage,
    },
    {
      title: 'BattleShip Bot',
      route: '/BattleShipBot',
      imageUrl: ProjectImage2,
    }
  ];

  const navigateToProject = (route: string) => {
    navigate(route);
  };

  return (
    <Box sx={{
      p: 1.5,
      backgroundColor: 'transparent',
      color: 'white',
      height: 'calc(100vh - 24px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      <IconButton onClick={() => navigate(-1)} sx={{ position: 'absolute', top: 20, left: 20 }}>
        <ArrowBackIcon />
      </IconButton>
      <Grid container spacing={2} justifyContent="center" sx={{ maxWidth: 1200, [theme.breakpoints.down('sm')]: { maxWidth: '100%', spacing: 0.25 } }}> {/* Reduced spacing for mobile */}
        {projects.map((project, index) => (
          <Grid item xs={6} sm={6} md={4} key={index} onClick={() => navigateToProject(project.route)}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <ProjectIcon src={project.imageUrl} alt={project.title} />
              <Typography variant="subtitle1" sx={{
                mt: 1,
                color: 'white',
                fontSize: { xs: '0.7rem', sm: '0.7rem', md: '1rem' }
              }}>
                {project.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Typography variant="subtitle1" sx={{ mt: 2, color: 'gray', fontSize: { xs: '0.8rem', sm: '1rem' } }}>
        Click an icon to view the project
      </Typography>
      <LandscapeOverlay />
    </Box>
  );
};

export default Bots;
