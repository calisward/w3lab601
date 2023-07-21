const { separateOddsAndEvens } = require('./separateOddsAndEvens');

describe('separateOddsAndEvens', () => {
  // your code here.
  test('arr 1, 2', () => {
    expect(separateOddsAndEvens([1, 2])).toEqual([[1], [2]]);
  });

  test('arr 10, 20, 30', () => {
    expect(separateOddsAndEvens([10, 20, 30])).toEqual([[], [10, 20, 30]]);
  });

  test('arr 11, 21, 31', () => {
    expect(separateOddsAndEvens([11, 21, 31])).toEqual([[11, 21, 31], []]);
  });
});