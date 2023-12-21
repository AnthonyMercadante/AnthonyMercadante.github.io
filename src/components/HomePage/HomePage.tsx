import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';

const HomePage = () => {
  return (
    <Container maxWidth={false} 
               style={{ 
                 backgroundColor: '#000', 
                 color: '#fff', 
                 minHeight: '100vh', 
                 display: 'flex', 
                 flexDirection: 'column', 
                 justifyContent: 'center', 
                 alignItems: 'center',
                 textAlign: 'center',
                 padding: '20px', 
               }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Anthony Mercadante
      </Typography>
      <Typography variant="body1" style={{ maxWidth: '600px', marginBottom: '20px' }}> {/* Added margin-bottom */}
        I'm a full-stack software developer. Here you can find my portfolio, 
        a small glimpse of recently worked on projects using various programming languages.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/portfolio">
        View My Work
      </Button>
    </Container>
  );
};

export default HomePage;
