import React, { useEffect, useState } from 'react';
import { Button, Card, CardContent, Typography, Box, Grid2, Chip, FormControl, Select, MenuItem, InputLabel, TextField } from '@mui/material';
import HttpService from '../../api/httpservice';
import { ENDPOINTS } from '../../api/endpoint';
import Loader from '../common/Loader';
import { format } from 'date-fns';


const Homepage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('All');
  const [dateFilter, setDateFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await HttpService.get(ENDPOINTS.events);
        setEvents(data.results || []);
      } catch (err) {
        console.error('Error fetching events:', err);
        setError('Failed to fetch events');
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  // Event filtering logic
  const filteredEvents = events.filter(event => {
    const matchesCategory = category === 'All' || event.category === category;
    const matchesDate = dateFilter === 'All' || format(new Date(event.date), 'yyyy-MM-dd') === dateFilter;
    const matchesSearch = event.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesDate && matchesSearch;
  });

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography variant="h6" color="error">{error}</Typography>
      </Box>
    );
  }

  return (
    <main style={{ padding: '20px' }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '40vh',
          backgroundImage: 'url(/path/to/your/image.jpg)', // Add your image path here
          backgroundSize: 'cover', // Ensures the image covers the entire box
          backgroundPosition: 'center', // Centers the image
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          padding: '20px',
          color: 'white', // Optional: Adjust text color to be visible on dark/light backgrounds
        }}
      >
        <Typography variant="h2" color="textPrimary" gutterBottom>
          Discover Your Next Event
        </Typography>
        <Typography variant="h6" color="textSecondary" sx={{ marginBottom: 3 }}>
          Explore, find, and attend events around you
        </Typography>
        {/* Search Bar */}
        <TextField
          variant="outlined"
          label="Search for events"
          fullWidth
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          sx={{ maxWidth: '600px' }}
        />
      </Box>


      {/* Filters Section */}
      <Box sx={{ marginTop: 4 }}>
        <Typography variant="h4" gutterBottom>Find Events</Typography>
        <Grid2 container spacing={3}>
          <Grid2 item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Category</InputLabel>
              <Select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                label="Category"
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="Music">Music</MenuItem>
                <MenuItem value="Business">Business</MenuItem>
                <MenuItem value="Food & Drink">Food & Drink</MenuItem>
                <MenuItem value="Nightlife">Nightlife</MenuItem>
                {/* Add more categories as needed */}
              </Select>
            </FormControl>
          </Grid2>
          <Grid2 item xs={12} sm={4}>
            <FormControl fullWidth>
              <InputLabel>Date</InputLabel>
              <Select
                value={dateFilter}
                onChange={(e) => setDateFilter(e.target.value)}
                label="Date"
              >
                <MenuItem value="All">All</MenuItem>
                <MenuItem value="2024-11-14">Today</MenuItem>
                <MenuItem value="2024-11-15">This Weekend</MenuItem>
                {/* Add dynamic date logic for Today, This Weekend, etc */}
              </Select>
            </FormControl>
          </Grid2>
        </Grid2>
      </Box>

      {/* Event Listings Section */}
      <Grid2 container spacing={3} sx={{ marginTop: 4 }}>
        {filteredEvents.length === 0 ? (
          <Box sx={{ width: '100%', textAlign: 'center', marginTop: '20px' }}>
            <Typography variant="h6" color="textSecondary">No events available at the moment.</Typography>
          </Box>
        ) : (
          filteredEvents.map((event) => (
            <Grid2 item xs={12} sm={6} md={3} key={event.id || event._id}>
              <Card sx={{ maxWidth: 345, boxShadow: 3, '&:hover': { boxShadow: 6 } }}>
                <CardContent>
                  <Typography variant="h6" component="div" color="primary">{event.name}</Typography>
                  <Typography variant="body2" color="textSecondary">{format(new Date(event.date), 'MMM dd, yyyy')}</Typography>
                  <Typography variant="body2" color="textSecondary">{event.location}</Typography>
                  <Box sx={{ marginTop: 2 }}>
                    {/* Check if categories exists and is an array before mapping */}
                    {(event.categories && Array.isArray(event.categories) && event.categories.length > 0) ? (
                      event.categories.map((cat) => (
                        <Chip key={cat} label={cat} sx={{ marginRight: 1 }} size="small" color="primary" />
                      ))
                    ) : (
                      <Typography variant="body2" color="textSecondary">No categories available</Typography>
                    )}
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    href={`/event/${event.id || event._id}`}
                    sx={{ marginTop: 2 }}
                  >
                    Buy Tickets
                  </Button>
                </CardContent>
              </Card>
            </Grid2>
          ))
        )}
      </Grid2>
    </main>
  );
};

export default Homepage;
