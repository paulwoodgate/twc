import { formatEventDate, formatWeekendDates } from './date-service';

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
});
