import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Back icon
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';

import ProjectIconImage from '../../assets/images/RealEstateBot.png';

  const Projects = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const ProjectIcon = styled('img')(({ theme }) => ({
      borderRadius: '20%', // Rounded corners for an icon-like appearance
      width: '70%', // Reduced width for desktop
      height: 'auto',
      objectFit: 'cover',
      transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.2)', // Shadow effect on hover
      },
      [theme.breakpoints.down('sm')]: {
        width: '75%', // Increased width for mobile
      },
    }));
  
    const projects = [
      {
        title: 'Real Estate AI Chat Bot',
        route: '/RealEstateBot',
        imageUrl: ProjectIconImage,
      },
      

      // ... other projects
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
                  fontSize: { xs: '0.7rem', sm: '1rem' }  // Smaller font size on extra-small screens
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
      </Box>
    );
  };

export default Projects;
