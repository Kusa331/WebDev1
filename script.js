//Nav Bar Hamburger Icons
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.getElementById("hamburger");
    const nav = document.getElementById("nav");
    const closeIcon = document.getElementById("close-icon");
    const navLinks = document.querySelectorAll(".nav-links a"); 

    hamburger.addEventListener("click", function() {
        nav.classList.add("active");
    });

   
    closeIcon.addEventListener("click", function() {
        nav.classList.remove("active");
    });

    navLinks.forEach (link => {
        link.addEventListener("click", function() {
            nav.classList.remove("active"); 
        });
    });
});


//Type Writer Animation
const texts = ["Developer", "UI/UX Designer", "Front-end Developer", "Back-end Developer", "IT-Student"];
let index = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;

function type() {
    const span = document.querySelector('.typing-text span');
 
    currentText = texts[index];
    
   
    if (!isDeleting && charIndex <= currentText.length) {
        span.textContent = currentText.slice(0, charIndex++);
    }
    
 
    if (isDeleting && charIndex >= 0) {
        span.textContent = currentText.slice(0, charIndex--);
    }
    

    if (charIndex === currentText.length) {
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        index = (index + 1) % texts.length; 
    }

    const typingSpeed = isDeleting ? 100 : 200; 
    setTimeout(type, typingSpeed);
}


type();


// dark mode
document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    themeToggle.addEventListener("click", function() {
        body.classList.toggle("light-mode");
        const isLightMode = body.classList.contains("light-mode");
        themeToggle.innerHTML = isLightMode 
            ? '<i class="fa-solid fa-moon"></i>'
            : '<i class="fa-solid fa-sun"></i>'; 
    });
});


//skill bar
window.addEventListener('load', () => {
    const skillLevels = document.querySelectorAll('.skill-level');

   
    skillLevels.forEach(skill => {
        const level = skill.getAttribute('data-level');
        skill.style.width = `${level}%`;
        skill.classList.add('active'); 
    });
});
