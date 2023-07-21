const { addIsAwesome } = require('./addIsAwesome');

describe('addIsAwesome', () => {
  test('returns correct string', (done) => {
    addIsAwesome('Pizza', (value) => {
      expect(value).toBe('Pizza is awesome');
      done();
    });
  });
});