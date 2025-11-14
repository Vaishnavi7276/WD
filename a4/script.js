// Hospital Management System - Event Array
const hospitalEvents = [
    {
        title: "Free Health Check-Up Camp",
        date: "25 Nov 2025",
        time: "9:00 AM – 4:00 PM",
        department: "General Medicine",
        description: "Free blood pressure, sugar, BMI screening for all visitors.",
        status: "Open for Registration"
    },
    {
        title: "Blood Donation Drive",
        date: "2 Dec 2025",
        time: "10:00 AM – 3:00 PM",
        department: "Pathology / Red Cross",
        description: "Donate blood and save lives. Certificates and refreshments provided.",
        status: "Active"
    },
    {
        title: "CPR & First Aid Workshop",
        date: "15 Dec 2025",
        time: "11:00 AM – 1:00 PM",
        department: "Emergency / Trauma Care",
        description: "Hands-on CPR techniques, emergency first aid training.",
        status: "Limited Seats"
    },
    {
        title: "Mental Health Counseling Session",
        date: "18 Jan 2026",
        time: "10:00 AM – 12:00 PM",
        department: "Psychiatry",
        description: "Free counseling sessions and stress-management workshop.",
        status: "upcoming"
    },
    {
        title: "Eye Check-Up Camp",
        date: "22 Jan 2026",
        time: "9:00 AM – 3:00 PM",
        department: "Ophthalmology",
        description: "Vision test, cataract screening, and glasses prescription.",
        status: "Upcoming"
    }
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const eventsContainer = document.getElementById('eventsContainer');
const noResults = document.getElementById('noResults');

// Initialize the application
function init() {
    displayAllEvents();
    setupEventListeners();
}

// Display all events
function displayAllEvents() {
    renderEvents(hospitalEvents);
}

// Render events to the DOM
function renderEvents(events) {
    eventsContainer.innerHTML = '';
    
    if (events.length === 0) {
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    events.forEach((event) => {
        const card = document.createElement('div');
        card.className = 'event-card';
        card.innerHTML = `
            <div class="event-card-header">
                <h3 class="event-title">${highlightMatch(event.title, searchInput.value)}</h3>
            </div>
            <div class="event-card-body">
                <p class="event-date">Date: ${event.date}</p>
                <p class="event-time">Time: ${event.time}</p>
                <p class="event-department">Department: ${highlightMatch(event.department, searchInput.value)}</p>
                <p class="event-description">${highlightMatch(event.description, searchInput.value)}</p>
                <p class="event-status">Status: <strong>${event.status}</strong></p>
            </div>
        `;
        eventsContainer.appendChild(card);
    });
}

// Search and filter events
function filterEvents() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm === '') {
        displayAllEvents();
        return;
    }
    
    const filteredEvents = hospitalEvents.filter(event => 
        event.title.toLowerCase().includes(searchTerm) || 
        event.description.toLowerCase().includes(searchTerm)
    );
    
    renderEvents(filteredEvents);
}

// Highlight matching text in results
function highlightMatch(text, searchTerm) {
    if (!searchTerm) return text;
    
    const regex = new RegExp(`(${searchTerm})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
}

// Setup event listeners
function setupEventListeners() {
    // Search on input change
    searchInput.addEventListener('input', filterEvents);
    
    // Allow Enter key in search
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            filterEvents();
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
