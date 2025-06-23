// This script handles the navigation menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
  });

  // Close menu when clicking a link
  document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
      });
  });
});

// This script handles the typing effect for the words: Software Engineering Student, Freelancer, Designer
const words = [ "Software Engineering Student", "Freelancer", "Designer"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

const typedText = document.querySelector(".typed-text");

function type() {
  currentWord = words[i];
  
  if (isDeleting) {
    typedText.textContent = currentWord.substring(0, j--);
  } else {
    typedText.textContent = currentWord.substring(0, j++);
  }

  if (!isDeleting && j === currentWord.length + 1) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
    setTimeout(type, 300);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}

document.addEventListener("DOMContentLoaded", type);

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const phoneInput = form.querySelector('input[name="phone"]');
    const emailInput = form.querySelector('input[name="email"]');

    // Validation of phone number
    phoneInput.addEventListener('input', function() {
        const phoneError = document.getElementById('phone-error');
        if (!/^\d+$/.test(phoneInput.value)) {
            phoneError.textContent = 'Please enter a valid phone number.';
        } else {
            phoneError.textContent = '';
        }
    });

    // Validation of email
    emailInput.addEventListener('input', function() {
        const emailError = document.getElementById('email-error');
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address.';
        } else {
            emailError.textContent = '';
        }
    });

    // Form submission
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 

        const name = form.querySelector('input[name="name"]').value;
        const phone = phoneInput.value;
        const email = emailInput.value;
        const message = form.querySelector('textarea[name="message"]').value;

        if (!name || !phone || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        console.log('Form Data:', { name, phone, email, message });
        alert('Thank you for your message!');
        form.reset();
    });
});

