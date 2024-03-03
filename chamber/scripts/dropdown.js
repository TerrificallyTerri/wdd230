// JavaScript
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');

    // Toggle between "≡" and "X"
    const newContent = hamButton.textContent === '≡' ? 'X' : '≡';
    hamButton.textContent = newContent;
});
