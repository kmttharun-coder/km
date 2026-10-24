// ===== Footer year =====
document.getElementById("year").textContent = new Date().getFullYear();

// ===== Typing animation =====
const phrases = [
  "AI & Data Science Student",
  "Machine Learning Enthusiast",
  "Data Explorer",
  "UI/UX Designer in the Making"
];
const typedEl = document.getElementById("typed");
let phraseIndex = 0;
let charIndex = 0;
let deleting = false;

function typeLoop() {
  const current = phrases[phraseIndex];

  if (!deleting) {
    typedEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeLoop, 1500);
      return;
    }
  } else {
    typedEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }
  setTimeout(typeLoop, deleting ? 50 : 90);
}
typeLoop();

// ===== Mobile menu =====
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.classList.toggle("open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close menu when a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

// ===== Highlight active nav link on scroll =====
const sections = document.querySelectorAll("section[id]");
const navAnchors = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) {
      current = section.getAttribute("id");
    }
  });
  navAnchors.forEach((a) => {
    a.classList.toggle("active", a.getAttribute("href") === `#${current}`);
  });
});

// ===== Scroll reveal and skill bars =====
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));
document.querySelectorAll(".skill-card").forEach((el) => revealObserver.observe(el));

// ===== Contact form (demo only) =====
const form = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.name.value.trim();

  // Replace this with a real backend or a service like Formspree / EmailJS
  formStatus.textContent = `Thanks, ${name}! Your message has been noted.`;
  form.reset();

  setTimeout(() => {
    formStatus.textContent = "";
  }, 4000);
});
