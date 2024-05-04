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



