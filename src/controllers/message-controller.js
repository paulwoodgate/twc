'use strict';

import Message from '../models/message-model';
import Email from '../services/email-service';

exports.createMessage = async (req, res) => {
  const data = req.body;
  const message = new Message({
    name: data.name,
    email: data.email,
    message: data.message
  });

  try {
    const success = await Email.sendEmail(message);

    if (!success) {
      res.status(500).json('An error occurred sending the email');
    }
    const savedMsg = await message.save();
    res.status(200).json(savedMsg);
  } catch (error) {
    console.log('Error', error);
    res.status(500).json(error);
  }
};
