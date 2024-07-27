const username = document.getElementById('username');
const email = document.getElementById('email');
const dob = document.getElementById('dob');
const submit = document.getElementById('actionButton');

// username.oninput = function () {
//   if (username.validity.valueMissing) {
//     username.setCustomValidity('Please enter your username');
//   } else if (username.validity.patternMismatch) {
//     username.setCustomValidity(
//       'Please enter a username that starts with a letter'
//     );
//   } else {
//     username.setCustomValidity('');
//   }
// };

// email.oninput = function () {
//   if (email.validity.valueMissing) {
//     email.setCustomValidity('Please enter your email address');
//   } else if (email.validity.typeMismatch || email.validity.patternMismatch) {
//     email.setCustomValidity('Please enter a valid email address');
//   } else {
//     email.setCustomValidity('');
//   }
// };

// dob.oninput = function () {
//   if (dob.validity.valueMissing) {
//     dob.setCustomValidity('Please enter your date of birth');
//   } else if (dob.validity.rangeUnderflow || dob.validity.rangeOverflow) {
//     dob.setCustomValidity(
//       'Please enter a date between 1900-01-01 and 2024-12-31'
//     );
//   } else {
//     dob.setCustomValidity('');
//   }
// };

document
  .getElementById('birthdayForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const dob = document.getElementById('dob').value;

    //check if userName is a valid string that starts with a letter and longer than 3 characters
    if (username.length < 3 || !/^[a-zA-Z]/.test(username)) {
      const errorMessage = document.getElementById('errorMessage');
      errorMessage.textContent =
        'Please enter a username that starts with a letter and is longer than 3 characters';
      errorMessage.style.color = 'red';
      errorMessage.style.display = 'block';
      return;
    }
    //check if email is a valid email address
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      const errorMessage = document.getElementById('errorMessage');
      errorMessage.textContent = 'Please enter a valid email address';
      errorMessage.style.color = 'red';
      errorMessage.style.display = 'block';
      return;
    }
    //check if dob is a valid date amd not in the future
    if (new Date(dob) > new Date() || new Date(dob) < new Date('1900-01-01')) {
      const errorMessage = document.getElementById('errorMessage');
      errorMessage.textContent = 'Please enter a valid date of birth';
      errorMessage.style.color = 'red';
      errorMessage.style.display = 'block';
      return;
    }
    fetch('/birthday', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, email, dob }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);

        const successMessage = document.getElementById('successMessage');
        successMessage.textContent = 'Hurray! Your Birthday successfully added';
        successMessage.style.color = 'green';
        successMessage.style.display = 'block';

        document.getElementById('birthdayForm').reset();
      })
      .catch((error) => {
        console.log('Error:', error);

        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent =
          'Oops! Error adding birthday. Please try again.';
        errorMessage.style.color = 'red';
        errorMessage.style.display = 'block';
      });
  });
