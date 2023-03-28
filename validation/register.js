const { containsLowercase, containsUppercase, containsNumber } = require('./password');
const { isEmail } = require('validator');
const isEmpty = require('./is-empty');
const { isLength } = require('./isLength');
const equals = require('./equals');

function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.email = !isEmpty(data.email) ? data.email : '';
  data.password = !isEmpty(data.password) ? data.password : '';
  data.password2 = !isEmpty(data.password2) ? data.password2 : '';

  if (isLength(2, 30, data.password)) {
    errors.passwordLength = 'Password must be between 2 and 30 characters';
  }

  if (!containsLowercase(data.password)) {
    errors.passwordSmallLetter = 'Password must contain at least one small letter';
  }

  if (!containsUppercase(data.password)) {
    errors.passwordCapitalLetter = 'Password must contain at least one capital letter';
  }

  if (!containsNumber(data.password)) {
    errors.passwordNumber = 'Password must contain at least one number';
  };

  if (isLength(2, 30, data.name)) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  if (isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (!isEmail(data.email)) {
    errors.email = 'Email is invalid';
  }

  if (isEmpty(data.email)) {
    errors.email = 'Email field is required';
  }

  if (isEmpty(data.password)) {
    errors.password = ['Password field is required'];
  }

  if (isEmpty(data.password2)) {
    errors.password2 = 'Confirm password field is required';
  }

  if (!equals(data.password, data.password2)) {
    errors.password2 = 'Passwords must match';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }
}

module.exports = validateRegisterInput;