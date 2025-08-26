// Au clic
document.getElementById("toggleDarkMode").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
  localStorage.setItem("mode", document.body.classList.contains("dark-mode") ? "dark" : "light");
});

// Au chargement
window.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("mode") === "dark") {
    document.body.classList.add("dark-mode");
  }
});

const images = Array.from(document.querySelectorAll(".galerie img"));
let currentIndex = 0;

const popup = document.getElementById("popup");
const popupImage = document.getElementById("popupImage");

// Fonction pour afficher l'image
function showImage(index) {
  currentIndex = index;
  popupImage.src = images[currentIndex].src;
  popup.style.display = "flex";
}

// Clic sur une image
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    showImage(index);
  });
});

// Clic sur "Next"
document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

// Clic sur "Prev"
document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

// Clic sur "Close"
document.getElementById("closeBtn").addEventListener("click", () => {
  popup.style.display = "none";
  
});

const section = document.getElementById('animated-section');

section.style.opacity = 0;
section.style.transform = 'translateY(20px)';

window.addEventListener('load', () => {
  setTimeout(() => {
    section.style.transition = 'opacity 1s ease, transform 1s ease';
    section.style.opacity = 1;
    section.style.transform = 'translateY(0)';
  }, 300);
});

// détail des parcs

function toggleDetails(element) {
    element.classList.toggle("active");
}


