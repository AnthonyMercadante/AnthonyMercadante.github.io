import React from 'react';
import Box from '@mui/material/Box'; 
import Typography from '@mui/material/Typography';

const LandscapeOverlay: React.FC = () => {
  return (
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
  );
};

export default LandscapeOverlay;
