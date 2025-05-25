const toggle = document.getElementById("themeSwitcher");

// Load particles based on current theme


// Load saved theme on startup
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme") || "dark";

  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    toggle.checked = true;
  }


});

// Toggle handler
toggle.addEventListener("change", () => {
  const theme = toggle.checked ? "light" : "dark";

  document.body.classList.toggle("light-theme", theme === "light");
  localStorage.setItem("theme", theme);
  
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


////game

