// accordion functionality
// button event listenr
document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll('.accordion');

    accordions.forEach(accordion => {
        accordion.addEventListener('click', function () {
            // Only have 1 open panel
            accordions.forEach(panel => {
                if (panel !== accordion && panel.classList.contains('active')) {
                    panel.classList.remove('active');
                    panel.nextElementSibling.style.maxHeight = null;
                }
            });

            // Toggle open/close panel got help from spousing
            this.classList.toggle('active');
            const panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });
});
