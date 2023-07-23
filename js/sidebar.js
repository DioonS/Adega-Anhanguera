document.addEventListener("DOMContentLoaded", function () {
    const sidebar = document.getElementById("sidebar");
    const button = document.querySelector(".centered-button");

    button.addEventListener("click", function () {
        sidebar.classList.toggle("reduced");
        button.classList.toggle("button-reduced");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const button = document.querySelector(".centered-button");

    button.addEventListener("click", function () {
        container.classList.toggle("reduced");
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".content-panel");
    const button = document.querySelector(".centered-button");

    button.addEventListener("click", function () {
        container.classList.toggle("reduced");
    });
});