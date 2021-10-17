/* eslint-disable no-console */
import emailjs from 'emailjs-com';

export default {
  sendEmail: async msg => {
    try {
      await emailjs.send(
        process.env.VUE_APP_EMAILJS_SERVICE_ID,
        process.env.VUE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: msg.name,
          message: msg.message,
          reply_to: msg.email
        },
        process.env.VUE_APP_EMAILJS_USER_ID
      );
      return true;
    } catch (error) {
      console.log('Error', error);
      return false;
    }
  }
};
