import React from 'react';
import { Box, Typography, Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Image from '../../assets/images/OVINMenu.png'; 
import Image2 from '../../assets/images/OVINFormulaCar.png'; 

const OVIN = () => {
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
        Ontario Vehicle Innovation Network: A VR Journey into the Automotive World
        </Typography>

        {/* YouTube Video Embed */}
        <Box sx={{ my: 4, width: '100%', maxWidth: 560, height: 'auto', marginLeft: 'auto', marginRight: 'auto' }}>
          <iframe 
            width="100%" 
            height="315" 
            src="https://www.youtube.com/embed/tafaUV6LheQ?si=vCzON4Kc9-5p8ggE" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </Box>

        <Typography variant="body1" gutterBottom>
        At Mohawk College's XR Innovation Studio, my final project was a thrilling venture into the world of virtual reality, crafted for the Ontario Vehicle Innovation Network. The government of Ontario had a compelling vision: to kindle a passion for the automotive industry among young students. Our mission? To develop a VR game and information center that would captivate students at various summer camps, sparking an interest in automotive-related post-secondary education.        </Typography>

        <img src={Image} alt="Open Flow Water Channel Machine Project Scene layout" style={imageStyle} />
        <Typography variant="caption" sx={{ display: 'block', mb: 3 }}>Project Scene Layout</Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4, mb: 2 }}>
        The Challenge of Virtual Driving
        </Typography>

        <Typography variant="body1" gutterBottom>
        My role in this project was pivotal—I was responsible for the driving component of the experience. Contrary to initial expectations, crafting a realistic driving experience in VR proved to be a formidable challenge. It wasn't just about simulating a drive; it was about capturing the essence of being behind the wheel, ensuring every turn and acceleration felt genuine.        </Typography>

        <img src={Image2} alt="Close-up shot of the machine" style={imageStyle} />
        <Typography variant="caption" sx={{ display: 'block', mb: 3 }}>Early testing of a hydraulic lift</Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4, mb: 2 }}>
        Engaging Young Minds
        </Typography>
        <Typography variant="body1" gutterBottom>
        Another crucial aspect of my role was to devise entertaining yet educational ways to engage a young audience. 
        We wanted the students to not only have fun but also to walk away with a deeper understanding of the automotive industry. 
        This balance between education and entertainment was key to the project's success.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4, mb: 2 }}>
        The Power of Incentives
        </Typography>
        <Typography variant="body1" gutterBottom>
        One enlightening discovery during our play tests with high school and elementary students was the impact of incentives. 
        We observed that the prospect of driving a car they had built was a powerful motivator for the students, encouraging them to engage fully with the content. 
        This insight shaped our approach, ensuring the final experience was both rewarding and educational.        
        </Typography>


        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4, mb: 2 }}>
        The Crucial Role of Tutorials
        </Typography>

        <Typography variant="body1" gutterBottom>
        The importance of an intuitive tutorial became evident as we progressed. 
        We found that new players, regardless of their gaming background, often struggled to get started. 
        This realization led to many hours dedicated to developing a tutorial system that could guide players of all skill levels through the experience, without the need for our physical presence.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4, mb: 2 }}>
        Overcoming Technical Hurdles
        </Typography>

        <Typography variant="body1" gutterBottom>
        A significant technical challenge was the optimization of the VR experience. 
        The high-poly models of the cars, chosen for their realism, initially led to poor performance. 
        To resolve this, I delved into extensive research and applied various optimization techniques, ensuring a smooth and playable experience without compromising on visual fidelity.        
        </Typography>
      
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4, mb: 2 }}>
        Conclusion
        </Typography>

        <Typography variant="body1" gutterBottom>
        This project at Mohawk College's XR Innovation Studio was more than just a technical feat; it was a journey that honed my skills in VR, simulation, and user engagement. 
        It underscored the transformative potential of technology in education and the impact of practical application in learning environments. 
        By blending fun, education, and state-of-the-art VR technology, we not only achieved our goal but also opened new avenues for future exploration in the realm of virtual learning.      
        </Typography>
        </Box>
    </Box>
  );
};

export default OVIN;
