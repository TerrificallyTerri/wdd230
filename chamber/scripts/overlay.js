// Add text overlay
function addTextOverlay() {
    const heroImage = document.querySelectorAll('#hero');

    heroImage.forEach((hero) => {
        // clear overlay
        const existingOverlay = hero.querySelectorAll('.overlay');
        existingOverlay.forEach((overlay) => {
            overlay.remove();
        });
        // make new overlay
        const overlay = document.createElement('div');
        overlay.classList.add('overlay');

        // variable for label text
        let labelText = '';

        // Add label text based on viewport size
        if (window.innerWidth <= 600) {
            labelText = 'Small'
        } else if (window.innerWidth <= 990) {
            labelText = 'Medium'
        } else {
            labelText = 'Large'
        };

        // put it in the element
        overlay.innerHTML = `<p>${labelText}</p>`;
        // add to the hero
        hero.appendChild(overlay);
    })
}
// call function
addTextOverlay();

// add event listener for window size
window.addEventListener('resize', addTextOverlay);