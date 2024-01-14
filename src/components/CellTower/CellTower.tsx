import React from 'react';
import { Box, Typography, IconButton, Button, useMediaQuery, useTheme } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import Image from '../../assets/images/arieltower.png';
import Image2 from '../../assets/images/GroundCellTower.png';
import Image3 from '../../assets/images/celltowerfromabove.png';

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
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}><br></br>
                    Cell Tower Repair Training in Virutal Reality
                </Typography>

                {/* YouTube Video Embed */}
                <Box sx={{ my: 4, width: '100%', maxWidth: 560, height: 'auto', marginLeft: 'auto', marginRight: 'auto' }}>
                    <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/_Mib3DmiEb8?si=Y7BYzzK8RZHZzDzs"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </Box>

                <Typography variant="body1" gutterBottom>
                    My experience at Mohawk College's XR Innovation Studio was incredibly engaging, particularly my involvement in developing a cell tower training/repair simulation.
                    This project was aligned with Mohawk's upcoming credential for an aerial tower and communications repair specialist, a field experiencing high demand.
                    The simulation aimed not just to attract individuals to this profession but also to identify those who might be deterred by a fear of heights.
                </Typography>

                <img src={Image} alt="Aerial View of Tower" style={imageStyle} />
                <Typography variant="caption" sx={{ display: 'block', mb: 3 }}>Aerial View of Tower</Typography>

                <Typography variant="body1" gutterBottom>
                    Key challenges in this project included mapping a harness to a virtual body, enabling the climbing of the tower, and integrating industry-standard safety protocols into the user experience.
                    I also took on the task of creating all the audio elements, adding to the realism of the simulation.
                </Typography>

                <img src={Image2} alt="View from Tower Height" style={imageStyle} />
                <Typography variant="caption" sx={{ display: 'block', mb: 3 }}>View from Tower Height</Typography>

                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4, mb: 2 }}>
                    Overcoming the Climbing Mechanic Challenge
                </Typography>
                <Typography variant="body1" gutterBottom>
                    A significant hurdle was developing a realistic climbing mechanic.
                    Initially, it was challenging to prevent the user's hands from clipping through the tower during climbing.
                    After extensive research, I found a solution using AI-enhanced hand packages that allowed hands to wrap around objects convincingly, significantly enhancing the sense of realism.
                </Typography>

                <img src={Image3} alt="Close-Up View of Climbing Action" style={imageStyle} />
                <Typography variant="caption" sx={{ display: 'block', mb: 3 }}>Close-Up View of Climbing Action</Typography>

                <Typography variant="body1" gutterBottom>
                    This project at Mohawk College was not just a technical triumph but also a profound learning journey.
                    It honed my skills in VR, simulation, and programming, and underscored the importance of practical application in education and the transformative potential of technology in specialized fields.
                </Typography>

                <Typography variant="body1" gutterBottom>
                    The success of this cell tower training/repair simulation demonstrated the extensive capabilities of VR in educational and professional training contexts, particularly in specialized and high-demand fields like aerial tower and communications repair.
                </Typography>

            </Box>
        </Box>
    );
};

export default OpenFlowMachinePortfolio;
