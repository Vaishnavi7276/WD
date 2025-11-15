// Mock data
const events = [
  { _id: '1', name: 'Tech Conference' },
  { _id: '2', name: 'Business Meetup' }
];

const participants = [
  { id:'p1', name:'John Doe', email:'john@example.com', eventId:'1', status:'confirmed' },
  { id:'p2', name:'Jane Smith', email:'jane@example.com', eventId:'1', status:'pending' },
  { id:'p3', name:'Mike Johnson', email:'mike@example.com', eventId:'2', status:'confirmed' }
];

// Functions
async function getAllEvents(){ return events; }
async function getParticipantsByEvent(eventId){ return participants.filter(p => p.eventId === eventId); }
