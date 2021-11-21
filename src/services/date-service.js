'use strict';

import { format, isSameMonth, addDays } from 'date-fns';

exports.formatEventDate = (date) => {
  return format(date, 'eeee do MMMM');
};

exports.formatWeekendDates = (startDate, duration) => {
  const endDate = addDays(startDate, duration);
  if (isSameMonth(startDate, endDate)) {
    return `${format(startDate, 'eeee do')} to ${format(endDate, 'eeee do MMMM')}`;
  }
  return `${format(startDate, 'eeee do MMMM')} to ${format(endDate, 'eeee do MMMM')}`;
};

exports.yearMonth = (date) => {
  return format(date, 'yyyy/MM');
};

function monthName(yearMonth) {
  const year = yearMonth.substr(0, 4);
  const month = yearMonth.substr(5, 2);
  const date = new Date(year, month - 1, 1, 0, 0, 0, 0);
  return format(date, 'MMMM yyyy');
}

exports.monthDesc = (yearMonth) => {
  return monthName(yearMonth);
};

exports.getMonthList = (yearMonths) => {
  const uniqueMonths = Array.from(new Set(yearMonths));
  const months = uniqueMonths.map((m) => ({
    text: monthName(m),
    value: m
  }));

  const allMonths = {
    text: '(All months)',
    value: ''
  };
  months.splice(0, 0, allMonths);
  return months;
};
