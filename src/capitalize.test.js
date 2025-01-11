// Test using ES6 import

const { capitalizeFirstLetter } = require("./capitalize");

describe('capitalize function', () => {
  it('should capitalize only first letter of a string', () => {
    expect(capitalizeFirstLetter('all')).toBe('All');
  });

  it('should return correct value for each different inputs', () => {
    expect(capitalizeFirstLetter('hello')).toBe('Hello');
  });

  it('should return null if no parameter is passed', () => {
    expect(capitalizeFirstLetter()).toBeNull();
  });

  it('should return null if a non-string value is passed', () => {
    expect(capitalizeFirstLetter(123)).toBeNull();
  })
});
