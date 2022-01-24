const signupForm = document.querySelector("#user-signup");
const Username = document.querySelector("#username");
const Email = document.querySelector("#email");
const personalNumber = document.querySelector("#personal-number");
const mobileNumber = document.querySelector("#mobile-number");
const Position = document.querySelector("#position");

const usernameError = document.querySelector("#username-error");
const emailError = document.querySelector("#email-error");
const personalNumberError = document.querySelector("#personal-number-error");
const mobileNumberError = document.querySelector("#mobile-number-error");
const PositionError = document.querySelector("#position-error");

signupForm.addEventListener("submit", e => {
  e.preventDefault();
  validateUsername();
  validateEmail();
  validatePersonalNumber();
  validateMobileNumber();
  validatePosition();
});

function validateUsername() {
  if (!Username.validity.valid) {
    Username.classList.add("has-error");
    if (Username.validity.tooShort) {
      usernameError.innerText = "username must be 5 or more";
    } else {
      usernameError.innerText = "Username is required";
    }
    return false;
  } else {
    Username.classList.remove("has-error");
    Username.classList.add("has-success");
    Username.innerText = "";
    return true;
  }
}

function validateEmail() {
  if (!Email.validity.valid) {
    Email.classList.add("has-error");
    if (Email.validity.typeMismatch) {
      emailError.innerText = "Please enter valid email";
    } else {
      emailError.innerText = "Email is required";
    }
    return false;
  } else {
    Email.classList.remove("has-error");
    Email.classList.add("has-success");
    emailError.innerText = "";
  }
  return true;
}

function validatePersonalNumber() {
  if (!personalNumber.validity.valid) {
    personalNumber.classList.add("has-error");
    if (personalNumber.validity.tooShort) {
      personalNumberError.innerText = "Personal number must have 11 length";
    } else {
      personalNumberError.innerText = "Personal number is required";
    }
    return false;
  } else {
    personalNumber.classList.remove("has-error");
    personalNumber.classList.add("has-success");
    personalNumberError.innerText = "";
  }
  return true;
}

function validateMobileNumber() {
  if (!mobileNumber.validity.valid) {
    mobileNumber.classList.add("has-error");
    if (mobileNumber.validity.tooShort) {
      mobileNumberError.innerText = "Mobile Number must be 9 length";
    } else {
      mobileNumberError.innerText = "Mobile number is required";
    }
    return false;
  } else {
    mobileNumber.classList.remove("has-error");
    mobileNumber.classList.add("has-success");
    mobileNumberError.innerText = "";
  }
  return true;
}

function validatePosition() {
  if (Position.validity.valid) {
    Position.classList.add("has-success");
  }
}

Username.addEventListener("input", () => {
  validateUsername();
});
Email.addEventListener("input", () => {
  validateEmail();
});
personalNumber.addEventListener("input", () => {
  validatePersonalNumber();
});
mobileNumber.addEventListener("input", () => {
  validateMobileNumber();
});
Position.addEventListener("input", () => {
  validatePosition();
});
