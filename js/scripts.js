//scripts will go here.

document.getElementById("modal-btn").addEventListener("click", modalOpenFunction);

function modalOpenFunction() {
    var modal = document.getElementById("modal");
    modal.classList.add("modal--open");
}

document.getElementById("modal-close").addEventListener("click", modalCloseFunction);

function modalCloseFunction() {
    var modal = document.getElementById("modal");
    modal.classList.remove("modal--open");
}

document.getElementById("theme-btn").addEventListener("click", themeFunction);

function themeFunction() {
    var root = document.documentElement;
    root.style.setProperty('--primary-color', '#000000');
    root.style.setProperty('--secondary-color', '#FFFFFF');
    root.style.setProperty('opacity', '.5');
}

document.getElementById("paragraph-btn").addEventListener("click", paragraphFunction);

function paragraphFunction() {
    var description = document.getElementsByClassName("description")[0];
    var newParagraph = document.createElement("p");
    var paragraphText = document.createTextNode("Additional paragraph text");

    newParagraph.appendChild(paragraphText);
    description.appendChild(newParagraph);

    description.innerHTML = Date();
    description.innerHTML = "I just changed the text";
}

document.getElementById("cursor-btn").addEventListener("click", cursorFunction);

function cursorFunction() {
    document.body.style.cursor = "help";
}
