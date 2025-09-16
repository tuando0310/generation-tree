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
    type: Date,
    required: false, // Optional, as birth dates may not always be known
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