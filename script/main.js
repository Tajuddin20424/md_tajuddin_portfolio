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

// DOM Content Loaded
document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    const mobileMenu = document.getElementById('mobile-menu');
    const navbar = document.getElementById('navbar');
    
    if (mobileMenu && navbar) {
        mobileMenu.addEventListener('click', function() {
            navbar.classList.toggle('active');
            mobileMenu.innerHTML = navbar.classList.contains('active') ? 
                '<i class="bx bx-x"></i>' : 
                '<i class="bx bx-menu"></i>';
        });
        
        // Close menu when clicking on a link
        const navLinks = navbar.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navbar.classList.remove('active');
                mobileMenu.innerHTML = '<i class="bx bx-menu"></i>';
            });
        });
    }
    
    // Typed.js Initialization
    var typed = new Typed(".text", {
        strings: ["Frontend Developer", "Web Developer", "Full Stack Developer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Formspree Form Handler
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    
    if (form) {
        form.addEventListener('submit', function (e) {
            if (submitBtn) {
                submitBtn.value = 'Sending...';
                submitBtn.disabled = true;
                submitBtn.style.opacity = '0.8';
            }
            
            // Formspree will handle the submission
            // We'll just reset the button after a delay if needed
            setTimeout(function () {
                if (submitBtn) {
                    submitBtn.value = 'Send Messages';
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '1';
                }
            }, 5000);
        });
    }
    
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        easing: "ease-in-out"
    });
    
    // Header scroll effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 100) {
            header.style.background = 'rgba(5, 11, 26, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'linear-gradient(to right, #050b1a, #0b1a3a)';
            header.style.backdropFilter = 'none';
        }
    });
    
    // Skills animation on scroll
    const observerOptions = {
        threshold: 0.3
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillItems = entry.target.querySelectorAll('.skill-item, .radial-skill');
                skillItems.forEach((item, index) => {
                    item.style.animationDelay = `${index * 0.2}s`;
                    item.style.animationPlayState = 'running';
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    const skillsSection = document.querySelector('.main-container');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navbar && navbar.classList.contains('active') && 
            !navbar.contains(event.target) && 
            !mobileMenu.contains(event.target)) {
            navbar.classList.remove('active');
            mobileMenu.innerHTML = '<i class="bx bx-menu"></i>';
        }
    });
});

// Add touch event handling for mobile
document.addEventListener('touchstart', function() {}, {passive: true});

// Handle orientation change
window.addEventListener('orientationchange', function() {
    // Close mobile menu on orientation change
    const navbar = document.getElementById('navbar');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (navbar && navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        if (mobileMenu) {
            mobileMenu.innerHTML = '<i class="bx bx-menu"></i>';
        }
    }
    
    // Force a repaint to fix any layout issues
    setTimeout(function() {
        window.dispatchEvent(new Event('resize'));
    }, 100);
});

// Performance optimization for animations
let lastScrollTime = 0;
window.addEventListener('scroll', function() {
    const currentTime = new Date().getTime();
    if (currentTime - lastScrollTime > 100) {
        // Throttle scroll events
        lastScrollTime = currentTime;
    }
});

// Lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        if (img.dataset.src) {
            imageObserver.observe(img);
        }
    });
});
// 