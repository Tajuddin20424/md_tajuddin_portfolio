// Main JavaScript File
document.addEventListener('DOMContentLoaded', function() {
    console.log("Portfolio loaded successfully!");
    
    // Typed.js Initialization
    function initializeTypedJS() {
        const textElement = document.querySelector('.text');
        if (textElement && typeof Typed !== 'undefined') {
            try {
                const typed = new Typed(".text", {
                    strings: ["Frontend Developer", "Web Developer"],
                    typeSpeed: 100,
                    backSpeed: 100,
                    backDelay: 1000,
                    loop: true
                });
                console.log("Typed.js initialized successfully!");
            } catch (error) {
                console.error("Typed.js error:", error);
            }
        } else {
            console.warn("Typed.js not available or element not found");
        }
    }
    
    // Initialize Typed.js immediately
    initializeTypedJS();
    
    // If Typed.js loads later, initialize again
    if (typeof Typed === 'undefined') {
        console.log("Waiting for Typed.js to load...");
        const checkTyped = setInterval(() => {
            if (typeof Typed !== 'undefined') {
                clearInterval(checkTyped);
                initializeTypedJS();
            }
        }, 100);
    }
    
    // AOS Initialization
    function initializeAOS() {
        if (typeof AOS !== 'undefined') {
            AOS.init({
                duration: 1000,
                once: true,
                easing: 'ease-in-out',
                offset: 100
            });
            console.log("AOS initialized successfully!");
        }
    }
    
    // Initialize AOS
    initializeAOS();
    
    // Navigation Active State
    function setActiveNavLink() {
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('.navbar a');
        
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - 150)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }
    
    // Set active nav link on scroll
    window.addEventListener('scroll', setActiveNavLink);
    
    // Call once on load
    setActiveNavLink();
    
    // Back to Top Button
    const backToTopBtn = document.querySelector('.top');
    if (backToTopBtn) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 300) {
                backToTopBtn.style.display = 'flex';
            } else {
                backToTopBtn.style.display = 'none';
            }
        });
        
        backToTopBtn.addEventListener('click', function(e) {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Form Submission Handler
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    
    if (form && submitBtn) {
        form.addEventListener('submit', function(e) {
            // Show loading state
            submitBtn.value = 'Sending...';
            submitBtn.disabled = true;
            submitBtn.style.opacity = '0.7';
            submitBtn.style.cursor = 'not-allowed';
            
            // Simulate delay for UX
            setTimeout(() => {
                submitBtn.value = 'Message Sent!';
                submitBtn.style.background = '#22c55e';
                
                // Reset after 2 seconds
                setTimeout(() => {
                    submitBtn.value = 'Submit';
                    submitBtn.disabled = false;
                    submitBtn.style.opacity = '1';
                    submitBtn.style.background = '';
                    submitBtn.style.cursor = 'pointer';
                }, 2000);
            }, 1000);
        });
    }
    
    // Project Hover Effects
    const projectRows = document.querySelectorAll('.row');
    projectRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 20px 40px rgba(0, 238, 255, 0.3)';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
    
    // Skill Animations on Scroll
    const skillItems = document.querySelectorAll('.skill-item, .radial-skill');
    const skillProgressBars = document.querySelectorAll('.progress-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                
                // Animate progress bars
                if (entry.target.classList.contains('skill-item')) {
                    const progressFill = entry.target.querySelector('.progress-fill');
                    if (progressFill) {
                        progressFill.style.animation = 'fillProgress 1.5s ease forwards';
                    }
                }
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px'
    });
    
    skillItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(item);
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Force show all content (safety fallback)
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.visibility = 'visible';
        
        // Force show all animated elements
        const animatedElements = document.querySelectorAll('[style*="animation"], [style*="opacity"]');
        animatedElements.forEach(el => {
            el.style.opacity = '1';
            el.style.visibility = 'visible';
        });
    }, 100);
    
    // Service cards animation
    const serviceBoxes = document.querySelectorAll('.service-box');
    serviceBoxes.forEach((box, index) => {
        box.style.animationDelay = `${index * 0.1}s`;
        box.style.animation = 'fadeInUp 0.5s ease forwards';
    });
    
    // Add CSS for fadeInUp animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    // Console log for debugging
    console.log("All JavaScript functions initialized!");
});

// Window load event for final initialization
window.onload = function() {
    console.log("Window fully loaded!");
    
    // Ensure everything is visible
    document.body.style.opacity = '1';
    document.body.style.visibility = 'visible';
    
    // Check if images are loaded
    const images = document.querySelectorAll('img');
    let loadedImages = 0;
    
    images.forEach(img => {
        if (img.complete) {
            loadedImages++;
        } else {
            img.addEventListener('load', () => {
                loadedImages++;
                console.log(`Image loaded: ${loadedImages}/${images.length}`);
            });
        }
    });
    
    console.log(`Total images: ${images.length}, Loaded: ${loadedImages}`);
};