// Toggle the side navbar
const menuToggle = document.getElementById('menuToggle');
const sideNavbar = document.getElementById('sideNavbar');
const closeSideNavbar = document.getElementById('closeSideNavbar');
const navLinks = document.querySelectorAll('.side-navbar ul li a');

// Open the side navbar
menuToggle.addEventListener('click', () => {
    sideNavbar.classList.add('open');
});

// Close the side navbar
closeSideNavbar.addEventListener('click', () => {
    sideNavbar.classList.remove('open');
});

// Close the side navbar when a menu link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        sideNavbar.classList.remove('open');
    });
});
