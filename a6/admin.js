// EVENT ARRAY
let events = [
  {
    name: "Budget Planning Session",
    date: "05 Jan 2026",
    desc: "Learn how to structure your monthly expenses.",
  },
  {
    name: "Savings Challenge",
    date: "15 Jan 2026",
    desc: "Improve your savings habits through guided steps.",
  },
];

// SHOW/HIDE ADD EVENT FORM
function toggleForm() {
  let form = document.getElementById("addForm");

  if (form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}

// DISPLAY EVENTS
function displayEvents() {
  let container = document.getElementById("eventContainer");
  container.innerHTML = "";

  events.forEach((ev, index) => {
    let card = document.createElement("div");
    card.className = "event-card";

    card.innerHTML = `
      <h3>${ev.name}</h3>
      <p><strong>Date:</strong> ${ev.date}</p>
      <p>${ev.desc}</p>

      <button class="btn update-btn" onclick="updateEvent(${index})">Update</button>
      <button class="btn delete-btn" onclick="deleteEvent(${index})">Delete</button>
    `;

    container.appendChild(card);
  });
}

// ADD EVENT
function addEvent() {
  let name = document.getElementById("eventName").value;
  let date = document.getElementById("eventDate").value;
  let desc = document.getElementById("eventDesc").value;

  if (name === "" || date === "" || desc === "") {
    alert("Please fill all fields");
    return;
  }

  events.push({ name, date, desc });

  displayEvents();

  // Clear fields + hide form
  document.getElementById("eventName").value = "";
  document.getElementById("eventDate").value = "";
  document.getElementById("eventDesc").value = "";
  toggleForm();
}

// DELETE EVENT
function deleteEvent(index) {
  if (confirm("Do you want to delete this event?")) {
    events.splice(index, 1);
    displayEvents();
  }
}

// UPDATE EVENT
function updateEvent(index) {
  let newName = prompt("Enter new event name:", events[index].name);
  let newDate = prompt("Enter new event date:", events[index].date);
  let newDesc = prompt("Enter new description:", events[index].desc);

  if (newName && newDate && newDesc) {
    events[index].name = newName;
    events[index].date = newDate;
    events[index].desc = newDesc;
    displayEvents();
  }
}

// Load events on startup
displayEvents();
