'use strict';

import express from 'express';
import {
  getAllEvents,
  getEvent,
  getUpcomingEvents,
  createEvent,
  deleteEvent,
  updateEvent
  // importEvents
} from '../controllers/event-controller';

const router = express.Router();

router.get('/', getAllEvents);
router.get('/upcoming', getUpcomingEvents);
router.get('/:id', getEvent);
router.put('/', updateEvent);
router.post('/', createEvent);
// router.post('/', importEvents);
router.delete('/', deleteEvent);

export default router;
