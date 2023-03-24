const containsLowercase = (password) => {
  return /[a-z]/.test(password);
};

const containsUppercase = (password) => {
  return /[A-Z]/.test(password);
};

const containsNumber = (password) => {
  return /[0-9]/.test(password);
};

module.exports = {
  containsLowercase,
  containsUppercase,
  containsNumber
};