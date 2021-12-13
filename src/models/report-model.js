'use strict';

import mongoose from 'mongoose';
import { formatReportDates } from '../services/date-service';

const reportSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, 'Please enter an event id']
  },
  date: {
    type: Date,
    required: [true, 'Please enter the event date']
  },
  endDate: {
    type: Date
  },
  year: {
    type: Number,
    required: [true, 'Please enter the event year']
  },
  title: {
    type: String,
    required: [true, 'Please enter the event title']
  },
  subjectType: {
    type: String
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
  photographer: String,
  photos: [
    {
      file: String,
      caption: String
    }
  ]
});

reportSchema.set('toJSON', { virtuals: true });
reportSchema.virtual('formattedDate').get(function () {
  return formatReportDates(this.date, this.endDate);
});

module.exports = mongoose.model('Report', reportSchema);
