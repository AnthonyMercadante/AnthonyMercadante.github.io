// React and Hooks
import React from 'react';
import { useNavigate } from 'react-router-dom';
import PreloadImages from '../../components/PreloadImages';

// Material UI Components and Styles
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useTheme, styled } from '@mui/material/styles';

// Material UI Icons
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

// Assets
import ReactProjectIconImage2 from '../../assets/images/TorontoNightlifeExplorerIcon.png';
import ReactProjectIconImage from '../../assets/images/EcoChallengeTrackerIcon.png';

const ReactProjects = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const ProjectIcon = styled('img')(({ theme }) => ({
    borderRadius: '20%',
    width: '70%', // Adjusted width for larger screens
    height: 'auto',
    objectFit: 'cover',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.2)',
    },
    [theme.breakpoints.down('sm')]: {
      width: '60%', // Adjusted width for mobile screens
    },
  }));

  // Sample project details
  const projects = [
    {
      title: 'Eco Challenge Tracker',
      route: '/EcoChallengeTracker',
      imageUrl: ReactProjectIconImage,
    },
    {
      title: 'Toronto Nightlife Explorer',
      route: '/TorontoNightlifeExplorer',
      imageUrl: ReactProjectIconImage2,
    }
  ];

  const navigateToProject = (route: string) => {
    navigate(route);
  };

  return (
    <PreloadImages>
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
        <Grid container spacing={2} justifyContent="center" sx={{ maxWidth: 1200, [theme.breakpoints.down('sm')]: { maxWidth: '100%', spacing: 1 } }}> {/* Adjusted spacing for mobile */}
          {projects.map((project, index) => (
            <Grid item xs={6} sm={6} md={4} key={index} onClick={() => navigateToProject(project.route)}> {/* Adjusted grid item size for xs */}
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <ProjectIcon src={project.imageUrl} alt={project.title} />
                <Typography variant="subtitle1" sx={{
                  mt: 1,
                  color: 'white',
                  fontSize: { xs: '0.7rem', sm: '0.7rem', md: '1rem' } // Adjusted font size for responsiveness
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
    </PreloadImages>
  );
};

export default ReactProjects;
