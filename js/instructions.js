console.log("loaded instructions");

document.querySelector("#proviant").addEventListener("click", proviant);

function proviant() {
  console.log("button is here");

  document.querySelector("#kokosnoed").classList.add("my_scale");
}
