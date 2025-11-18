const html = document.querySelector("html");
const toggle = document.querySelector("#toggle");

function toggleTheme() {
  html.classList.toggle("dark");
}

toggle.addEventListener("click", toggleTheme);
