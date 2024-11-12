import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HttpService from "../api/httpservice";
import { ENDPOINTS } from "../api/endpoint";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/Homepage.css";
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Homepage = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await HttpService.get(ENDPOINTS.events);
        setEvents(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch events");
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) return <p>Loading events...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="homepage">
      <Header /> {/* Header with navigation */}
      
      <div className="content">
        <header className="intro">
          <h1>Welcome to Our Event Ticketing Platform</h1>
          <p>Find the best events and get your tickets today!</p>
        </header>

        <Grid container spacing={3} justifyContent="center">
          {events.map((event) => (
            <Grid item xs={12} sm={6} md={4} key={event.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5">{event.name}</Typography>
                  <Typography>{event.date}</Typography>
                  <Typography>{event.location}</Typography>
                  <Button component={Link} to={`/event/${event.id}`} variant="contained">
                    Buy Tickets
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>

      <Footer /> {/* Footer for consistent site design */}
    </div>
  );
};

export default Homepage;
