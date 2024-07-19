const Event = require('../Models/Event'); // Import the Event model

// Fetch all events from the database
const getAllTickets = async (req, res) => {
    try {
        // Find all events in the database
        const fetched_events = await Event.find();
        // pass the events as a JSON response
        res.json(fetched_events);
    } catch (error) {
        // Error handling from server side
        res.status(500).json({ message: error.message });
    }
}
