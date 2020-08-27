'use strict';

import Event from '../models/event-model';
import moment from 'moment';

export function getAllEvents(req, res) {
  Event.find({})
    .sort({ date: 'asc' })
    .exec((err, results) => {
      if (err) {
        res.status(500).json({ message: err });
      } else {
        res.status(200).json({ events: results });
      }
    });
}

export function getUpcomingEvents(req, res) {
  const now = moment().startOf('day').format();
  Event.find({ date: { $gte: now } })
    .sort({ date: 'asc' })
    .select('id type title image leave length date')
    .exec((err, results) => {
      if (err) {
        res.status(500).json({ message: err });
      } else {
        res.status(200).json({ events: results });
      }
    });
}

export function getEvent(req, res) {
  const id = req.params.id;
  Event.findOne({ id: id }).exec((err, event) => {
    if (err) {
      res.status(500).json({ message: err });
    } else if (!event) {
      res.status(404);
    } else {
      res.status(200).json(event);
    }
  });
}

export function updateEvent(req, res) {
  res.send('update event');
}

export function createEvent(req, res) {
  res.send('create event');
}

export function deleteEvent(req, res) {
  res.send('delete event');
}
