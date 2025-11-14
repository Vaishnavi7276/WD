// Admin login UI simulation
const loginForm = document.getElementById('adminLoginForm');
const loginMessage = document.getElementById('loginMessage');

if (loginForm) {
  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // Simple UI check (for demo only)
    if (username === 'admin' && password === 'admin123') {
      loginMessage.style.color = 'green';
      loginMessage.textContent = 'Login successful! Redirecting...';
      setTimeout(() => {
        window.location.href = 'dashboard.html';
      }, 200);
    } else {
      loginMessage.style.color = 'red';
      loginMessage.textContent = 'Invalid credentials!';
    }
  });
}

// Logout button simulation
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
  logoutBtn.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}

// Modal elements
const modal = document.getElementById('updateModal');
const closeModal = document.querySelector('.close');
const saveBtn = document.getElementById('saveUpdate');
let currentRow = null;

// Open modal to update
document.querySelectorAll('.updateBtn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    currentRow = e.target.closest('tr');
    document.getElementById('eventName').value = currentRow.children[0].textContent;
    document.getElementById('eventDate').value = currentRow.children[1].textContent;
    document.getElementById('eventLocation').value = currentRow.children[2].textContent;
    modal.style.display = 'block';
  });
});

// Close modal
closeModal.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if(e.target == modal) modal.style.display = 'none'; }

// Save updated values
if (saveBtn) {
  saveBtn.addEventListener('click', () => {
    const name = document.getElementById('eventName').value;
    const date = document.getElementById('eventDate').value;
    const location = document.getElementById('eventLocation').value;

    if (currentRow) {
      // Update existing row
      currentRow.children[0].textContent = name;
      currentRow.children[1].textContent = date;
      currentRow.children[2].textContent = location;
    } else {
      // Add new row to table
      const tbody = document.querySelector('#eventTable tbody');
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${name}</td><td>${date}</td><td>${location}</td>
        <td>
          <button class="updateBtn">Update</button>
          <button class="deleteBtn">Delete</button>
        </td>`;
      tbody.appendChild(tr);

      // Attach listeners to the newly created buttons
      const newUpdate = tr.querySelector('.updateBtn');
      const newDelete = tr.querySelector('.deleteBtn');

      newUpdate.addEventListener('click', (e) => {
        currentRow = e.target.closest('tr');
        document.getElementById('eventName').value = currentRow.children[0].textContent;
        document.getElementById('eventDate').value = currentRow.children[1].textContent;
        document.getElementById('eventLocation').value = currentRow.children[2].textContent;
        modal.style.display = 'block';
      });

      newDelete.addEventListener('click', (e) => {
        const row = e.target.closest('tr');
        if (confirm('Are you sure you want to delete this event?')) {
          row.remove();
        }
      });
    }

    modal.style.display = 'none';
  });
}

// Add New Event button behavior
const addEventBtn = document.getElementById('addEventBtn');
if (addEventBtn) {
  addEventBtn.addEventListener('click', () => {
    currentRow = null; // signal creation mode
    document.getElementById('eventName').value = '';
    document.getElementById('eventDate').value = '';
    document.getElementById('eventLocation').value = '';
    modal.style.display = 'block';
  });
}

// Delete row
document.querySelectorAll('.deleteBtn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const row = e.target.closest('tr');
    if(confirm('Are you sure you want to delete this event?')){
      row.remove();
    }
  });
});
