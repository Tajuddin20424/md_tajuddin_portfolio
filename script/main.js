/* Header & Home Section Part Start */

document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".text", {
        strings: ["Frontend Developer", "Web Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 100,
        // backDelay: 1500,
        loop: true
    });
});


// 
// if (typeof Typed !== 'undefined') {
//     var typed = new Typed(".text", {
//         strings: ["Frontend Developer", "Web Developer"],
//         typeSpeed: 100,
//         backSpeed: 100,
//         backDelay: 1000,
//         backDelay: 1500,
//         loop: true
//     });
//     console.log("Typed.js manually initialized!");
// } else {
//     console.log("Loading Typed.js...");
//     var script = document.createElement('script');
//     script.src = 'https://unpkg.com/typed.js@2.1.0/dist/typed.umd.js';
//     script.onload = function() {
//         var typed = new Typed(".text", {
//             strings: ["Frontend Developer", "Web Developer"],
//             typeSpeed: 100,
//             backSpeed: 100,
//             backDelay: 1000,
//             backDelay: 1500,
//             loop: true
//         });
//     };
//     document.head.appendChild(script);
// }
// 

/* Header & Home Section Part End */

/* Services Section Part Start */

AOS.init({
    duration: 900,
    once: true,
    easing: "ease-in-out"
});

/* Services Section Part End */

// Formspree Form Handler Script part start 

// Formspree Form Submission Handler
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');

    if (form) {
        form.addEventListener('submit', function (e) {
            // Change button text to show loading state
            if (submitBtn) {
                submitBtn.value = 'Sending...';
                submitBtn.disabled = true;
                submitBtn.style.opacity = '0.8';
            }

            // The form will now submit to Formspree
            // Formspree will handle the redirect

            // Optional: Add a timeout to reset button if submission fails
            setTimeout(function () {
                if (submitBtn) {
                    submitBtn.value = 'Submit';
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '1';
                }
            }, 5000);
        });
    }

    // Typed.js for home section
    // var typed = new Typed(".text", {
    //     strings: ["Full Stack Developer", "Web Developer", "Machine Learning Enthusiast", "UI/UX Designer"],
    //     typeSpeed: 100,
    //     backSpeed: 100,
    //     backDelay: 1000,
    //     loop: true
    // });

    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true
    });
});

// Formspree Form Handler Script part end


// 
// Mobile Menu Toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if(menuIcon) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.navbar a').forEach(n => n.addEventListener('click', () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}));

// Typed.js initialization
document.addEventListener('DOMContentLoaded', function() {
    // Check if Typed is loaded
    if (typeof Typed !== 'undefined') {
        try {
            var typed = new Typed(".text", {
                strings: [
                    "Full Stack Developer", 
                    "Web Developer", 
                    "Machine Learning Enthusiast", 
                    "UI/UX Designer"
                ],
                typeSpeed: 80,
                backSpeed: 60,
                backDelay: 1500,
                loop: true,
                showCursor: true,
                cursorChar: "|",
                smartBackspace: true
            });
        } catch (error) {
            console.error("Typed.js error:", error);
            document.querySelector(".text").textContent = "Web Developer";
        }
    } else {
        document.querySelector(".text").textContent = "Web Developer";
    }
});

// Form submission handling
const contactForm = document.getElementById('contactForm');
if(contactForm) {
    contactForm.addEventListener('submit', function(e) {
        const submitBtn = this.querySelector('.send');
        if(submitBtn) {
            submitBtn.value = 'Sending...';
            submitBtn.disabled = true;
        }
    });
}

// Sticky header on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 100);
});

// Remove menu icon on large screens
function handleResize() {
    if(window.innerWidth > 768) {
        navbar.classList.remove('active');
        if(menuIcon) menuIcon.classList.remove('bx-x');
    }
}

window.addEventListener('resize', handleResize);

// Initialize AOS
if (typeof AOS !== 'undefined') {
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100
    });
}
// 