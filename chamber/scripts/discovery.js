
// vistits to the page

// Get info from local storage and save it to variables
document.addEventListener("DOMContentLoaded", function () {
    // Counter for number of visits to site
    const showVisits = document.getElementById('visits');
    let count = Number(window.localStorage.getItem('visitStored'));

    // Check if the user has visited before
    if (isNaN(count) || count === 0) {
        showVisits.textContent = ``;
        count = 1;
    }

    // Check if visit was today
    var lastVisit = localStorage.getItem("lastVisit");
    var today = new Date();
    var message;

    if (!lastVisit) {
        // First visit
        message = "Welcome! Let us know if you have any questions.";
    } else {
        // show visit count
        showVisits.innerHTML = `You have visited us: ${count} ${(count === 1 ? "time" : "times")} `;
        var diffTime = today.getTime() - new Date(parseInt(lastVisit)).getTime();
        var diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 0) {
            message = "Back so soon! Awesome!";
        } else {
            message = "You last visited " + diffDays + " " + (diffDays === 1 ? "day" : "days") + " ago.";
        }
    }

    // update local storage
    localStorage.setItem("lastVisit", today.getTime());
    count++;
    localStorage.setItem('visitStored', count);

    var lvInfo = document.getElementById("last-visit");
    lvInfo.textContent = message;
});
