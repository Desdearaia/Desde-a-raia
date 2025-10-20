// --- MENÚ DESPREGABLE ---
const menuTrigger = document.querySelector('.menu-trigger');
const menuPanel = document.getElementById('menu-panel');

if (menuTrigger && menuPanel) {
  menuTrigger.addEventListener('click', () => {
    menuPanel.classList.toggle('active');
  });
}

// --- BUSCADOR ---
const searchInput = document.getElementById('search');
const articles = document.querySelectorAll('.news-item');

if (searchInput && articles.length) {
  searchInput.addEventListener('keyup', () => {
    const term = searchInput.value.toLowerCase();
    articles.forEach(article => {
      const text = article.innerText.toLowerCase();
      article.style.display = text.includes(term) ? '' : 'none';
    });
  });
}

// --- CABECEIRA INTELIXENTE ---
let lastScrollY = window.scrollY;
const header = document.querySelector('header');

if (header) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
      header.classList.add('hidden');
    } else {
      header.classList.remove('hidden');
    }
    lastScrollY = window.scrollY;
  });

  // reaparece cando o rato sobe á parte superior
  document.addEventListener('mousemove', (e) => {
    if (e.clientY < 50) {
      header.classList.remove('hidden');
    }
  });
}

// --- LOGO COMO BOTÓN AO INICIO ---
const logo = document.querySelector('.logo-link img.logo-img');
if (logo) {
  logo.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}

// --- FORMULARIO DE CONTACTO (mensaxe de confirmación con fade-in) ---
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Evita recarga ou abrir cliente de correo

    const formContainer = document.querySelector('.contacto .container');
    formContainer.innerHTML = `
      <div class="thank-you">
        <h1>Grazas pola túa mensaxe!</h1>
        <p>Recibímola correctamente e responderémosche axiña dende <strong>desdearaia@gmail.com</strong>.</p>
        <p><a href="index.html" style="color: var(--amarelo); text-decoration: underline;">Volver ao inicio</a></p>
      </div>
    `;

    // Activamos a clase para fade-in
    const thankYouDiv = formContainer.querySelector('.thank-you');
    setTimeout(() => {
      thankYouDiv.classList.add('show');
    }, 50); // tempo mínimo para que funcione a transición
  });
}


// --- MODAL IMAXE
document.addEventListener("DOMContentLoaded", () => {
  const featuredImg = document.getElementById('featured-img');
  const modal = document.getElementById('modal-img');
  const modalImg = modal.querySelector('img');

  if(featuredImg && modal && modalImg){
    featuredImg.addEventListener('click', () => {
      modal.style.display = 'flex';
      modalImg.src = featuredImg.src;
    });

    modal.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }
});
