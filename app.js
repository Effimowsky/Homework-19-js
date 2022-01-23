const signupForm = document.querySelector("#user-signup");
const username = document.querySelector("username");
const email = document.querySelector("email");
const personalNumber = document.querySelector("personal-number");
const mobileNumber = document.querySelector("mobile-number");

const usernameError = document.querySelector("#username-error");
const emailError = document.querySelector("#email-error");
const personalNumberError = document.querySelector("#personal-number-error");
const mobileNumberError = document.querySelector("#mobile-number-error");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validateUsername();
  validateEmail();
  validatePersonalNumber();
  validateMobileNumber();
});

function validateUsername() {
  if (!username.validity.valid) {
    username.classList.add("has-error");
    if (username.validity.tooShort) {
      usernameError.innerText = "username must be 5 or more";
    } else {
      usernameError.innerText = "Username is required";
    }
    return false;
  } else {
    username.classList.remove("has-error");
    username.classList.add("has-success");
    username.innerText("");
    return true;
  }
}

function validateEmail() {
  if (!email.validity.valid) {
    email.classList.add("has-error");
    if (email.validity.typeMismatch) {
      emailError.innerText = "Please enter valid email";
    } else {
      emailError.innerText = "email is required";
    }
    return false;
  } else {
    email.classList.replace("has-error", "has-success");
    emailError.innerText = "";
  }
  return true;
}

function validatePersonalNumber() {
  if (!personalNumber.validity.valid) {
    personalNumber.classList.add("has-error");
    let pattern1 = /^[0-9]{11}$/;
    if (!pattern1.test(personalNumber.value)) {
      personalNumberError.innerText = "Personal number must have 11 length";
    }
  } else {
    personalNumber.classList.replace("has-error", "has-success");
    personalNumberError.innerText = "";
  }
}

function validateMobileNumber() {
  if (!mobileNumber.validity.valid) {
    mobileNumber.classList.add("has-error");
    let pattern2 = /^[0-9]{9}$/;
    if (!pattern2.test(mobileNumber.value)) {
      mobileNumberError.innerText = "Mobile Number must be 9 length";
    }
  } else {
    mobileNumberError.classList.replace("has-error", "has-success");
    mobileNumberError.innerText = "";
  }
}
