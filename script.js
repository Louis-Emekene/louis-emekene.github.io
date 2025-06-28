// Theme toggle
function toggleTheme() {
  document.body.classList.toggle('theme-dark');

  // Save preference
  if (document.body.classList.contains('theme-dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}

// Load saved preference
window.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.body.classList.add('theme-dark');
  }
});


const themeToggle = document.querySelector('.theme-toggle');

function toggleTheme() {
  document.body.classList.toggle('theme-dark');

  // Save preference
  if (document.body.classList.contains('theme-dark')) {
    localStorage.setItem('theme', 'dark');
    themeToggle.textContent = '☀️';
  } else {
    localStorage.setItem('theme', 'light');
    themeToggle.textContent = '🌙';
  }
}

// Load preference + icon
window.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    document.body.classList.add('theme-dark');
    themeToggle.textContent = '☀️';
  } else {
    themeToggle.textContent = '🌙';
  }
});
