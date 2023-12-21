import React from 'react';

const AboutMe = () => {
  return (
    <div style={{
        backgroundColor: '#000', // Black background
        minHeight: '100vh', // Full viewport height
        minWidth: '100vw', // Full viewport width
        display: 'flex',
        justifyContent: 'center', // Center content horizontally
        alignItems: 'center', // Center content vertically
        color: '#fff', // White text color
      }}>
      <h1>About Me</h1><br></br>
    </div>
  );
};

export default AboutMe;