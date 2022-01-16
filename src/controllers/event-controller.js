'use strict';

import Event from '../models/event-model';
import { startOfDay } from 'date-fns';
import { yearMonth, getMonthList } from '../services/date-service';

exports.getAllEvents = async (req, res) => {
  try {
    const results = await Event.find({}).sort({ date: 'asc' }).exec();
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getUpcomingEvents = async (req, res) => {
  try {
    const start = startOfDay(new Date());
    start.setDate(start.getDate() - 14);
    const data = await Event.find({ date: { $gte: start } })
      .sort({ date: 'asc' })
      .select('id type title image length leave date')
      .exec();
    const events = data.map((ev) => ({
      id: ev.id,
      type: ev.type,
      title: ev.title,
      image: ev.image,
      leave: ev.leave,
      length: ev.formattedLength,
      date: ev.formattedDate,
      month: yearMonth(ev.date)
    }));
    const months = getMonthList(events.map((ev) => ev.month));
    const results = {
      events: events,
      months: months
    };
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getUpcomingSummary = async (req, res) => {
  try {
    const now = startOfDay(new Date());
    const data = await Event.find({ date: { $gte: now } })
      .sort({ date: 'asc' })
      .limit(4)
      .select('id title date')
      .exec();

    const results = data.map((ev) => ({ id: ev.id, title: ev.title, date: ev.shortDate }));
    res.status(200).json(results);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getEvent = async (req, res) => {
  const id = req.params.id;
  try {
    const event = await Event.findOne({ id: id }).exec();
    if (!event) {
      res.status(404).json('Event not found');
    } else {
      res.status(200).json(event);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};
