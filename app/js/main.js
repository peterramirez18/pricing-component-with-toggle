const toggle = document.querySelector(".toggle"),
    card = document.querySelector(".card"),
    card2 = document.querySelector(".purplemode"),
    card3 = document.querySelector(".card3");

toggle.addEventListener("click", () => {
    toggle.classList.toggle("left"),
    card.classList.toggle("annually"),
    card2.classList.toggle("annually"),
    card3.classList.toggle("annually");
});




