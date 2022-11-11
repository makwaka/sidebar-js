const sidebarToggle = document.querySelector('.sidebar-toggle');

const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

// listen for click events
// Then add callback function that will add and remove classlists or toggle between sidebar class that is not seen due to translate -100 and show-sidebar class in CSS

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.toggle('show-sidebar');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('show-sidebar');
});