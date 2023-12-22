import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import skillImage1 from '../../assets/images/python-analytics-visualization.png';
import skillImage2 from '../../assets/images/AIIntelligentSystems.png';
import skillImage3 from '../../assets/images/AdvancedDotNet.png';
import skillImage4 from '../../assets/images/WebDevelopmentDatabase.png';

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
  

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    color: theme.palette.text.secondary,
    height: 200,
    maxWidth: 400,
    width: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 4px 20px 0 rgba(255, 255, 255, 0.2)' // subtle glow effect
    }
  }));

const SkillImage = styled('img')({
  height: '100px', // Adjust as needed
  width: '100px', // Adjust as needed
  objectFit: 'cover',
  marginBottom: '10px',
});

const SkillsModal = ({ skill, open, handleClose }: SkillsModalProps) => (
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
        {/* ... rest of your modal content */}
      </Box>
    </Modal>
  );
  
  

const Skills = () => {
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
      }
      // ... add other skills here
    ];

    const handleOpen = (skill: Skill) => {
        setSelectedSkill(skill);
        setModalOpen(true);
      };

      return (
        <Box sx={{ p: 3, backgroundColor: 'black', color: 'white' }}>
          <Grid container spacing={4} justifyContent="center">
            {skills.map((skill, index) => (
              <Grid item xs={12} sm={6} md={4} lg={4} key={index} onClick={() => handleOpen(skill)}>
                <Item>
                  <SkillImage src={skill.imageUrl} alt={skill.title} />
                  <Typography variant="h6">{skill.title}</Typography>
                </Item>
              </Grid>
            ))}
          </Grid>
          {selectedSkill && <SkillsModal skill={selectedSkill} open={modalOpen} handleClose={() => setModalOpen(false)} />}
        </Box>
      );
    };
    
    export default Skills;