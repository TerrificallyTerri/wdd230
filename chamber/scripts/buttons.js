// Events Button
const eventBttn = document.querySelectorAll('.event-details');

eventBttn.forEach(button => {
    button.addEventListener('click', function () {
        window.location.href = 'dummy.html';
    });
});

// Join Button
const joinBttns = document.querySelectorAll('.join');

joinBttns.forEach(button => {
    button.addEventListener('click', function () {
        window.location.href = 'join.html';
    });
});

// Hamburger button 
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');

    // Toggle between "≡" and "X"
    const newContent = hamButton.textContent === '≡' ? 'X' : '≡';
    hamButton.textContent = newContent;
});


