/*
https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
*/

/**
 * @description It validates the email
 * @param email
 * @returns boolean
 */
function validateEmail(email) {
  // eslint-disable-next-line
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

/**
 * @description Vslidates the signup form
 * @param formFields
 * @returns {error, isValid}
 */
function validateSignupForm(formFields) {
  const { name, email, password } = formFields;
  const error = {};
  let isValid;

  if (!name || name.trim() === "") {
    error.name = "Name is required";
  }

  if (!email || email.trim() === "") {
    error.email = "Email is required";
  }

  if (!validateEmail(email)) {
    error.email = "Email is invalid";
  }

  if (!password || password.trim() === "") {
    error.password = "Password is required";
  }

  if (Object.keys(error).length === 0) {
    isValid = true;
  } else {
    isValid = false;
  }

  return { isValid, error };
}

/**
 * @description Vslidates the login form
 * @param formFields
 * @returns {error, isValid}
 */
function validateLoginForm(formFields) {
  const { email, password } = formFields;
  const error = {};
  let isValid;

  if (!email || email.trim() === "") {
    error.email = "Email is required";
  }

  if (!validateEmail(email)) {
    error.email = "Email is invalid";
  }

  if (!password || password.trim() === "") {
    error.password = "Password is required";
  }

  if (Object.keys(error).length === 0) {
    isValid = true;
  } else {
    isValid = false;
  }

  return { isValid, error };
}

/**
 * @description Vslidates the address form
 * @param formFields
 * @returns {error, isValid}
 */
function validateAddressForm(formFields) {
  const {
    address_1,
    city,
    region,
    postal_code,
    country,
    mob_phone
  } = formFields;
  const error = {};
  let isValid;

  if (!address_1 || address_1.trim() === "") {
    error.address_1 = "Address is required";
  }

  if (!city || city.trim() === "") {
    error.city = "City is required";
  }

  if (!region || region.trim() === "") {
    error.region = "Region is required";
  }

  if (!postal_code || postal_code.trim() === "") {
    error.postal_code = "Postal Code is required";
  }

  if (!country || country.trim() === "") {
    error.country = "Country is required";
  }

  if (!mob_phone || mob_phone.trim() === "") {
    error.mob_phone = "Mobile Phone is required";
  }

  if (Object.keys(error).length === 0) {
    isValid = true;
  } else {
    isValid = false;
  }

  return { isValid, error };
}

export {
  validateEmail,
  validateSignupForm,
  validateLoginForm,
  validateAddressForm
};
