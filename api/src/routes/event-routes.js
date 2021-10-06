'use strict';

import express from 'express';
import { getAllEvents, getEvent, getUpcomingEvents } from '../controllers/event-controller';

const router = express.Router();

router.get('/', getAllEvents);
router.get('/upcoming', getUpcomingEvents);
router.get('/:id', getEvent);

export default router;
