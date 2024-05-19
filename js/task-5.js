function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorStatus = document.querySelector(".color")
const colorChangeBtn = document.querySelector(".change-color")

colorChangeBtn.addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = getRandomHexColor();
  colorStatus.textContent = getRandomHexColor();
})