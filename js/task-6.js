function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const numberInput = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const output = document.querySelector("#boxes");

function createBoxes(amount) {
    output.innerHTML = "";
    let boxSize = 30;
    let newBoxes = [];
    for (let i = 1; i <= amount; i++) {
        const newBox = `<div style="width: ${boxSize}px; height: ${boxSize}px; background-color: ${getRandomHexColor()}"></div>`;
        boxSize += i * 10;
        newBoxes.push(newBox);
    }
    output.innerHTML = newBoxes.join("");
}

function destroyBoxes() {
    output.innerHTML = "";
}

createBtn.addEventListener("click", () => {
    const amount = parseInt(numberInput.value);
    if (
        amount >= Number(numberInput.min) &&
        amount <= Number(numberInput.max)
    ) {
        createBoxes(amount);
        numberInput.value = "";
    }
    else {
      numberInput.value = "";
      output.innerHTML = "";
  }
});

destroyBtn.addEventListener("click", destroyBoxes);
