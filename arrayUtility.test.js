const { doubleNumbers } = require('./arrayUtility');

describe('Array utilities', () => {
  describe('double numbers', () => {
    it('should double array elements when input is an array', () => {
      const result = doubleNumbers([1, 2, 3]);
      expect(result).toEqual([2, 4, 6]);
    });
    it('should return type error when input is not an array', () => {

      expect(() => {
        doubleNumbers('abc').toThrow(TypeError('Invalid Type'));
      });
    });
  });
});