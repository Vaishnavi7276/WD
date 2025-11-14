// STATIC JSON DATA - HOSPITAL EVENTS
let participants = {
  surgery: [
    { name: "Dr. Rajesh Kumar", email: "rajesh.k@hospital.com", mobile: "9876543210" },
    { name: "Dr. Priya Sharma", email: "priya.s@hospital.com", mobile: "9123456780" },
    { name: "Nurse Amit Singh", email: "amit.singh@hospital.com", mobile: "9988776655" },
  ],
  vaccination: [
    { name: "Dr. Meera Patel", email: "meera.p@hospital.com", mobile: "7788996655" },
    { name: "Pharmacist Sunil Gupta", email: "sunil.g@hospital.com", mobile: "9090909090" },
  ],
  training: [
    { name: "Dr. Vikram Rao", email: "vikram.r@hospital.com", mobile: "8765432109" },
    { name: "Nurse Manager Sarah Khan", email: "sarah.k@hospital.com", mobile: "8123456789" },
  ],
};

// FUNCTION TO SHOW PARTICIPANTS
function showParticipants() {
  let eventKey = document.getElementById("eventSelect").value;
  let table = document.getElementById("participantTable");
  let tbody = document.getElementById("tableBody");

  if (eventKey === "") {
    table.style.display = "none";
    tbody.innerHTML = "";
    return;
  }

  let selected = participants[eventKey];

  tbody.innerHTML = ""; // Clear previous rows

  selected.forEach((person) => {
    let row = `
            <tr>
                <td>${person.name}</td>
                <td>${person.email}</td>
                <td>${person.mobile}</td>
            </tr>
        `;
    tbody.innerHTML += row;
  });

  table.style.display = "table"; // Show table
}
