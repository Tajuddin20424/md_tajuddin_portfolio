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

