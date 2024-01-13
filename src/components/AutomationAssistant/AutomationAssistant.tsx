import React from 'react';
import { Link } from 'react-router-dom';
import cursorImage from '../../assets/images/arrow.png';
import { Box, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom'; 

const AutomationAssistant = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <Box sx={{ flexGrow: 1, bgcolor: 'background.default', color: 'text.primary', p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Button startIcon={<ArrowBackIcon />} onClick={handleBack} sx={{ alignSelf: 'flex-start', mb: 2 }}>
        
      </Button>

      <Box sx={{ width: isMobile ? '100%' : '66%', textAlign: 'center', mb: 4 }}>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', mb: 3 }}>
        Automation Assistant at Mohawk College: Streamlining Grant Proposal Creation
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4, mb: 2 }}>
        The Role: Revolutionizing Grant Proposals
        </Typography>
        <Typography variant="body1" gutterBottom>
        From September 2022 to December 2022, I served as an Automation Assistant within the college's research department, reporting directly to the manager of funding proposals. 
        My primary mission? To develop an application aimed at automating the grant proposal creation process.
        </Typography>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4, mb: 2 }}>
        The Challenge
        </Typography>
        <Typography variant="body1" gutterBottom>
        The task at hand was both intricate and critical. 
        Grant proposals are fundamental to securing funding for college research projects, but their creation can be time-consuming and complex. 
        My goal was to streamline this process, making it more efficient and less prone to human error.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4, mb: 2 }}>
        My Approach
        </Typography>
        <Typography variant="body1" gutterBottom>
        Using my skills in Python, Qt 6, OpenAI, httpx, and SQLite, I embarked on designing and implementing a comprehensive automation solution. 
        The process involved creating templates, forms, and process flows tailored to the specific needs of grant proposal creation.
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
        Key Responsibilities
        </Typography>

        <Typography variant="body1" gutterBottom>
        <strong>Automation Strategies:</strong> I developed strategies to automate repetitive and time-consuming tasks within the grant proposal process.<br></br><br></br>
        <strong>Process Flow Development:</strong> Designing intuitive and effective process flows was crucial to ensure a seamless transition from manual to automated procedures.<br></br><br></br>
        <strong>System Troubleshooting & Maintenance:</strong> Identifying and resolving issues was a constant task, as was maintaining the overall health of the automation system.<br></br><br></br>
        <strong>Technical Support:</strong> Providing ongoing support to the research department staff, ensuring they could navigate and utilize the new system effectively.
        </Typography>

        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4, mb: 2 }}>
        Outcomes
        </Typography>

        <Typography variant="body1" gutterBottom>
        The impact of this project was significant:<br></br><br></br>

        <strong>Efficiency:</strong> The automation of the grant proposal process reduced the time and effort required, allowing the research department to focus on more strategic tasks.<br></br><br></br>
        <strong>Accuracy:</strong> With automated templates and forms, the likelihood of errors in proposals was greatly reduced.<br></br><br></br>
        <strong>Integration:</strong> Successfully integrating the automation processes into the existing workflow without disrupting ongoing operations was a major achievement.<br></br><br></br>          
        </Typography>
      
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4, mb: 2 }}>
        Conclusion
        </Typography>

        <Typography variant="body1" gutterBottom>
        This position was more than a job; it was a learning experience that honed my skills in automation and software development. 
        It taught me the value of precision, innovation, and user-centric design in creating solutions that can transform an organization's workflow.
        Thank you for taking the time to read about this exciting chapter in my professional journey. 
        I look forward to the new challenges and opportunities that lie ahead in the world of software development and automation. 
        </Typography>
        </Box>
    </Box>
  );
};

export default AutomationAssistant;