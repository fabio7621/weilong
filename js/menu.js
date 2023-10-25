const menuButtonContainer = document.querySelector(".menu-button-container");
const hbText = document.getElementById("hb-text");
let isMenuOpen = false;

menuButtonContainer.addEventListener("click", () => {
  if (isMenuOpen) {
    hbText.textContent = "MENU";
  } else {
    hbText.textContent = "CLOSE";
  }

  isMenuOpen = !isMenuOpen;
});
