function validateForm() {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let mobile = document.getElementById("mobile").value.trim();
  let msg = document.getElementById("msg");

  if (name === "") {
    msg.innerHTML = "Please enter your name";
    return;
  }

  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    msg.innerHTML = "Please enter a valid email";
    return;
  }

  let mobilePattern = /^[0-9]{10}$/;
  if (!mobile.match(mobilePattern)) {
    msg.innerHTML = "Mobile number must be 10 digits";
    return;
  }

  // Send data to Node.js Server
  fetch("http://localhost:5000/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, mobile }),
  })
    .then((res) => res.json())
    .then((data) => {
      msg.style.color = "green";
      msg.innerHTML = "Registration Successful!";
    })
    .catch((err) => {
      msg.style.color = "red";
      msg.innerHTML = "Error saving data";
    });
}
