import React from 'react';
import { Box, Typography, Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Image from '../../assets/images/openflowmachine.png';
import Image2 from '../../assets/images/closeupwatermachine.png';
import Image3 from '../../assets/images/Toolsforuse.png';
import LandscapeOverlay from '../../components/LandscapeOverlay'; 

const OpenFlowMachinePortfolio = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const imageStyle = isMobile ?
    { width: '100%', height: 'auto', marginTop: '20px' } :
    { maxWidth: '80%', height: 'auto', marginTop: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.default', color: 'text.primary', p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <IconButton onClick={handleBack} sx={{ position: 'absolute', top: 20, left: 20, zIndex: 1 }}>
        <ArrowBackIcon />
      </IconButton>

      <Box sx={{ width: isMobile ? '100%' : '66%', textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}><br></br><br></br>
          Open Flow Water Channel Machine in Virtual Reality
        </Typography>

        {/* YouTube Video Embed */}
        <Box sx={{ my: 4, width: '100%', maxWidth: 560, height: 'auto', marginLeft: 'auto', marginRight: 'auto' }}>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/Hc-zFQL8nQQ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Box>

        <Typography variant="body1" gutterBottom>
          My co-op placement at Mohawk College presented a unique challenge: transforming a space-consuming Open Flow Water Machine into a virtual reality experience.
          This project was not only about saving physical space but also about enhancing the educational process through innovative VR technology.
        </Typography>

        <img src={Image} alt="Open Flow Water Channel Machine Project Scene layout" style={imageStyle} />
        <Typography variant="caption" sx={{ display: 'block', mb: 3 }}>Project Scene Layout</Typography>

        <Typography variant="body1" gutterBottom>
          The VR setup revolutionized how students conducted experiments, replacing the physical machine with VR headsets.
          This transition was a significant step in educational technology, blending practicality with immersive learning.
        </Typography>

        <img src={Image2} alt="Close-up shot of the machine" style={imageStyle} />
        <Typography variant="caption" sx={{ display: 'block', mb: 3 }}>Close-up of the Machine</Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4, mb: 2 }}>
          Tackling the Complexities of Water Simulation
        </Typography>
        <Typography variant="body1" gutterBottom>
          One of the most complex aspects of this project was developing a realistic water simulation in VR.
          I delved into the intricacies of fluid dynamics, exploring Eulerian and Lagrangian methods to accurately represent and simulate fluid behavior.
          This was crucial for ensuring the authenticity of the lab experiments in the virtual environment.
        </Typography>

        <img src={Image3} alt="Tools the users can use for completing their labs" style={imageStyle} />
        <Typography variant="caption" sx={{ display: 'block', mb: 3 }}>Lab Tools in VR</Typography>

        <Typography variant="body1" gutterBottom>
          The success of this project was a testament to the power of VR in education.
          It demonstrated how complex simulations, when executed well, can significantly enhance the learning experience.
          This endeavor at Mohawk College was not just a technical achievement but also a valuable learning experience in applying theoretical knowledge to practical challenges.
        </Typography>

        <Typography variant="body1" gutterBottom>
          This journey honed my skills in simulation, VR, and programming, highlighting the importance of practical application in education and the transformative potential of technology.
        </Typography>
      </Box>
      <LandscapeOverlay />
    </Box>
  );
};

export default OpenFlowMachinePortfolio;
