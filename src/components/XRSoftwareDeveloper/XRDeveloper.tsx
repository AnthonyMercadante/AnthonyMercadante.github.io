// React and Hooks
import React from 'react';
import { useNavigate } from 'react-router-dom';

// Material UI Components, Icons, and Styles
import { Box, Grid, Typography, IconButton, useTheme, styled } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Back icon

// Asset Imports
import ProjectImage from '../../assets/images/OpenFlowIcon.png';
import ProjectImage2 from '../../assets/images/CellTowerIcon.png';
import ProjectImage3 from '../../assets/images/OVIN.png';



const ProjectIcon = styled('img')(({ theme }) => ({
  borderRadius: '20%',
  width: '70%',
  height: 'auto',
  objectFit: 'cover',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.2)',
  },
  [theme.breakpoints.down('sm')]: {
    width: '75%',
  },
}));

const XRDeveloper = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const projects = [
    {
      title: 'Water Machine',
      route: '/OpenFlowMachine',
      imageUrl: ProjectImage,
    },
    {
      title: 'Cell Tower',
      route: '/CellTower',
      imageUrl: ProjectImage2,
    },
    {
      title: 'OVIN',
      route: '/OVIN',
      imageUrl: ProjectImage3,
    }
  ];



  const navigateToProject = (route: string) => {
    navigate(route);
  };

  return (
    <Box sx={{
      p: 1.5,
      backgroundColor: 'black',
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
      <Grid container spacing={4} sx={{ maxWidth: 1200, [theme.breakpoints.down('sm')]: { maxWidth: '100%' } }}>
        {projects.map((project, index) => (
          <Grid item xs={4} sm={6} md={4} key={index} onClick={() => navigateToProject(project.route)}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <ProjectIcon src={project.imageUrl} alt={project.title} />
              <Typography variant="subtitle1" sx={{
                mt: 1,
                color: 'white',
                fontSize: { xs: '0.7rem', sm: '1rem' }
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
        '@media (orientation: landscape) and (max-width: 768px)': {
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
        },
      }}>
        <Typography variant="h6">
          Please rotate your device to portrait mode.
        </Typography>
      </Box>
    </Box>
  );
};

export default XRDeveloper;