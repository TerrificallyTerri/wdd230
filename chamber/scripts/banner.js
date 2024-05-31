const banner = document.getElementById('banner');
const today = new Date().getDay();
console.log("Today", today);

function createBanner() {
    const spacer = document.createElement('div');
    spacer.classList.add('spacer');
    const message1 = document.createElement('h2');
    message1.classList.add('banner-message');
    message1.textContent = `🕖 Reminder: Chamber of Commerce Meet and Greet`
    const message2 = document.createElement('h2');
    message2.classList.add('banner-message');
    message2.textContent = `Wednesday 19:00!`

    const bannerButton = document.createElement('button');
    bannerButton.id = "banner-button";
    bannerButton.textContent = `❌`

    banner.appendChild(spacer);
    banner.appendChild(message1);
    banner.appendChild(message2);
    banner.appendChild(bannerButton);

    bannerButton.addEventListener("click", function () {
        banner.style.display = 'none';
    });
}

if (today === 1 || today === 2 || today === 3) {
    createBanner();
};

