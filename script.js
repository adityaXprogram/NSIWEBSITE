document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileMenu");

  toggle.addEventListener("click", function () {
    toggle.classList.toggle("active");
    menu.classList.toggle("active");
  });
});


function redirectToWhatsApp() {
  const phoneNumber = "919508351876";
  const message = "Hello, I want to book a free consultation for my child at NSI.";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, "_blank");
}

document.getElementById("btn2hro").addEventListener("click", redirectToWhatsApp);
document.getElementById("btn2").addEventListener("click", redirectToWhatsApp);

document.addEventListener('contextmenu', event => event.preventDefault());