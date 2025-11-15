document.addEventListener('DOMContentLoaded', async () => {
  const params = new URLSearchParams(window.location.search);
  const eventId = params.get('eventId') || '1';
  const tableBody = document.getElementById('participantsTableBody');
  const participants = await getParticipantsByEvent(eventId);

  document.getElementById('eventTitle').textContent = `Participants for Event ${eventId}`;

  if(!participants.length){
      tableBody.innerHTML = '<tr><td colspan="4">No participants found.</td></tr>';
      return;
  }

  tableBody.innerHTML = participants.map(p=>`
      <tr>
          <td>${p.id}</td>
          <td>${p.name}</td>
          <td>${p.email}</td>
          <td>${p.status}</td>
      </tr>
  `).join('');
});
