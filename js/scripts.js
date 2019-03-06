//scripts will go here.
document.getElementById("cursor-btn").addEventListener("click", cursorFunction);

function cursorFunction() {
	document.body.style.cursor = "wait";
}

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
	root.style.setProperty('--primary-color', "#000000");
	root.style.setProperty('--secondary-color', "#FFFFFF");
}

document.getElementById("paragraph-btn").addEventListener("click", paragraphFunction);

function paragraphFunction() {
	var description = document.getElementsByClassName("description")[0];
	var newParagraph = document.createElement("p");
	var paragraphText = document.createTextNode("Here is the new text for the paragraph");
	newParagraph.appendChild(paragraphText);
	description.appendChild(newParagraph);
}
