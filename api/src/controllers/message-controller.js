'use strict';

import Message from '../models/message-model';

exports.createMessage = (req, res) => {
  const data = req.body;
  const message = new Message({
    name: data.name,
    email: data.email,
    message: data.message
  });

  message
    .save()
    .then((savedMsg) => res.status(200).json(savedMsg))
    .catch((err) => res.status(500).json(err));
};
