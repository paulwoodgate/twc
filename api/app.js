'use strict';

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const xss = require('xss-clean');
const hpp = require('hpp');
const helmet = require('helmet');
import { registerRoutes } from './routes.js';
import { connectToDB } from './src/services/db';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: './config.env'
});

connectToDB();
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(xss());
app.use(hpp());
app.use(helmet());
app.use('/assets', express.static(path.join(__dirname, '/assets')));
app.use(express.static(path.resolve(__dirname, './dist'), { maxAge: '1y', etag: false }));

const limiter = rateLimit({
  max: 150,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour'
});
app.use('/api', limiter);

registerRoutes(app);

module.exports = app;
