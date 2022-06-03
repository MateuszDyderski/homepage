console.log("Witam serdecznie wszystkich developerów, którzy tutaj zaglądają");

let changeBackgroundButton = document.querySelector(".changeBackground");
let body = document.querySelector(".body");
let nextColorName = document.querySelector(".nextColorName")


changeBackgroundButton.addEventListener('click', () => {
    body.classList.toggle("greyBackground");
    nextColorName.innerText = body.classList.contains("greyBackground") ? "jasny" : "ciemny";

});