document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Clear previous messages
  document.getElementById("successMessage").innerText = "";
  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("messageError").innerText = "";

  // Get values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  let valid = true;

  // Name validation
const namePattern = /^[A-Za-z\s]+$/;

if (name === "") {
  document.getElementById("nameError").innerText = "Name is required.";
  valid = false;
} else if (!namePattern.test(name)) {
  document.getElementById("nameError").innerText = "Name must contain only letters and spaces.";
  valid = false;
}

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    document.getElementById("emailError").innerText = "Email is required.";
    valid = false;
  } else if (!emailPattern.test(email)) {
    document.getElementById("emailError").innerText = "Invalid email format.";
    valid = false;
  }

  // Message validation
  if (message === "") {
    document.getElementById("messageError").innerText = "Message is required.";
    valid = false;
  }

  // If valid, show success message
  if (valid) {
    document.getElementById("successMessage").innerText =
      "Thank you! Your message has been sent.";
    // clear the form
    document.getElementById("contactForm").reset();
  }
});
