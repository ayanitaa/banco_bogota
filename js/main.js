const menuProductos = document.getElementById("menu-productos");
const megaMenuProductos = document.getElementById("megaMenuProductos");

// Mostrar inmediato
menuProductos.addEventListener("mouseenter", () => {
  megaMenuProductos.classList.add("active");
});

// Ocultar inmediato
menuProductos.addEventListener("mouseleave", () => {
  megaMenuProductos.classList.remove("active");
});

const carousel = new bootstrap.Carousel('#carouselBanco', {
  interval: 4000,
  ride: 'carousel',
  pause: false
});

const container = document.getElementById("cardsContainer");

function getCardStep() {
  const card = document.querySelector(".card-item");
  const gap = parseInt(getComputedStyle(container).gap) || 0;
  return card.offsetWidth + gap;
}

document.querySelector(".nav-btn.right").onclick = () => {
  const step = getCardStep();
  const maxScroll = container.scrollWidth - container.clientWidth;

  if (container.scrollLeft >= maxScroll - step) {
    container.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    container.scrollBy({ left: step, behavior: "smooth" });
  }
};

document.querySelector(".nav-btn.left").onclick = () => {
  const step = getCardStep();

  if (container.scrollLeft <= 0) {
    container.scrollTo({ left: container.scrollWidth, behavior: "smooth" });
  } else {
    container.scrollBy({ left: -step, behavior: "smooth" });
  }
};

const tabs = document.querySelectorAll('.tab');
const helpCards = document.querySelector('.help-cards');
const puntosContent = document.getElementById('puntos-content');

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {

    // activar estilo
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // mostrar contenido
    if (index === 0) {
      helpCards.style.display = 'grid';
      puntosContent.classList.remove('active');
    } else {
      helpCards.style.display = 'none';
      puntosContent.classList.add('active');
    }

  });
});