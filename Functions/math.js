const getSquare = (num) => {
  if (num === 1) {
    return 1;
  }
  return Math.pow(num, 2);
};
const getRoot = (num) => {
  if (num === 1) {
    return 1;
  }
  return Math.sqrt(num);
};

module.exports = { getSquare, getRoot };
