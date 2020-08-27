'use strict';

import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: [true, 'Please enter an event type'],
    },
    id: {
      type: String,
      required: [true, 'Please enter an event id'],
    },
    date: {
      type: Date,
      required: [true, 'Please enter the event date'],
    },
    title: {
      type: String,
      required: [true, 'Please enter an event title'],
    },
    image: String,
    description: [String],
    startsFrom: String,
    distanceAway: Number,
    county: String,
    length: Number,
    leave: String,
    w3wReference: String,
    mapReference: String,
    nearTo: String,
    walkTime: String,
    ascent: String,
    source: {
      name: String,
      url: String,
    },
    terrain: String,
    grading: String,
    fuelCost: Number,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Event', eventSchema);
