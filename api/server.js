'use strict';

// import express from 'express';
// const app = express();

import http from 'http';
import dotenv from 'dotenv';

dotenv.config({
  path: './config.env',
});

import app from './app';
app.get(
  '/',
  app.get('/', (req, res) => res.send('Hello'))
);

const debug = require('debug')('rest-api-nodejs-mongodb:server');
const port = normalisePort(process.env.PORT || 3000);
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`TWC API server is listening on port ${port}`);
});

server.on('error', onError);
server.on('listening', onListening);

function normalisePort(value) {
  const port = parseInt(value, 10);

  if (isNaN(port)) {
    // named pipe
    return value;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      console.error(bind + ' requires elevated privileges');
      process.exit(1);
      break;
    case 'EADDRINUSE':
      console.error(bind + ' is already in use');
      process.exit(1);
      break;
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening() {
  const addr = server.address();
  const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
  debug('Listening on ' + bind);
}
