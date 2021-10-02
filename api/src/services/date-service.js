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
