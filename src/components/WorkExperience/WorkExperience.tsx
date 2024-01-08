import React from 'react';
import { Paper, Typography, Box, Button } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import theme from '../../theme';
import Chip from '@mui/material/Chip';

const WorkExperience = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 3, backgroundColor: theme.palette.background.default }}>
      <Typography variant="h3" gutterBottom>
        Work Experience
      </Typography>

      {/* XR Software Developer at Mohawk College */}
      <Paper elevation={3} sx={{ margin: 2, padding: 2 }}>
        <Box display="flex" alignItems="center">
          <WorkIcon sx={{ marginRight: 1 }} />
          <Typography variant="h5">XR Software Developer - Mohawk College</Typography>
        </Box>
        <Typography variant="body1" gutterBottom>
          Jan 2023 - Dec 2023 | Hybrid
        </Typography>
        <Typography variant="body2">
          Specializing in immersive virtual learning experiences using XR technologies. Key projects include VR Water Channel Machine, Cell Tower Training Simulator, and Interactive Car Industry Exhibit.
        </Typography>
        <Box sx={{ my: 2 }}>
            <Chip label="C#" color="primary" variant="outlined" sx={{ mr: 1, mb: 1 }} />
            <Chip label="Unity" color="primary" variant="outlined" sx={{ mr: 1, mb: 1 }} />
            <Chip label="Unreal Engine" color="primary" variant="outlined" sx={{ mr: 1, mb: 1 }} />
            <Chip label="Blender" color="primary" variant="outlined" sx={{ mr: 1, mb: 1 }} />    
        </Box>
        <Button variant="outlined" color="primary" sx={{ marginTop: 1 }}>
          More Details
        </Button>
      </Paper>

      {/* Automation Assistant at Mohawk College */}
      <Paper elevation={3} sx={{margin: 2, padding: 2}}>
        <Box display="flex" alignItems="center">
          <WorkIcon sx={{marginRight: 1}}/>
          <Typography variant="h5">Automation Assistant - Mohawk College</Typography>
        </Box>
        <Typography variant="body1" gutterBottom>
          September 2022 - December 2022 | Hybrid
        </Typography>
        <Typography variant="body2" gutterBottom>
          As an automation assistant for the manager of funding propsals within the colleges research department, I was tasked with developing an application to automate the grant proposal creatin process.
        </Typography>
        <Box sx={{my: 2}}>
          <Chip label="Python" color="primary" variant="outlined" sx={{mr: 1, mb: 1}}/>
        </Box>
        <Button variant="outlined" color="primary" sx={{marginTop: 1}}>
          More Details
        </Button>
      </Paper>
      {/* Other positions can be added in a similar manner */}
      
    </Box>
  );
};

export default WorkExperience;
