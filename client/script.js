console.log("JS Loaded");

// ======================
// AOS animations
// ======================
AOS.init({ duration: 800, once: true });

// ======================
// Show More Projects
// ======================
function showMoreProjects() {
  document.querySelectorAll('.project-card.hidden').forEach(card => {
    card.classList.remove('hidden');
  });
  const btn = document.querySelector('.archive-btn');
  if (btn) btn.style.display = 'none';
}
window.showMoreProjects = showMoreProjects;

// ======================
// Navbar scroll behavior
// ======================
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ======================
// Company Tabs (Experience section)
// ======================
const tabs = document.querySelectorAll('.company-list li');
const entries = document.querySelectorAll('.job-entry');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    entries.forEach(entry => entry.classList.remove('active'));
    tab.classList.add('active');
    const targetId = tab.getAttribute('data-target');
    document.getElementById(targetId)?.classList.add('active');
  });
});

// ======================
// Scroll indicator sound
// ======================
const scrollIndicator = document.getElementById("scroll-indicator");
if (scrollIndicator) {
  scrollIndicator.addEventListener("click", () => {
    const sound = document.getElementById("scroll-sound");
    if (sound) {
      sound.currentTime = 0;
      sound.play();
    }
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  });
}

// ======================
// Preloader
// ======================
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  const content = document.getElementById("site-wrapper");
  setTimeout(() => {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
      if (content) content.style.display = "block";
    }, 800);
  }, 1600);
});

// ======================
// Mobile Nav Toggle (with overlay/backdrop)
// ======================

function openMobileMenu() {
  document.getElementById('mobileMenu')?.classList.add('active');
  document.querySelector('.mobile-nav-backdrop')?.classList.add('active');
  document.body.style.overflow = "hidden";
}
function closeMobileMenu() {
  document.getElementById('mobileMenu')?.classList.remove('active');
  document.querySelector('.mobile-nav-backdrop')?.classList.remove('active');
  document.body.style.overflow = "";
}
window.toggleMobileMenu = function() {
  const menu = document.getElementById('mobileMenu');
  if (menu.classList.contains('active')) {
    closeMobileMenu();
  } else {
    openMobileMenu();
  }
}

// Backdrop click closes menu
const navBackdrop = document.querySelector('.mobile-nav-backdrop');
if (navBackdrop) {
  navBackdrop.addEventListener('click', closeMobileMenu);
}

// Auto-close mobile menu on link click + scroll to section
document.querySelectorAll('.mobile-nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId && targetId.startsWith('#')) {
      e.preventDefault();
      document.querySelector(targetId)?.scrollIntoView({ behavior: "smooth" });
      setTimeout(closeMobileMenu, 250);
    }
  });
});

// ======================
// Hero Text Animation
// ======================
window.addEventListener("DOMContentLoaded", () => {
  // Animate Hero Text
  const el = document.getElementById("animated-text");
  if (el) {
    const text = el.textContent.trim();
    const words = text.split(" ");
    el.innerHTML = "";
    words.forEach((word, i) => {
      const span = document.createElement("span");
      span.textContent = word + " ";
      span.style.animationDelay = `${i * 100}ms`;
      el.appendChild(span);
    });

    // reveal job status after animation
    const jobStatus = document.getElementById("jobStatus");
    setTimeout(() => {
      if (jobStatus) jobStatus.classList.add("visible");
    }, words.length * 100 + 500);
  }

  // Timeline intersection animations
  const timelineItems = document.querySelectorAll(".timeline-item");
  const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.6 });
  timelineItems.forEach((item) => timelineObserver.observe(item));

  // Section fade-in on scroll
  const sections = document.querySelectorAll(".scroll-section");
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      entry.target.classList.toggle("visible", entry.isIntersecting);
    });
  }, { threshold: 0.6 });
  sections.forEach(section => sectionObserver.observe(section));
});
