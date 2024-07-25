// JavaScript for Interactivity
const toggleButton = document.querySelector('.light-dark-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleButton.textContent = document.body.classList.contains('dark-mode') ? 'Dark' : 'Light';
});

const hamburger = document.querySelector('.navbar-toggler');
const navLinks = document.querySelector('.navbar-collapse');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Adding animations to the hero section text
document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.classList.add('animate__animated', 'animate__fadeInDown');
});
