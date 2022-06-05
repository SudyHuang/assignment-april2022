const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const nav = document.querySelector("nav");

menu.addEventListener("click", () => {
   nav.classList.add("open-nav");
});

close.addEventListener("click", () => {
   nav.classList.remove("open-nav");
});

function addItem() {
   const value = document.querySelector("[data-item]").value;
   const ul = document.querySelector("[data-list]");
   const li = document.createElement("li");
   li.innerHTML = value;
   ul.appendChild(li);
}
