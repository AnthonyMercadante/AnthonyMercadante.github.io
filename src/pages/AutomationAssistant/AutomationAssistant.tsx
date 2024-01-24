import React from 'react';
import { Box, Typography, useMediaQuery, useTheme, IconButton, Card, CardContent } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';
import LandscapeOverlay from '../../components/LandscapeOverlay'; 
import Starfield from '../../components/Starfield';

const AutomationAssistant = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const cardStyle = {
    backgroundColor: 'rgba(25, 25, 25, 0.8)',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)',
    marginBottom: '20px',
    color: 'white',
    textAlign: 'left',
  };

  return (

    <Box sx={{ flexGrow: 1, bgcolor: 'transparent', color: 'text.secondary', p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Starfield/>
      <IconButton onClick={handleBack} sx={{ position: 'absolute', top: 20, left: 20, zIndex: 1 }}>
        <ArrowBackIcon />
      </IconButton>
      <Box sx={{ flexGrow: 1, bgcolor: 'black', color: 'text.secondary', p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}></Box>

      <Box sx={{ width: isMobile ? '100%' : '66%' }}>
        <Card sx={cardStyle}>
          <CardContent>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
              Automation Assistant: Streamlining the Grant Proposal Creation Process.
            </Typography>
            <Typography variant="body1" gutterBottom>
              From September 2022 to December 2022, I served as an Automation Assistant within the college's research department, reporting directly to the manager of funding proposals. My primary mission? To develop an application aimed at automating the grant proposal creation process.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={cardStyle}>
          <CardContent>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4, mb: 2 }}>
              The Challenge
            </Typography>
            <Typography variant="body1" gutterBottom>
              The task at hand was both intricate and critical. Grant proposals are fundamental to securing funding for college research projects, but their creation can be time-consuming and complex. My goal was to streamline this process, making it more efficient and less prone to human error.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={cardStyle}>
          <CardContent>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4, mb: 2 }}>
              My Approach
            </Typography>
            <Typography variant="body1" gutterBottom>
              Using my skills in Python, Qt 6, OpenAI, httpx, and SQLite, I embarked on designing and implementing a comprehensive automation solution. The process involved creating templates, forms, and process flows tailored to the specific needs of grant proposal creation.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={cardStyle}>
          <CardContent>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4, mb: 2 }}>
              Key Responsibilities
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Automation Strategies:</strong> I developed strategies to automate repetitive and time-consuming tasks within the grant proposal process.<br /><br />
              <strong>Process Flow Development:</strong> Designing intuitive and effective process flows was crucial to ensure a seamless transition from manual to automated procedures.<br /><br />
              <strong>System Troubleshooting & Maintenance:</strong> Identifying and resolving issues was a constant task, as was maintaining the overall health of the automation system.<br /><br />
              <strong>Technical Support:</strong> Providing ongoing support to the research department staff, ensuring they could navigate and utilize the new system effectively.
            </Typography>
          </CardContent>
        </Card>
        <Card sx={cardStyle}>
          <CardContent>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4, mb: 2 }}>
              Outcomes
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Efficiency:</strong> The automation of the grant proposal process reduced the time and effort required, allowing the research department to focus on more strategic tasks.<br /><br />
              <strong>Accuracy:</strong> With automated templates and forms, the likelihood of errors in proposals was greatly reduced.<br /><br />
              <strong>Integration:</strong> Successfully integrating the automation processes into the existing workflow without disrupting ongoing operations was a major achievement.<br /><br />
            </Typography>
          </CardContent>
        </Card>
        <Card sx={cardStyle}>
          <CardContent>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4, mb: 2 }}>
              Conclusion
            </Typography>
            <Typography variant="body1" gutterBottom>
              This position was more than a job; it was a learning experience that honed my skills in automation and software development. It taught me the value of precision, innovation, and user-centric design in creating solutions that can transform an organization's workflow. Thank you for taking the time to read about this exciting chapter in my professional journey. I look forward to the new challenges and opportunities that lie ahead in the world of software development and automation.
            </Typography>
          </CardContent>
        </Card>
      </Box>
      <LandscapeOverlay />
    </Box>
  );
};

export default AutomationAssistant;
