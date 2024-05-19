const inputtedName = document.querySelector("#name-input");
const showedName = document.querySelector("#name-output");

inputtedName.addEventListener("input", () => {
    if (inputtedName.value.trim() === "") {
        showedName.textContent = "Anonymous";
    } else showedName.textContent = inputtedName.value.trim();
});
