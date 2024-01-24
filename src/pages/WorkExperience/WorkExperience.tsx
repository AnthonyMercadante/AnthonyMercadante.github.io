// React and Hooks
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import LandscapeOverlay from '../../components/LandscapeOverlay'; 
import Starfield from '../../components/Starfield';

// Material UI Components and Icons
import {
  Paper, Typography, Box, Button, IconButton, Chip, useMediaQuery
} from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

// Other Imports
import SwipeableViews from 'react-swipeable-views';
import theme from '../../theme';


interface WorkExperience {
  title: string;
  period: string;
  details: string;
  skills: string[];
  link: string;
}

const WorkExperienceComponent = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeStep, setActiveStep] = useState(0);

  const workExperiences: WorkExperience[] = [
    {
      title: "XR Software Developer Mohawk College",
      period: "Jan 2023 - Dec 2023",
      details: "Specializing in immersive virtual learning experiences using XR technologies. Key projects include a VR Water Channel Machine, Cell Tower Training Simulator, and an Interactive Car Industry Exhibit.",
      skills: ["C#", "Unity", "Unreal Engine", "Blender", "Git"],
      link: "/XRDeveloper",
    },
    {
      title: "Automation Assistant Mohawk College",
      period: "September 2022 - December 2022",
      details: "As an automation assistant for the manager of funding proposals within the colleges research department, I was tasked with developing an application to automate the grant proposal creation process.",
      skills: ["Python", "Qt 6", "OpenAI", "httpx", "SQLite"],
      link: "/AutomationAssistant",
    },
  ];

  const handleBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep + 1) % workExperiences.length);
  };

  const handlePrev = () => {
    setActiveStep((prevActiveStep) => (prevActiveStep - 1 + workExperiences.length) % workExperiences.length);
  };

  const renderWorkExperience = (experience: WorkExperience) => {
    const formattedTitle = experience.title.replace("Mohawk College", "<br>Mohawk College");
    return (
      <Paper elevation={3} sx={{ m: { xs: 2, sm: 5 }, p: { xs: 2, sm: 5 } }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <WorkIcon sx={{ marginRight: 1 }} />
          <Typography variant="h5" textAlign="center" dangerouslySetInnerHTML={{ __html: formattedTitle }} />
        </Box>
        <Typography variant="body1" gutterBottom>
          {experience.period}
        </Typography>
        <Box sx={{ my: 2 }}>
          {experience.skills.map((skill, index) => (
            <Chip label={skill} key={index} color="primary" variant="outlined" sx={{ mr: 1, mb: 1 }} />
          ))}
        </Box>
        <Typography variant="body2" sx={{ padding: 2 }}>
          {experience.details}
        </Typography>
        <Button component={Link} to={experience.link} variant="outlined" color="primary" sx={{ marginTop: 1 }}>
          More Details
        </Button>
      </Paper>
    );
  };

  return (
    <Box sx={{
      flexGrow: 1,
      pt: { xs: 7, sm: 3 },
      pb: { xs: 2, sm: 3 },
      backgroundColor: 'transparent',
      maxWidth: { sm: '689px', xs: '100%' },
      mx: 'auto',
    }}><Starfield/>
      <IconButton onClick={handleBack} sx={{ position: 'absolute', top: 20, left: 20, zIndex: 1 }}>
        <ArrowBackIcon />
      </IconButton>

      {isMobile ? (
        <>
          <SwipeableViews index={activeStep} onChangeIndex={(step) => setActiveStep(step)}>
            {workExperiences.map((experience, index) => (
              <div key={index}>{renderWorkExperience(experience)}</div>
            ))}
          </SwipeableViews>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
            <IconButton onClick={handlePrev} disabled={activeStep === 0} sx={{ mx: 2 }}>
              <ArrowBackIosIcon />
            </IconButton>
            {workExperiences.map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: 10,
                  height: 10,
                  backgroundColor: activeStep === index ? 'white' : 'grey',
                  borderRadius: '50%',
                  mx: 0.5,
                }}
              />
            ))}
            <IconButton onClick={handleNext} disabled={activeStep === workExperiences.length - 1} sx={{ mx: 2 }}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Box>
        </>
      ) : (
        workExperiences.map((experience, index) => (
          <div key={index}>{renderWorkExperience(experience)}</div>
        ))
      )}
      <LandscapeOverlay />
    </Box>
  );
};

export default WorkExperienceComponent;
