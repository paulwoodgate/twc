'use strict';

import request from 'supertest';
import 'regenerator-runtime/runtime';

let app;
const mockMorgan = jest.fn((req, res, next) => next());

beforeAll(() => {
  jest.mock('morgan', () => () => mockMorgan);
  app = request(require('../../app'));
});

afterAll(() => {
  jest.unmock('morgan');
});

describe('Message Controller Tests', () => {
  test('should reject an invalid message returning a status code of 500', async () => {
    const response = await app.post('/api/messages').send({
      name: 'Fred Bloggs',
      message: 'Hello'
    });
    expect(response.status).toBe(500);
    // expect(response.body).toContain('Please enter your email');
  });
});
