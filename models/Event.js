const mongoose = require('mongoose')

const eventSchema = new mongoose.Schema({
  datum: {
    type: Date,
    required: true,
    trim: true
  },
  band: {
    type: String,
    required: true,
    trim: true
  },
  stadt: {
    type: String,
    trim: true
  },
  location: {
    type: String,
    trim: true
  },
  typ: {
    type: String,
    trim: true
  },
  bemerkung: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
})

const Event = mongoose.model('Event', eventSchema)

module.exports = Event