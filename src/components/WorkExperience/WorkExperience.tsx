import React from 'react';
import { Paper, Typography, Box, Button } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import theme from '../../theme';
import Chip from '@mui/material/Chip';

const WorkExperience = () => {
  return (
    <Box sx={{ 
      flexGrow: 1, 
      p: { xs: 2, sm: 3 }, // Responsive padding
      backgroundColor: theme.palette.background.default,
      maxWidth: { sm: '689px', xs: '100%' }, // Responsive width
      mx: 'auto',
    }}>
    
      <Typography variant="h4" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2.125rem' }, color:"white"}}>
        Work Experience
      </Typography>

      {/* XR Software Developer at Mohawk College */}
      <Paper elevation={3} sx={{ m: { xs: 2, sm: 5 }, p: { xs: 2, sm: 5 } }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <WorkIcon sx={{ marginRight: 1 }} />
          <Typography variant="h5" textAlign="center">XR Software Developer - Mohawk College</Typography>
        </Box>
        <Typography variant="body1" gutterBottom>
          Jan 2023 - Dec 2023
        </Typography>
        <Box sx={{ my: 2 }}>
            <Chip label="C#" color="primary" variant="outlined" sx={{ mr: 1, mb: 1 }} />
            <Chip label="Unity" color="primary" variant="outlined" sx={{ mr: 1, mb: 1 }} />
            <Chip label="Unreal Engine" color="primary" variant="outlined" sx={{ mr: 1, mb: 1 }} />
            <Chip label="Blender" color="primary" variant="outlined" sx={{ mr: 1, mb: 1 }} />
            <Chip label="Git" color="primary" variant="outlined" sx={{ mr: 1, mb: 1 }} />    
        </Box>
                <Typography variant="body2" sx={{padding: 2}}>
          Specializing in immersive virtual learning experiences using XR technologies. Key projects include a VR Water Channel Machine, Cell Tower Training Simulator, and an Interactive Car Industry Exhibit.
        </Typography>
        <Button variant="outlined" color="primary" sx={{ marginTop: 1 }}>
          More Details
        </Button>
      </Paper>

      {/* Automation Assistant at Mohawk College */}
      <Paper elevation={3} sx={{ m: { xs: 2, sm: 5 }, p: { xs: 2, sm: 5 } }}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <WorkIcon sx={{marginRight: 1}}/>
          <Typography variant="h5" textAlign="center">Automation Assistant - Mohawk College</Typography>
        </Box>
        <Typography variant="body1" gutterBottom>
          September 2022 - December 2022
        </Typography>
        <Box sx={{my: 2}}>
          <Chip label="Python" color="primary" variant="outlined" sx={{mr: 1, mb: 1}}/>
          <Chip label="Qt 6" color="primary" variant="outlined" sx={{mr: 1, mb: 1}}/>
          <Chip label="OpenAI" color="primary" variant="outlined" sx={{mr: 1, mb: 1}}/>
          <Chip label="httpx" color="primary" variant="outlined" sx={{mr: 1, mb: 1}}/>
          <Chip label="SQLite" color="primary" variant="outlined" sx={{mr: 1, mb: 1}}/>
        </Box>
                <Typography variant="body2" sx={{padding: 2}} gutterBottom>
          As an automation assistant for the manager of funding proposals within the colleges research department, I was tasked with developing an application to automate the grant proposal creation process.
        </Typography>
        <Button variant="outlined" color="primary" sx={{marginTop: 1}}>
          More Details
        </Button>
      </Paper>
      {/* Other positions can be added in a similar manner */}
      
    </Box>
  );
};

export default WorkExperience;
