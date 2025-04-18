const toggle = document.getElementById("themeSwitcher");

// Load particles based on current theme
function loadParticles(theme) {
  // Remove any existing canvas to prevent duplicates
  const existingCanvas = document.querySelector("#particles-js canvas");
  if (existingCanvas) existingCanvas.remove();

  // Set color based on theme
  const color = theme === "light" ? "#1d1d1f" : "#ffffff";

  // Initialize particle background
  particlesJS("particles-js", {
    particles: {
      number: { value: 70 },
      color: { value: color },
      shape: { type: "circle" },
      opacity: { value: 0.3 },
      size: { value: 3 },
      line_linked: {
        enable: true,
        distance: 150,
        color: color,
        opacity: 0.2,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        out_mode: "bounce"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: { enable: true, mode: "grab" },
        onclick: { enable: true, mode: "push" }
      },
      modes: {
        grab: { distance: 200, line_linked: { opacity: 0.5 } },
        push: { particles_nb: 4 }
      }
    },
    retina_detect: true
  });
}

// Load saved theme on startup
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "dark";

  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    toggle.checked = true;
  }

  loadParticles(savedTheme);
});

// Toggle handler
toggle.addEventListener("change", () => {
  const theme = toggle.checked ? "light" : "dark";

  document.body.classList.toggle("light-theme", theme === "light");
  localStorage.setItem("theme", theme);
  loadParticles(theme);
});

document.addEventListener("DOMContentLoaded", () => {
    const el = document.getElementById("animated-text");
    const text = el.textContent.trim();
    const words = text.split(" ");

    el.innerHTML = ""; // clear existing content

    words.forEach((word, i) => {
      const span = document.createElement("span");
      span.textContent = word + " ";
      span.style.animationDelay = `${i * 100}ms`;
      el.appendChild(span);
    });

    // reveal job status after animation
    const jobStatus = document.getElementById("jobStatus");
    setTimeout(() => {
      jobStatus.classList.add("visible");
    }, words.length * 100 + 500);
  });

  window.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      // Hide preloader
      document.getElementById("preloader").style.display = "none";
      // Show site content
      document.getElementById("site-wrapper").style.display = "block";

      // Now init particles.js
      particlesJS("particles-js", {
        particles: {
          number: { value: 70 },
          color: { value: "#b084f9" },
          shape: { type: "circle" },
          opacity: { value: 0.3 },
          size: { value: 3 },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#b084f9",
            opacity: 0.2,
            width: 1
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            out_mode: "bounce"
          }
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "grab" },
            onclick: { enable: true, mode: "push" }
          },
          modes: {
            grab: { distance: 200, line_linked: { opacity: 0.5 } },
            push: { particles_nb: 4 }
          }
        },
        retina_detect: true
      });
    }, 900);
  });

  document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.6
    });

    items.forEach(item => observer.observe(item));
  });

// all the checks for placeholders in contact form

// === AOS animation init
AOS.init();

const body = document.body;

// Set saved theme on load
const savedTheme = localStorage.getItem("theme") || "dark";
if (savedTheme === "light") {
  body.classList.add("light-theme");
  if (toggle) toggle.checked = true;
}

// Theme switcher handler
if (toggle) {
  toggle.addEventListener("change", () => {
    const theme = toggle.checked ? "light" : "dark";
    body.classList.toggle("light-theme", theme === "light");
    localStorage.setItem("theme", theme);
  });
}
