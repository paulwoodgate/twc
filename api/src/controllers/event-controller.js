'use strict';

import Event from '../models/event-model';
import moment from 'moment';

export function getAllEvents(req, res) {
  Event.find({})
    .sort({ date: 'asc' })
    .exec((err, results) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(results);
      }
    });
}

export function getUpcomingEvents(req, res) {
  const now = moment().startOf('day').format();
  Event.find({ date: { $gte: now } })
    .sort({ date: 'asc' })
    .select('id type title image leave length formattedLength formattedDate date')
    .exec((err, results) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(results);
      }
    });
}

export function getEvent(req, res) {
  const id = req.params.id;
  Event.findOne({ id: id }).exec((err, event) => {
    if (err) {
      res.status(500).json(err);
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

export function importEvent(req, res) {
  // const filename = req.params.filename;
  res.send('import events');
}
