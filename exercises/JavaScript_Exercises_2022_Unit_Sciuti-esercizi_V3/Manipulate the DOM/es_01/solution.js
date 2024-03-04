const addProduct = () => {
  const ul = document.querySelector("ul");
  const input = document.querySelector("input");

  const li = document.createElement("li");
  const checkbox = document.createElement("input");

  li.innerText = input.value;
  checkbox.setAttribute("type", "checkbox");

  ul.appendChild(li);
  li.appendChild(checkbox);
};

const makeItDark = () => {
  const body = document.querySelector("body");
  body.classList.toggle("theme");
};
