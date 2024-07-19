const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  event: String,
  price: Number,
  date: Date
});

module.exports = mongoose.model('Ticket', ticketSchema);
