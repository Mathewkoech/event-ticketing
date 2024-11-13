import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container } from '@mui/material';

const Contact = () => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent: ' + message);
  };

  return (
    <Container sx={{ padding: 3 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h6" paragraph>
          We would love to hear from you! If you have any questions or need support, feel free to contact us.
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Your Message"
            variant="outlined"
            multiline
            rows={4}
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{ marginBottom: 2 }}
          />
          <Box sx={{ textAlign: 'center' }}>
            <Button variant="contained" color="primary" type="submit">
              Send Message
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
};

export default Contact;
