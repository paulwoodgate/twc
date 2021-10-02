'use strict';

import Message from '../models/message-model';

exports.createMessage = async (req, res) => {
  const data = req.body;
  const message = new Message({
    name: data.name,
    email: data.email,
    message: data.message
  });

  try {
    const savedMsg = await message.save();
    res.status(200).json(savedMsg);
  } catch (error) {
    res.status(500).json(error);
  }
};
