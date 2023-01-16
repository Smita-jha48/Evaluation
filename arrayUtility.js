const doubleNumbers = (numbers) => {
  if (!Array.isArray(numbers)) {
    throw new Error('Invalid Type');
  }
  return numbers.map(num => num * 2);
};

module.exports = { doubleNumbers };