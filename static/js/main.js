// ============================
// Futuristic Particle Background
// ============================
const canvas = document.getElementById("background");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const particles = [];
const particleCount = 100;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 1;
        this.speedY = (Math.random() - 0.5) * 1;
        this.color = Math.random() > 0.5 ? "#00e5ff" : "#6a0dad";
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if(this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if(this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

// Initialize particles
for(let i=0; i<particleCount; i++) {
    particles.push(new Particle());
}

// Animate particles
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();

document.addEventListener('DOMContentLoaded', () => {
  // ============================
  // Hero Neon Pulse Effect
  // ============================
  const heroH1 = document.querySelector('.hero h1');
  let pulse = 0;
  if (heroH1) {
    setInterval(() => {
      pulse = pulse === 0 ? 1 : 0;
      heroH1.style.textShadow = pulse
        ? '0 0 20px #00e5ff, 0 0 30px #6a0dad, 0 0 40px #00e5ff'
        : '0 0 10px #fff, 0 0 20px #6a0dad, 0 0 30px #00e5ff';
    }, 1000);
  }

  // ============================
  // Hero Tagline Typing Effect
  // ============================
  const heroP = document.querySelector('.hero p');
  const tagline = 'Building the future of technology.';
  let typeIndex = 0;

  function typeWriter() {
    if (!heroP) return;
    if (typeIndex < tagline.length) {
      heroP.textContent += tagline.charAt(typeIndex);
      typeIndex++;
      setTimeout(typeWriter, 50);
    }
  }

  if (heroP) {
    heroP.textContent = '';
    typeWriter();
  }

  // ============================
  // CTA Button Glow Pulse
  // ============================
  const cta = document.querySelector('.cta-button');
  let glow = 0;
  if (cta) {
    setInterval(() => {
      glow = glow === 0 ? 1 : 0;
      cta.style.boxShadow = glow
        ? '0 0 15px #00e5ff, 0 0 25px #6a0dad'
        : '0 0 10px #00e5ff, 0 0 20px #6a0dad';
    }, 1200);
  }

  // ============================
  // Scroll Animations for Sections
  // ============================
  const sections = document.querySelectorAll('.section');
  if (sections.length) {
    const handleScroll = () => {
      const triggerBottom = window.innerHeight / 5 * 4;
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < triggerBottom) {
          section.classList.add('show');
        } else {
          section.classList.remove('show');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // trigger once on load
    handleScroll();
  }

  // ============================
  // Smooth Scroll & Active Link
  // ============================
  const navLinks = document.querySelectorAll('.navbar ul li a');

  if (navLinks.length) {
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (!href || !href.startsWith('#')) return;
        e.preventDefault();
        const targetId = href.substring(1);
        const targetSection = document.getElementById(targetId);
        if (!targetSection) return;
        window.scrollTo({
          top: targetSection.offsetTop - 70,
          behavior: 'smooth'
        });
      });
    });

    const handleActiveLink = () => {
      let current = '';
      const scrollPos = window.scrollY || window.pageYOffset;
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (scrollPos >= sectionTop) {
          current = section.getAttribute('id');
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href && href.substring(1) === current) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleActiveLink);
    // initial check
    handleActiveLink();
  }
});
