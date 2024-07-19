const Ticket = require('../models/Ticket'); // Import the Ticket model from the models folder before using

// Fetch all tickets from the database
exports.getAllTickets = async (req, res) => {
  try {
    // Find all tickets in the database and populate event details
    const fetched_tickets = await Ticket.find().populate('event');
    // pass the tickets as a JSON response/serializing the data like in django
    res.json(fetched_tickets);
  } catch (error) {
    // Error handling from server side
    res.status(500).json({ message: error.message });
  }
};

// Creating a new ticket in the database
exports.createTicket = async (req, res) => {
  const { event, price, availableSeats } = req.body; // Extracting event, price and availableSeats from the request body client side data
  
  // Creating a new Ticketusing requset data from client
  const newTicket = new Ticket({ event, price, availableSeats }); // Creating a new Ticket object using the Ticket model instance

  try {
    // Save new created ticket to db
    const savedTicket = await newTicket.save();
    // Send the created status 201 ticket as a JSON response/serializing the data like in django to the client
    res.status(201).json(savedTicket);
  } catch (error) {
    // Error handling from server side during db processsing
    res.status(400).json({ message: error.message });
  }
};
