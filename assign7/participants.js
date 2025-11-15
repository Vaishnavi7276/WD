let participants = {};
fetch("participants.json")
  .then((response) => response.json())
  .then((data) => {
    participants = data;
  })
  .catch((error) => {
    console.error("Error loading participants:", error);
  });

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

  tbody.innerHTML = "";

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

  table.style.display = "table";
}
