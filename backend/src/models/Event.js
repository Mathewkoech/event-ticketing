const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: String,
  date: Date,
  location: String,
  description: String,
  tickets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ticket' }],
});

module.exports = mongoose.model('Event', eventSchema);
