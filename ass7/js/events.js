document.addEventListener('DOMContentLoaded', async () => {
  const allEvents = await getAllEvents();
  const grid = document.getElementById('eventsGrid');
  if(!allEvents.length){ grid.innerHTML = '<p>No events found.</p>'; return; }
  grid.innerHTML = allEvents.map(e=>`<div onclick="viewParticipants('${e._id}')">${e.name}</div>`).join('');
});

function viewParticipants(eventId){
  window.location.href = `participants.html?eventId=${eventId}`;
}
