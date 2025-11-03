console.log("loaded instructions");

document.querySelector("#proviant").addEventListener("click", proviant);

function proviant() {
  console.log("button is here");

  document.querySelector("#kokosnoed").classList.add("my_scale");
}

document.addEventListener("DOMContentLoaded", function () {
  const knap = document.getElementById("proviant");
  const kokosnoed = document.getElementById("kokosnoed");

  knap.addEventListener("click", function () {
    kokosnoed.classList.toggle("stor");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const knap = document.getElementById("raab");
  const sos = document.getElementById("sos");

  knap.addEventListener("click", function () {
    sos.classList.toggle("stor");
  });
});
