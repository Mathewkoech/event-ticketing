import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const About = () => {
  return (
    <Container sx={{ padding: 3 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h6" paragraph>
          Welcome to our Event Ticketing platform! We aim to provide a seamless experience for event enthusiasts to find and purchase tickets for their favorite events.
        </Typography>
        <Typography variant="body1" paragraph>
          We offer a wide range of events, including concerts, conferences, sports, and theater performances. Our goal is to make the ticket-buying process easy and stress-free for everyone.
        </Typography>
        <Typography variant="body2" color="textSecondary">
          Contact us for more information or assistance.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
