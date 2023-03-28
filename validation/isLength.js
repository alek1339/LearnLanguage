const isLength = (min, max, text) => {
  if (text.length < min || text.length > max) {
    return true;
  }
  return false;
};

module.exports = {
  isLength
};
