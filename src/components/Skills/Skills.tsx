import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'; // Back icon
import skillImage1 from '../../assets/images/python-analytics-visualization.png';
import skillImage2 from '../../assets/images/AIIntelligentSystems.png';
import skillImage3 from '../../assets/images/AdvancedDotNet.png';
import skillImage4 from '../../assets/images/WebDevelopmentDatabase.png';
import skillImage5 from '../../assets/images/MobileAppDev.png';
import skillImage6 from '../../assets/images/DataStructures.png';
import skillImage7 from '../../assets/images/ObjectOriented.png';
import skillImage8 from '../../assets/images/SoftwareQuality.png';
import skillImage9 from '../../assets/images/NetworkFundamentals.png';

interface Skill {
    title: string;
    skillsList: string[];
    description: string;
    imageUrl: string;
  }
  
  interface SkillsModalProps {
    skill: Skill;
    open: boolean;
    handleClose: () => void;
  }

  const SkillIcon = styled('img')(({ theme }) => ({
    borderRadius: '20%', // Rounded corners for an icon-like appearance
    width: '70%', // Reduced width for desktop
    height: 'auto',
    objectFit: 'cover',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.2)', // Shadow effect on hover
    },
    [theme.breakpoints.down('sm')]: {
      width: '75%', // Increased width for mobile
    },
  }));

const SkillsModal = ({ skill, open, handleClose }: SkillsModalProps) => {
    const theme = useTheme();
    return (
    <Modal open={open} onClose={handleClose} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box 
        sx={{ 
          position: 'relative', // For positioning the close button
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          maxWidth: 600,
          width: '90%', 
          color: 'white',
          backgroundColor: '#2E2E2E',
          [theme.breakpoints.down('sm')]: {
            maxWidth: '80%', // Smaller modal on mobile
            p: 2, // Reduced padding on mobile
          },
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: 'white', // Or any other color that suits your theme
          }}
        >
          <CloseIcon />
        </IconButton>
        <Typography variant="h5" gutterBottom component="h2" sx={{ color: 'primary.main' }}>
          {skill.title}
        </Typography>
        <Box sx={{ my: 2 }}>
          {skill.skillsList.map((skillItem, index) => (
            <Chip label={skillItem} key={index} color="primary" variant="outlined" sx={{ mr: 1, mb: 1 }} />
          ))}
        </Box>
        <Typography variant="body1" sx={{ mt: 2 }}>
          {skill.description}
        </Typography>
      </Box>
    </Modal>
    );
};
  
  

const Skills = () => {
    const theme = useTheme();
    const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null);
    const [modalOpen, setModalOpen] = useState(false);
    const skills = [
      {
        title: 'Python Analytics & Visualization',
        skillsList: [
          'Python programming',
          'Statistical Analysis',
          'Data visualization',
          'Data cleaning techniques',
          'Linear regression',
          'Graph interpretation'
        ],
        description: 'I am proficient in Python for analyzing and visualizing data, with a focus on practical applications in statistics, data cleaning, and trend analysis.',
        imageUrl: skillImage1,
      },
      {
        title: 'Artificial Intelligence & Intelligent Systems',
        skillsList: [
            'AI fundamentals',
            'System design for AI applications',
            'Prototyping intelligent systems'
        ],
        description: 'I have understanding of AI principles and the ability to develop intelligent systems, encompassing both theoretical aspects and practical applications.',
        imageUrl: skillImage2,  
      },
      {
        title: "Advanced .NET Programming",
        skillsList: [
            '.Net Core',
            'LINQ',
            'Lambda functions',
            'Asynchronous programming',
            'Design patterns'
        ],
        description: 'I have been taught advanced skills in .NET Core programming, emphasizing on scalable application development and efficient debugging techniques.',
        imageUrl: skillImage3,
      },
      {
        title: "Web Development & Database Management",
        skillsList: [
            'ASP.NET',
            'Dynamic web application development',
            'Database interfacing',
            'Oracle PL/SQL', 
            'Responsive web design',
            'REACT',
             'PHP',
        ],
        description: 'I have learned comprehensive expertise in building dynamic web applications and managing databases using a wide range of programming languages.',
        imageUrl: skillImage4,
      },
      {
        title: "Mobile Application Development",
        skillsList: [
            'Android app development',
            'Java',
            'Android Studio',
            'UI Design',
            'Cross-application data sharing'
        ],
        description: 'I am proficent in developing Android applications using Java, focusing on user interface and interaction.',
        imageUrl: skillImage5,
      },
      {
        title: "Data Structures, Algorithms & Database Theory",
        skillsList: [
            'Java programming',
            'Data structures',
            'Algorithm application',
            'SQL',
            'Database normalization',
        ],
        description: 'I have a solid foundation in data strcutures and algorithms using Java, combined with in-depth knowedge of database theory and SQL.',
        imageUrl: skillImage6, 
      },
      {
        title: 'Object-Oriented Programming & System Analysis',
        skillsList: [
            'Object-oriented methodology',
            'UML',
            'System analysis & design',
            'Software lifecycle management',
        ],
        description: 'I have learned a strong understanding of object-oriented systems, UML, and system analysis, with a focus on the software development lifecycle.',
        imageUrl: skillImage7,
      },
      {
        title: 'Software Quality, Testing & Technical Writing',
        skillsList: [
            'Software testing',
            'Quality assurance',
            'Test documentation',
            'Technical writing and documentation',
        ],
        description: 'Proficient in ensuring software quality through testing and documentation, complemented by skills in technical writing and training.',
        imageUrl: skillImage8,
      },
      {
        title: 'Network Fundamentals & Client-Side Programming',
        skillsList: [
            'Networking technologies',
            'JavaScript',
            'JQuery',
            'Client-side web app development'
        ],
        description: 'Knowledge of networking fundamentals combined with expertise in client-side programming using JavaScript and jQuery.',
        imageUrl: skillImage9,
      },
      // ... add other skills here
    ];

    const handleOpen = (skill: Skill) => {
        setSelectedSkill(skill);
        setModalOpen(true);
      };

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Go back to the previous page
  };

  return (
    <Box sx={{ 
      p: 1.5, 
      backgroundColor: 'black', 
      color: 'white', 
      height: 'calc(100vh - 24px)',
      display: 'flex', 
      flexDirection: 'column', // Changed to column for vertical stacking
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    }}>
      <Grid container spacing={4} sx={{ maxWidth: 1200, [theme.breakpoints.down('sm')]: { maxWidth: '100%' } }}>    
        {skills.map((skill, index) => (
          <Grid item xs={4} sm={6} md={4} key={index} onClick={() => handleOpen(skill)}> 
            <SkillIcon src={skill.imageUrl} alt={skill.title} />
          </Grid>
        ))}
      </Grid>

      <Typography variant="subtitle1" sx={{ mt: 2, color: 'gray' }}>
        Click an icon to reveal more about each skill
      </Typography>

      {selectedSkill && <SkillsModal skill={selectedSkill} open={modalOpen} handleClose={() => setModalOpen(false)} />}
      <Button startIcon={<ArrowBackIcon />} onClick={goBack} sx={{ position: 'absolute', top: 20, left: 20 }}>
      </Button>
    </Box>
  );
};

export default Skills;