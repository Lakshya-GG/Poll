module.exports = function generateId(length = 8) {
  return Math.random().toString(36).substr(2, length);
};