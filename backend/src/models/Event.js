const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: String,
  location: String,
  // date: Date,
  description: String,
  tickets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Ticket' }],
  imageUrl: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  category: {type: String, enum: ['Music', 'Sport', 'Theater', 'Outdoor', 'Indoor', 'Tech', 'Business', 'Food', 'Drink', 'Charity', 'Other']},
  
});

module.exports = mongoose.model('Event', eventSchema);
