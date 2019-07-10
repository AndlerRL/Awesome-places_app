const validate = (val, rules, connectedVal) => {
  let isValid = true;

  for (let rule in rules) {
    switch (rule) {
      case 'isEmail': 
        isValid = isValid && emailValidator(val);
        break;
      case 'minLength':
        isValid = isValid && minLengthValidator(val, rules[rule])
        break;
      case 'equalTo':
        isValid = isValid && equalToValidator(val, connectedVal[rule]);
        break;
      case 'notEmpty':
        isValid = isValid && notEmptyValidator(val);
        break;
      default:
        isValid = true;
        break;
    }
  }

  return isValid;
};

const emailValidator = val => {
  return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(val)
}

const minLengthValidator = (val, minLength) => {
  return val.length >= minLength;
}

const equalToValidator = (val, checkValue) => {
  return val === checkValue;
};

const notEmptyValidator = val => {
  return val.trim() === "";
}

export default validate;