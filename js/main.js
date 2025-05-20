// This file contains the JavaScript code that adds interactivity to the landing page.

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Animations for section appearances
    const sections = document.querySelectorAll('section');
    const options = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    // Lightbox functionality for gallery in social projects section
    const galleryImages = document.querySelectorAll('.gallery img');
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    document.body.appendChild(lightbox);

    galleryImages.forEach(image => {
        image.addEventListener('click', function() {
            const img = document.createElement('img');
            img.src = this.src;
            lightbox.innerHTML = '';
            lightbox.appendChild(img);
            lightbox.classList.add('active');
        });
    });

    lightbox.addEventListener('click', function() {
        lightbox.classList.remove('active');
    });

    // Animación de conteo para los números de resultados
    const numeros = document.querySelectorAll('.resultado-numero');
    numeros.forEach(num => {
        const valorFinal = parseInt(num.getAttribute('data-valor'), 10);
        let contador = 0;
        const incremento = Math.ceil(valorFinal / 60);
        const animar = () => {
            contador += incremento;
            if (contador >= valorFinal) {
                num.textContent = valorFinal;
            } else {
                num.textContent = contador;
                requestAnimationFrame(animar);
            }
        };
        animar();
    });
});

// Sticky header animation on scroll
window.addEventListener('scroll', function() {
  const header = document.getElementById('main-header');
  if (window.scrollY > 40) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-btn.next');
    const prevButton = document.querySelector('.carousel-btn.prev');
    let currentSlide = 0;

    function updateSlide(position) {
        track.style.transform = `translateX(-${position * 100}%)`;
    }

    nextButton.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide(currentSlide);
    });

    prevButton.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlide(currentSlide);
    });

