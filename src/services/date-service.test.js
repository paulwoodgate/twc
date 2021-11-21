import { formatEventDate, formatWeekendDates, yearMonth, monthDesc, getMonthList } from './date-service';

describe('Date Service Tests', () => {
  describe('formatEventDate Test', () => {
    test(' it should return the date of a walk as Sunday 15th August', () => {
      expect(formatEventDate(new Date('15 Aug 2021'))).toBe('Sunday 15th August');
    });
  });

  describe('formatWeekendDates Tests', () => {
    test('should return the date of a weekend as Friday 17th to Sunday 19th September', () => {
      expect(formatWeekendDates(new Date('17 Sep 2021'), 2)).toBe('Friday 17th to Sunday 19th September');
    });

    test('it should return the date of a weekend as Friday 29th October to Monday 1st November', () => {
      expect(formatWeekendDates(new Date('29 Oct 2021'), 3)).toBe(
        'Friday 29th October to Monday 1st November'
      );
    });
  });

  describe('YearMonth tests', () => {
    test('it should return month and year of a date', () => {
      expect(yearMonth(new Date('29 Feb 2000'))).toBe('2000/02');
    });
  });

  describe('MonthDesc tests', () => {
    test('it should return the full month and year of a YearMonth', () => {
      expect(monthDesc('2020/11')).toBe('November 2020');
    });
  });

  describe('getMonthList tests', () => {
    test('it should return an array of objects', () => {
      const yearMonths = ['2021/01', '2021/02'];

      const list = getMonthList(yearMonths);

      expect(list.length).toBe(3);
      expect(list[0].text).toBe('(All months)');
      expect(list[0].value).toBe('');
      expect(list[1].text).toBe('January 2021');
      expect(list[1].value).toBe('2021/01');
      expect(list[2].text).toBe('February 2021');
      expect(list[2].value).toBe('2021/02');
    });

    test('it should return a unique array of objects', () => {
      const yearMonths = ['2021/01', '2021/02', '2021/02'];

      const list = getMonthList(yearMonths);

      expect(list.length).toBe(3);
      expect(list[0].text).toBe('(All months)');
      expect(list[0].value).toBe('');
      expect(list[1].text).toBe('January 2021');
      expect(list[1].value).toBe('2021/01');
      expect(list[2].text).toBe('February 2021');
      expect(list[2].value).toBe('2021/02');
    });
  });
});
