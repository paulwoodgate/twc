/* eslint-disable no-console */
import axios from 'axios';
//import dotenv from 'dotenv';

// const apiUrl = 'http://localhost:3000/api';
const apiUrl = process.env.VUE_APP_API_URL;
console.log(process.env);
console.log(process.env.API_URL);
export default {
  getAllEvents: async () => {
    let events = [];
    await axios
      .get(apiUrl + '/events/upcoming')
      .then(res => (events = res.data))
      .catch(err => console.log(err));

    return events;
  },
  getEventDetails: async eventId => {
    let event = {};
    await axios
      .get(apiUrl + '/events/' + eventId)
      .then(res => (event = res.data))
      .catch(err => console.log(err));

    return event;
  },
  getReportYears: async () => {
    let years = [];
    await axios
      .get(apiUrl + '/reports/years')
      .then(res => (years = res.data))
      .catch(err => console.log(err));

    return years;
  },
  getYearReports: async year => {
    let reports = [];
    await axios
      .get(apiUrl + '/reports/' + year)
      .then(res => (reports = res.data))
      .catch(err => console.log(err));

    return reports;
  },
  getReportDetails: async reportId => {
    let report = {};
    await axios
      .get(apiUrl + '/reports/detail/' + reportId)
      .then(res => (report = res.data))
      .catch(err => console.log(err));

    return report;
  },
  sendMessage: async message => {
    try {
      await axios.post(apiUrl + '/messages', message);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
};
