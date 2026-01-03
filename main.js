
const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkBtn.innerText = "☀ Light";
    } else {
        darkBtn.innerText = "🌙 Dark";
    }
});


const searchInput = document.querySelector("#SearchBar input");
const cards = document.querySelectorAll(".Card");

searchInput.addEventListener("keyup", () => {
    const value = searchInput.value.toLowerCase();

    cards.forEach(card => {
        const text = card.innerText.toLowerCase();
        card.style.display = text.includes(value) ? "block" : "none";
    });
});
