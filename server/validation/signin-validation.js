const validator = require('validator');
const isEmpty = require('./is-empty');

const validateSigninInput = data => {
    // data from req.body
    const errors = {};

    // data.email = !validator.isEmpty(data.email) ? data.email : '';
    // data.password = !validator.isEmpty(data.password) ? data.password: '';

    if (validator.isEmpty(data.email)) {
        errors.email = 'Email is required';
    }
    if (!validator.isEmail(data.email)) {
        errors.email = 'Must be a valid email';
    }
    if (!validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'You password must between 6 and 30 characters';
    }
    if (validator.isEmpty(data.password)) {
        errors.password = 'Password is required';
    }

    return {
        errors: errors,
        isValid: isEmpty(errors)
    };
};
module.exports = validateSigninInput;
