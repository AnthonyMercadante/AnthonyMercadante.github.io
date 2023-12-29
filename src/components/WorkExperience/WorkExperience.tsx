import React from 'react';
import { Paper, Typography, Box, Button } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';
import theme from '../../theme';

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
          Sep 2023 - Dec 2023 | Hybrid
        </Typography>
        <Typography variant="body2">
          Specializing in immersive virtual learning experiences using XR technologies. Key projects include VR Water Channel Machine, Cell Tower Training Simulator, and Interactive Car Industry Exhibit.
        </Typography>
        <Button variant="outlined" color="primary" sx={{ marginTop: 1 }}>
          More Details
        </Button>
      </Paper>

      {/* Other positions can be added in a similar manner */}
      
    </Box>
  );
};

export default WorkExperience;
