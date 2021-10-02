'use strict';

import mongoose from 'mongoose';
import { formatEventDate } from '../services/date-service';

const reportSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, 'Please enter an event id']
  },
  date: {
    type: Date,
    required: [true, 'Please enter the event date']
  },
  year: {
    type: Number,
    required: [true, 'Please enter the event year']
  },
  title: {
    type: String,
    required: [true, 'Please enter the event title']
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

reportSchema.set('toJSON', { virtuals: true });
reportSchema.virtual('formattedDate').get(function () {
  return formatEventDate(this.date);
});
module.exports = mongoose.model('Report', reportSchema);
