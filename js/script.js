{
    const greetings = () => {
        console.log("Moja pierwsza wizytówka - miłej lektury ;)")
    }

    const toggleBackgroundColor = () => {
        const body = document.querySelector(".js-body");
        const buttonText = document.querySelector(".js-button-text");

        body.classList.toggle("lightBody");
        buttonText.innerText = body.classList.contains("lightBody") ? "dark" : "light";
    };

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener("click", toggleBackgroundColor);
        greetings();
    }

    init();
}
