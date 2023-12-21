import React from 'react';
import { Container, Typography } from '@mui/material';

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
                 textAlign: 'center'
               }}>
      <Typography variant="h1" component="h1" gutterBottom>
        Anthony Mercadante
      </Typography>
      <Typography variant="body1" style={{ maxWidth: '600px' }}> {/* maxWidth for better readability */}
        I'm a full-stack software developer. Here you can find my portfolio, 
        a small glimpse of recently worked on projects using various programming languages.
      </Typography>
      {/* Additional content goes here */}
    </Container>
  );
};

export default HomePage;
