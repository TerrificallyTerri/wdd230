// darkmode.js

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        localStorage.setItem('dark-mode', isDarkMode);

        // Toggle the content of the dark mode button
        darkModeToggle.querySelector('.icon').textContent = isDarkMode ? '🌞' : '🌚';
    });

    // Check if dark mode is stored in localStorage
    const savedDarkMode = localStorage.getItem('dark-mode');

    if (savedDarkMode === 'true') {
        body.classList.add('dark-mode');
        darkModeToggle.querySelector('.icon').textContent = '🌞';
    } else {
        body.classList.add('light-mode');
    }
});
