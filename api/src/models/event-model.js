'use strict';

import mongoose from 'mongoose';
import moment from 'moment';

const eventSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: [true, 'Please enter an event type']
    },
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
      url: String
    },
    terrain: String,
    grading: String,
    fuelCost: Number
  },
  { timestamps: true }
);

eventSchema.set('toJSON', { virtuals: true });

eventSchema.virtual('formattedDate').get(function () {
  if (this.type === 'Weekend') {
    const endDate = moment(this.date).add(this.length, 'days');
    if (moment(this.date).month === moment(endDate).month) {
      return `${moment(this.date).format('dddd Do')} to ${moment(endDate).format('dddd Do MMMM')}`;
    }
    return `${moment(this.date).format('dddd Do MMMM')} to ${moment(endDate).format('dddd Do MMMM')}`;
  }
  return moment(this.date).format('dddd Do MMMM');
});

eventSchema.virtual('formattedLength').get(function () {
  if (this.length === undefined) {
    return '';
  }
  return `${this.length} miles`;
});

eventSchema.virtual('formattedTime').get(function () {
  if (this.walkTime === undefined) {
    return '';
  }

  const hours = Math.trunc(this.walkTime);
  const minutes = 60 * (this.walkTime - hours);
  let value = `${hours} hours`;

  if (minutes > 0) {
    value += ` ${minutes} minutes`;
  }

  return value;
});

eventSchema.virtual('formattedDistance').get(function () {
  if (this.distanceAway === undefined) {
    return '';
  }
  return `${this.distanceAway} miles`;
});

eventSchema.virtual('formattedCost').get(function () {
  if (this.fuelCost === undefined) {
    return '';
  }
  return `£${this.fuelCost.toFixed(2)}`;
});

module.exports = mongoose.model('Event', eventSchema);
