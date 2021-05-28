/** @format */
// variabelen
const button = document.querySelectorAll("#Ulist li button");
const removeElement = document.getElementById("remove-first-item-button");

// function to make the li item on every click and append the animalName.
const onButtonClick = function (event) {
  const animalName = event.target.dataset.name;
  var li = document.createElement("li");
  li.setAttribute("class", "spotted-animals-list-item");
  const ul = document.getElementById("spotted-animals-list");
  ul.appendChild(li);
  li.innerHTML = animalName;
};
// forEach loop over the elements with attached eventListener,
// and function call on click
button.forEach((animal) => animal.addEventListener("click", (e) => onButtonClick(e)));

// Removing the li item from the ul parent

const removeMe = (event) => {
  const ul = document.getElementById("spotted-animals-list");
  ul.removeChild(ul.childNodes[0]);
};
// eventlistener for the button to remove the first element.
removeElement.addEventListener("click", (e) => removeMe(e));

// I chose here for an compacter solution, and chained everything. remove all elements at same time from list.
const removeAll = document.getElementById("remove-all-button").addEventListener("click", () => {
  const parent = document.getElementById("spotted-animals-list");
  while (parent.firstChild) {
    parent.removeChild(parent.lastChild);
  }
});
