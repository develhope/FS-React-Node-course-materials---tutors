const button = document.querySelector(".btn")

button.addEventListener('click', () => {
    const body = document.querySelector("body");
    body.classList.toggle("theme");
});
