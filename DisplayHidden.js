document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".container");
    const content = document.querySelector(".content");
    const toggleButton = document.getElementById("toggleButton");

    toggleButton.addEventListener("click", function () {
        content.classList.toggle("expanded");
    });
});
