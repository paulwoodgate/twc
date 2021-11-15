/* eslint-disable no-console */
'use strict';
import nodemailer from 'nodemailer';

export default {
  sendEmail: async (msg) => {
    try {
      const recipients = process.env.EMAIL_RECIPIENTS
        ? `${process.env.EMAIL_USER}, ` + process.env.EMAIL_RECIPIENTS
        : process.env.EMAIL_USER;

      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD
        },
        tls: {
          rejectUnauthorized: false
        }
      });

      await transporter.sendMail({
        from: `${msg.name} <${msg.email}>`,
        to: recipients,
        subject: `Message from ${msg.name}`,
        html: msg.message
      });

      return true;
    } catch (error) {
      console.log('Error', error);
      return false;
    }
  }
};
