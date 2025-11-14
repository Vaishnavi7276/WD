function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let mobile = document.getElementById("mobile").value.trim();
  let msg = document.getElementById("msg");

  // Name validation (not empty)
  if (name === "") {
    msg.innerHTML = "Please enter your name";
    return;
  }

  // Email validation (simple pattern)
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    msg.innerHTML = "Please enter a valid email";
    return;
  }

  // Mobile validation (exact 10 digits)
  let mobilePattern = /^[0-9]{10}$/;
  if (!mobile.match(mobilePattern)) {
    msg.innerHTML = "Mobile number must be 10 digits";
    return;
  }

  // Success
  msg.style.color = "green";
  msg.innerHTML = "Registration Successful!";
}
