document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Simple client-side form submission (no actual backend)
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Prevent default form submission

            // Simulate form submission success
            setTimeout(() => {
                formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
                formMessage.className = 'form-message success';
                formMessage.style.display = 'block';
                contactForm.reset(); // Clear form fields

                // Hide message after a few seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            }, 1000); // Simulate network delay

            // In a real application, you would send this data to a server:
            // const formData = new FormData(contactForm);
            // fetch('/submit-form', {
            //     method: 'POST',
            //     body: formData
            // })
            // .then(response => response.json())
            // .then(data => {
            //     if (data.success) {
            //         formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
            //         formMessage.className = 'form-message success';
            //         contactForm.reset();
            //     } else {
            //         formMessage.textContent = 'There was an error sending your message. Please try again later.';
            //         formMessage.className = 'form-message error';
            //     }
            //     formMessage.style.display = 'block';
            //     setTimeout(() => { formMessage.style.display = 'none'; }, 5000);
            // })
            // .catch(error => {
            //     formMessage.textContent = 'There was an error sending your message. Please try again later.';
            //     formMessage.className = 'form-message error';
            //     formMessage.style.display = 'block';
            //     setTimeout(() => { formMessage.style.display = 'none'; }, 5000);
            // });
        });
    }
});
