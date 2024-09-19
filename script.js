const changeButton = document.querySelector("#changeBtn");
const dynamicButton = document.querySelector("#dynBtn");
const h1 = document.querySelector("#world");

function change() {
    document.querySelector("#world").innerHTML="Goodbye World"
}

function dynamicChange() {
    if (h1.textContent === "Hello World") {
        h1.textContent = "Goodbye World";
    } else {
        h1.textContent = "Hello World"
    }
        
}
changeButton.addEventListener('click', change);
dynamicButton.addEventListener('click', dynamicChange);