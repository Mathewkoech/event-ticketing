const Ticket = require('../models/Ticket');
const Event = require('../models/Event');

// Create a new ticket (with a link to an event)
exports.createTicket = async (req, res) => {
  try {
    const { eventId, type, price, quantity } = req.body;

    // Ensure the event exists
    const event = await Event.findById(eventId);
    if (!event) return res.status(404).json({ message: 'Event not found' });

    // Create ticket
    const ticket = await Ticket.create({ event: eventId, type, price, quantity });
    res.status(201).json(ticket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAllTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();  // Fetch all tickets
    if (tickets.length === 0) {
      return res.status(404).json({ message: 'No tickets found' });
    }
    res.status(200).json({ count: tickets.length, results: tickets });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all tickets for a particular event
exports.getTicketsForEvent = async (req, res) => {
  try {
    const eventId = req.params.eventId;
    const tickets = await Ticket.find({ event: eventId });

    if (tickets.length === 0) {
      return res.status(404).json({ message: 'No tickets found for this event' });
    }

    res.status(200).json({ count: tickets.length, results: tickets });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single ticket by ID
exports.getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id).populate('event');
    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });
    res.status(200).json(ticket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a ticket (e.g., price, quantity)
exports.updateTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });
    res.status(200).json(ticket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Delete a ticket
exports.deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndDelete(req.params.id);
    if (!ticket) return res.status(404).json({ message: 'Ticket not found' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
