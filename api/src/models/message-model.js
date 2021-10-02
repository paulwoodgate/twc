'use strict';

import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name']
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    match: [/^.+@(?:[\w-]+\.)+\w+$/, 'Thats not a valid email address']
  },
  message: {
    type: String,
    required: [true, 'Please enter a message']
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Message', messageSchema);
