// script.js

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
            // Animate the hamburger icon
            this.classList.toggle('active');
        });
    }
    
    // Close mobile menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });
    
    // Form validation for contact page
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            
            // Reset error messages
            document.getElementById('nameError').textContent = '';
            document.getElementById('emailError').textContent = '';
            document.getElementById('messageError').textContent = '';
            
            // Validate name
            const name = document.getElementById('name').value.trim();
            if (name === '') {
                document.getElementById('nameError').textContent = 'Por favor ingresa tu nombre';
                isValid = false;
            }
            
            // Validate email
            const email = document.getElementById('email').value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (email === '') {
                document.getElementById('emailError').textContent = 'Por favor ingresa tu correo electrónico';
                isValid = false;
            } else if (!emailRegex.test(email)) {
                document.getElementById('emailError').textContent = 'Por favor ingresa un correo electrónico válido';
                isValid = false;
            }
            
            // Validate message
            const message = document.getElementById('message').value.trim();
            if (message === '') {
                document.getElementById('messageError').textContent = 'Por favor escribe un mensaje';
                isValid = false;
            } else if (message.length < 10) {
                document.getElementById('messageError').textContent = 'El mensaje debe tener al menos 10 caracteres';
                isValid = false;
            }
            
            // If form is valid, submit (in a real scenario)
            if (isValid) {
                // In a real scenario, you would send the form data to a server
                alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
                contactForm.reset();
            }
        });
    }
    
    // Gallery modal functionality
    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById('modalImage');
    const captionText = document.getElementById('caption');
    
    window.openModal = function(imageId) {
        // In this example, we're using placeholder images, so we'll just show a larger version
        const imgSrc = document.querySelector(`.gallery-item:nth-child(${imageId.split('-')[2]}) img`).src;
        modal.style.display = 'flex';
        modalImg.src = imgSrc.replace('400x300', '800x600');
        captionText.innerHTML = document.querySelector(`.gallery-item:nth-child(${imageId.split('-')[2]}) img`).alt;
    }
    
    window.closeModal = function() {
        modal.style.display = 'none';
    }
    
    // Close modal when clicking outside the image
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            closeModal();
        }
    });
    
    // Add keyboard navigation for modal
    window.addEventListener('keydown', function(e) {
        if (modal.style.display === 'flex') {
            if (e.key === 'Escape') {
                closeModal();
            }
        }
    });
    
    // Animation on scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.gallery-item, .service-card, .about-content');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state for animated elements
    document.querySelectorAll('.gallery-item, .service-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Run on load and scroll
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});

// Change hamburger icon when active
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
        });
    }
});