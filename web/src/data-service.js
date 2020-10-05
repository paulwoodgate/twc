/* eslint-disable no-console */
import axios from 'axios';

const apiUrl = 'http://localhost:3000/api';

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
  }
};
