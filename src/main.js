// navigation code section
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
let isOpen = false;

menuBtn.addEventListener("click", () => {
  isOpen = !isOpen;

  // Toggle icon
  menuBtn.textContent = isOpen ? "✕" : "☰";

  // Toggle mobile menu classes for height and opacity
  if (isOpen) {
    mobileMenu.classList.remove("h-0", "overflow-hidden", "opacity-0");
    mobileMenu.classList.add("h-screen", "opacity-100");
  } else {
    mobileMenu.classList.remove("h-screen", "opacity-100");
    mobileMenu.classList.add("h-0", "overflow-hidden", "opacity-0");
  }
});
