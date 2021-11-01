'use strict';

import 'regenerator-runtime/runtime';
import express from 'express';
import eventRoutes from '../routes/event-routes';

import request from 'supertest';
const mockingoose = require('mockingoose');
import Event from '../models/event-model';

let app;

beforeAll(() => {
  app = express();
  app.use('/api/events', eventRoutes);
});

describe('Event Controller Tests', () => {
  describe('getAllEvents', () => {
    test('Should return status 200 with items', async () => {
      mockingoose(Event).toReturn(
        [
          { title: 'Event 1', date: '2020-11-22T00:00:00.000Z' },
          { title: 'Event 2', date: '2020-10-22T00:00:00.000Z' }
        ],
        'find'
      );

      const response = await request(app).get('/api/events').expect(200);
      const events = response.body;
      expect(events.length).toBe(2);
    });

    test('Should return status 500 if error', async () => {
      mockingoose(Event).toReturn(new Error('Error finding'), 'find');

      await request(app).get('/api/events').expect(500);
    });
  });

  describe('getUpcomingEvents', () => {
    test('Should return status 200 with items', async () => {
      mockingoose(Event).toReturn(
        [
          { title: 'Event 1', date: '2020-11-22T00:00:00.000Z' },
          { title: 'Event 2', date: '2020-10-22T00:00:00.000Z' }
        ],
        'find'
      );

      const response = await request(app).get('/api/events/upcoming').expect(200);
      const events = response.body;
      expect(events.length).toBe(2);
    });

    test('Should return status 500 if error', async () => {
      mockingoose(Event).toReturn(new Error('Error finding'), 'find');

      await request(app).get('/api/events/upcoming').expect(500);
    });
  });

  describe('getEvent', () => {
    test('Should return status 200 with item', async () => {
      mockingoose(Event).toReturn({ title: 'Event 1', date: '2020-11-22T00:00:00.000Z' }, 'findOne');

      const response = await request(app).get('/api/events/1').expect(200);
      const event = response.body;
      expect(event.title).toBe('Event 1');
    });

    test('Should return status 404 if not found', async () => {
      mockingoose(Event).toReturn(null, 'findOne');

      await request(app).get('/api/events/1').expect(404);
    });

    test('Should return status 500 if error', async () => {
      mockingoose(Event).toReturn(new Error('Error finding'), 'findOne');

      await request(app).get('/api/events/1').expect(500);
    });
  });
});
