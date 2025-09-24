const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  gender: {
    type: String,
    enum: ['male', 'female', 'other'],
    required: false,
  },
  birthDate: {
    date: {
      type: Date,
      required: false, // Optional, for full dates when known
    },
    year: {
      type: Number,
      required: false, // Optional, for storing just the year (e.g., 1990 or -500 for BCE)
    },
    type: {
      type: String,
      enum: ['approximately', 'exactly', 'year only', 'before', 'after', 'range'],
      required: false, // Optional, to specify the nature of the birth date
    },
    bce: {
      type: Boolean,
      default: false, // Default to false (not BCE)
    }
  },
  deathDate: {
    type: Date,
    required: false, // Optional, for deceased individuals
  },
  parents: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person', // References other Person documents
  }],
  children: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person', // References other Person documents
  }],
  spouse: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Person', // References another Person document
    required: false,
  },
  generation: {
    type: Number,
    required: false, // Optional, to track generation level
  },
  imageUrl: {
    type: String,
    required: false, // Optional, to store a URL for the person's image
    trim: true,
    match: [/^https?:\/\/[^\s$.?#].[^\s]*$/, 'Please enter a valid URL'], // Basic URL validation
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    unique: true, 
    sparse: true 
  }, // Optional, for user's Person only
});

module.exports = mongoose.model('Person', personSchema);