'use strict';
import mongoose from 'mongoose';

export function connectToDB() {
  const mongoDBConnectionString = process.env.MONGODB_PROD_URL
    ? process.env.MONGODB_PROD_URL
    : process.env.MONGODB_DEV_URL;

  mongoose.connect(mongoDBConnectionString, { useNewUrlParser: true, useUnifiedTopology: true }, (error) => {
    if (error) {
      console.log('Unable to connect to database');
      throw error;
    } else {
      console.log(`Connected to MongoDB! at ${mongoDBConnectionString}`);
    }
  });
}

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

process.on('SIGINT', function () {
  mongoose.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});
