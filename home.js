ScrollReveal({ reset: true });

ScrollReveal().reveal(".show-once", {
  reset: false
});

ScrollReveal().reveal(".title", {
  duration: 2000,
  origin: "top",
  distance: "400px",
  easing: "cubic-bezier(0.5, 0, 0, 1)",
  rotate: {
    x: 20,
    z: -10
  }
});

ScrollReveal().reveal(".fade-in", {
  duration: 2000,
  move: 0
});

ScrollReveal().reveal(".scaleUp", {
  duration: 2000,
  scale: 0.85
});

ScrollReveal().reveal(".scaleDown", {
  duration: 2000,
  scale: 1.15
});

ScrollReveal().reveal(".spinIn", {
  duration: 2000,
  scale: 0.85,
  rotate: {
    x: 20,
    z: 20
  }
});

ScrollReveal().reveal(".flip", {
  delay: 500,
  duration: 2000,
  rotate: {
    x: 20,
    z: 20
  }
});

ScrollReveal().reveal(".slide-right", {
  duration: 2000,
  origin: "left",
  distance: "300px",
  easing: "ease-in-out"
});

ScrollReveal().reveal(".slide-up", {
  duration: 2000,
  origin: "bottom",
  distance: "100px",
  easing: "cubic-bezier(.37,.01,.74,1)",
  opacity: 0.3,
  scale: 0.5
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }
  });
});

// Custom smooth scroll
let isScrolling = false;
window.addEventListener('wheel', function(e) {
  if (!isScrolling) {
    isScrolling = true;
    const direction = e.deltaY > 0 ? 1 : -1;
    const currentSection = document.elementFromPoint(window.innerWidth / 2, window.innerHeight / 2).closest('section');
    const targetSection = direction === 1 ? currentSection.nextElementSibling : currentSection.previousElementSibling;

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest'
      });
    }

    setTimeout(() => {
      isScrolling = false;
    }, 1000); // Adjust this value to control scroll speed (higher value = slower scroll)
  }
  e.preventDefault();
}, { passive: false });
