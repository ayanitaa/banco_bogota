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