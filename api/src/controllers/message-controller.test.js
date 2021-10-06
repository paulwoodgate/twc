'use strict';

import 'regenerator-runtime/runtime';
import express from 'express';
import messageRoutes from '../routes/message-routes';

import request from 'supertest';
const mockingoose = require('mockingoose');
import Message from '../models/message-model';

describe('Message Controller Tests', () => {
  const app = express();
  app.use(express.json());
  app.use('/api/messages', messageRoutes);

  test('should reject an invalid message returning a status code of 500', async () => {
    const response = await request(app).post('/api/messages').send({ name: 'Fred Bloggs', message: 'Hello' });
    expect(response.status).toBe(500);
    expect(response.text).toContain('Please enter your email');
  });

  test('should save a valid message returning a status code of 200', async () => {
    mockingoose(Message).toReturn(
      { name: 'Fred Bloggs', email: 'Fred.bloggs@gmail.com', message: 'Hello' },
      'save'
    );

    const response = await request(app).post('/api/messages').send({
      name: 'Fred Bloggs',
      email: 'Fred.bloggs@gmail.com',
      message: 'Hello'
    });
    expect(response.status).toBe(200);
  });
});
