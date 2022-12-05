console.log("Moja pierwsza wizytówka - miłej lektury ;)")

let button = document.querySelector(".js-button");
let body = document.querySelector(".body");
let buttonText = document.querySelector(".js-button-text");

button.addEventListener("click", () => {
    body.classList.toggle("lightBody");
    buttonText.innerText = body.classList.contains("lightBody") ? "dark" : "light";
});
