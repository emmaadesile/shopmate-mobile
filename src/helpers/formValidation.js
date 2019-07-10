/*
https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
*/
function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

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

export { validateEmail, validateSignupForm, validateLoginForm };
