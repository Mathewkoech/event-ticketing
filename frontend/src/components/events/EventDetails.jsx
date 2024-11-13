import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Box, Alert, Button } from '@mui/material';
import HttpService from '../../api/httpservice';
import { ENDPOINTS } from '../../api/endpoint';
import Loader from '../../components/common/Loader';
import CustomModal from '../../components/common/Modal';
import Grid2 from '@mui/material/Grid2';

const EventDetails = () => {
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [ticketCreated, setTicketCreated] = useState(false); // State to track ticket creation
  const [creationError, setCreationError] = useState(null); // State to track any creation errors

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const data = await HttpService.get(`${ENDPOINTS.events}/${id}`);
        setEvent(data);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch event details');
      } finally {
        setLoading(false);
      }
    };

    fetchEvent();
  }, [id]);

  const handleModalClose = () => setModalOpen(false);
  const handleModalOpen = () => setModalOpen(true);

  // Function to handle ticket creation on confirmation
  const handleConfirmPurchase = async () => {
    try {
    // Prepare the ticket data
      const ticketData = {
        eventId: event.id,
        // userId: 'guestUser',
        quantity: 1,
      };

      // Make the API call to create the ticket
      const response = await HttpService.post(ENDPOINTS.createTicket, ticketData);

      if (response.success) {
        setTicketCreated(true);
        setModalOpen(false); // Close the modal on success
      } else {
        setCreationError('Failed to create ticket');
      }
    } catch (err) {
      console.error('Error creating ticket:', err);
      setCreationError('Failed to create ticket');
    }
  };

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Alert severity="error">{error}</Alert>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 3 }}>
      <Grid2 container spacing={3} justifyContent="center">
        <Grid2 item xs={12} sm={8} md={6}>
          <Card sx={{ maxWidth: 800, margin: '0 auto' }}>
            <CardContent>
              <Typography variant="h4" sx={{ marginBottom: 2 }}>
                {event.name}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                {event.date}
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 1 }}>
                Location: {event.location}
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 2 }}>
                {event.description}
              </Typography>

              {/* Button to open modal for ticket purchase */}
              <Box sx={{ marginTop: 3 }}>
                <Button 
                  variant="contained" 
                  color="primary" 
                  fullWidth 
                  onClick={handleModalOpen}
                >
                  Buy Tickets
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid2>
      </Grid2>

      <CustomModal 
        open={modalOpen} 
        handleClose={handleModalClose} 
        onConfirm={handleConfirmPurchase} 
        content={`Are you sure you want to buy tickets for the event: ${event.name}?`} 
        />


      {/* Display ticket creation success or error message */}
      {ticketCreated && (
        <Box sx={{ mt: 2 }}>
          <Alert severity="success">Ticket successfully created!</Alert>
        </Box>
      )}

      {creationError && (
        <Box sx={{ mt: 2 }}>
          <Alert severity="error">{creationError}</Alert>
        </Box>
      )}
    </Box>
  );
};

export default EventDetails;
