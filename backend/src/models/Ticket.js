const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  event: String,
  price: Number,
  date: Date,
  type: { type: String, enum: ['General Admission', 'VIP'], required: true }
});

module.exports = mongoose.model('Ticket', ticketSchema);
