const { costOfLemonade } = require('./costOfLemonade');

describe('costOfLemonade', () => {
  test('1 = 100', () => {
    expect(costOfLemonade(1)).toBe(100);
  });

  test('4 = 400', () => {
    expect(costOfLemonade(4)).toBe(400);
  });

  test('5 = 475', () => {
    expect(costOfLemonade(5)).toBe(475);
  });

  test('9 = 855', () => {
    expect(costOfLemonade(9)).toBe(855);
  });

  test('10 = 900', () => {
    expect(costOfLemonade(10)).toBe(900);
  });

  test('100 = 9000', () => {
    expect(costOfLemonade(100)).toBe(9000);
  });
});