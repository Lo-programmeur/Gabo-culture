// Cibler tous les éléments de la galerie
document.querySelectorAll(".galerie img").forEach(img => {
  img.addEventListener("click", function () {
    document.getElementById("popupImage").src = this.src;
    document.getElementById("popup").style.display = "flex";
  });
});

// Fermer la fenêtre
document.getElementById("closeBtn").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});
