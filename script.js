document.addEventListener("DOMContentLoaded", () => {
  // Menú despregable
  const menuTrigger = document.querySelector('.menu-trigger');
  const menuPanel = document.getElementById('menu-panel');
  if(menuTrigger && menuPanel){
    menuTrigger.addEventListener('click', () => {
      menuPanel.classList.toggle('active');
      menuTrigger.setAttribute('aria-expanded', menuPanel.classList.contains('active'));
    });
  }

  // Header intelixente
  let lastScrollY = window.scrollY;
  const header = document.querySelector('header');
  const SCROLL_THRESHOLD = 50;
  if(header){
    window.addEventListener('scroll', () => {
      if(window.scrollY > lastScrollY && window.scrollY > SCROLL_THRESHOLD){
        header.classList.add('hidden');
      } else {
        header.classList.remove('hidden');
      }
      lastScrollY = window.scrollY;
    });
    document.addEventListener('mousemove', e => {
      if(e.clientY < 50) header.classList.remove('hidden');
    });
  }

  // Modal imaxe
  const featuredImg = document.querySelector('.col-center .featured-image');
  const modal = document.getElementById('modal-img');
  if(featuredImg && modal){
    const modalImg = modal.querySelector('img');
    featuredImg.addEventListener('click', () => {
      modal.style.display = 'flex';
      modalImg.src = featuredImg.src;
    });
    modal.addEventListener('click', () => modal.style.display = 'none');
  }
});
