// Test using ES6 import

const { capitalizeFirstLetter } = require("./capitalize");

describe('capitalize function', () => {
  it('should capitalize only first letter of a string', () => {
    expect(capitalizeFirstLetter('all')).toBe('All');
  });
});
