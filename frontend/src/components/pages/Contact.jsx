import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Container, Grid2 } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    companyName: '',
    phoneNumber: '',
    country: '',
    ticketSales: '',
    eventCost: '',
    reason: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent: ' + JSON.stringify(formData));
  };

  return (
    <Container sx={{ padding: 3 }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="h6" paragraph>
          We would love to hear from you! If you have any questions or need support, feel free to reach out.
        </Typography>
        
        {/* Form Section */}
        <form onSubmit={handleSubmit}>
          <Grid2 container spacing={2}>

            {/* First Name and Last Name */}
            <Grid2 item xs={12} sm={6}>
              <TextField
                label="First Name*"
                variant="outlined"
                fullWidth
                value={formData.firstName}
                onChange={handleChange}
                name="firstName"
                required
              />
            </Grid2>
            <Grid2 item xs={12} sm={6}>
              <TextField
                label="Last Name*"
                variant="outlined"
                fullWidth
                value={formData.lastName}
                onChange={handleChange}
                name="lastName"
                required
              />
            </Grid2>

            {/* Work Email and Company Name */}
            <Grid2 item xs={12} sm={6}>
              <TextField
                label="Work Email*"
                variant="outlined"
                fullWidth
                type="email"
                value={formData.email}
                onChange={handleChange}
                name="email"
                required
              />
            </Grid2>
            <Grid2 item xs={12} sm={6}>
              <TextField
                label="Company Name*"
                variant="outlined"
                fullWidth
                value={formData.companyName}
                onChange={handleChange}
                name="companyName"
                required
              />
            </Grid2>

            {/* Phone Number, Country, Ticket Sales */}
            <Grid2 item xs={12} sm={6}>
              <TextField
                label="Phone Number*"
                variant="outlined"
                fullWidth
                value={formData.phoneNumber}
                onChange={handleChange}
                name="phoneNumber"
                required
              />
            </Grid2>
            <Grid2 item xs={12} sm={6}>
              <TextField
                label="Country*"
                variant="outlined"
                fullWidth
                value={formData.country}
                onChange={handleChange}
                name="country"
                required
              />
            </Grid2>

            {/* Ticket Sales & Event Cost */}
            <Grid2 item xs={12} sm={6}>
              <TextField
                label="How many paid tickets do you plan to sell in the next year?*"
                variant="outlined"
                fullWidth
                value={formData.ticketSales}
                onChange={handleChange}
                name="ticketSales"
                required
                type="number"
              />
            </Grid2>
            <Grid2 item xs={12} sm={6}>
              <TextField
                label="On average, what is the cost to attend your events?*"
                variant="outlined"
                fullWidth
                value={formData.eventCost}
                onChange={handleChange}
                name="eventCost"
                required
                type="number"
              />
            </Grid2>

            {/* Reason for Contact */}
            <Grid2 item xs={12}>
              <TextField
                label="Reason for getting in touch*"
                variant="outlined"
                fullWidth
                value={formData.reason}
                onChange={handleChange}
                name="reason"
                required
                multiline
                rows={3}
              />
            </Grid2>

            {/* Message */}
            <Grid2 item xs={12}>
              <TextField
                label="Your Message"
                variant="outlined"
                fullWidth
                value={formData.message}
                onChange={handleChange}
                name="message"
                multiline
                rows={4}
                required
              />
            </Grid2>

            {/* Submit Button */}
            <Grid2 item xs={12}>
              <Box sx={{ textAlign: 'center' }}>
                <Button variant="contained" color="primary" type="submit">
                  Send Message
                </Button>
              </Box>
            </Grid2>

          </Grid2>
        </form>
      </Box>

      {/* Sales Contact Information Section */}
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Typography variant="h6" gutterBottom>
          Ready to bring your next event to life? Reach out to our Sales Team!
        </Typography>
        <Typography variant="body1">
          Call us: <strong>+254 717573392</strong>
        </Typography>
      </Box>
    </Container>
  );
};

export default Contact;
