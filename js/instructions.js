console.log("loaded instructions");

document.querySelector("#button_1").addEventListener("click", button_1);

function button_1() {
  console.log("Button is here");

  document.querySelector("#kokosnød").classList.add("my_scale");
}
