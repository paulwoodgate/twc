'use strict';

import mongoose from 'mongoose';

const reportSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, 'Please enter an event id']
  },
  date: {
    type: Date,
    required: [true, 'Please enter the event date']
  },
  title: {
    type: String,
    required: [true, 'Please enter an event title']
  },
  report: {
    type: Array,
    required: [true, 'Please enter a report']
  },
  reportBy: {
    type: String,
    required: [true, 'Please enter who wrote the report']
  },
  walkRating: {
    type: String,
    required: [true, 'Please enter a walk rating']
  },
  coverPhoto: String,
  photoCollections: Array
});

module.exports = mongoose.model('Report', reportSchema);
