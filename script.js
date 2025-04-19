import * as THREE from 'three';
// Sphere that follows mouse
// Mobile Navigation Toggle
document.querySelector('.hamburger').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (window.innerWidth <= 768) {
            document.querySelector('.nav-links').style.display = 'none';
        }
    });
});

// Form Submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const formData = new FormData(this);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Scroll Reveal Animation
window.addEventListener('scroll', revealOnScroll);

function revealOnScroll() {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;
    const revealPoint = 150;
    
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - revealPoint) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}

// Initialize sections with hidden state
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Trigger initial reveal
revealOnScroll();

// Dynamic Year in Footer
document.querySelector('footer p').innerHTML = 
    `&copy; ${new Date().getFullYear()} Tushar. All rights reserved.`;

    const translations = {
        en: { welcome: "Welcome" },
        hi: { welcome: "स्वागत है" }
      };

// Predefined responses
const botResponses = {
    "hello": "Hi there! How can I help?",
    "projects": "I've built 3 major projects: 1) E-commerce site 2) Task app 3) AI tool",
    "contact": "Email me at tushar@example.com",
    "default": "I'm still learning. Ask about my projects or skills!"
  };
  
  document.getElementById('chat-toggle').addEventListener('click', () => {
    document.querySelector('.chatbot-container').style.display = 'flex';
  });
  
  document.getElementById('send-btn').addEventListener('click', sendMessage);
  
  function sendMessage() {
    const userInput = document.getElementById('user-input').value.toLowerCase();
    const chatBox = document.getElementById('chat-messages');
    
    // Add user message
    chatBox.innerHTML += `<div class="user-msg">${userInput}</div>`;
    
    // Bot response
    const response = Object.keys(botResponses).find(key => userInput.includes(key)) 
                  ? botResponses[Object.keys(botResponses).find(key => userInput.includes(key))] 
                  : botResponses.default;
    
    chatBox.innerHTML += `<div class="bot-msg">${response}</div>`;
    
    // Clear input
    document.getElementById('user-input').value = '';
    chatBox.scrollTop = chatBox.scrollHeight;
  }