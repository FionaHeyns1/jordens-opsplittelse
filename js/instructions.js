console.log("loaded instructions");

document.querySelector("#proviant").addEventListener("click", proviant);

function proviant() {
  console.log("button is here");

  document.querySelector("#kokosnoed").classList.add("my_scale");
}

document.addEventListener("DOMContentLoaded", function () {
  const knap = document.getElementById("proviant");
  const kokosnoed = document.getElementById("kokosnoed");
  const overskrift_faktaboks = document.getElementById("overskrift_faktaboks");

  knap.addEventListener("click", function () {
    kokosnoed.classList.toggle("stor");

    if (kokosnoed.classList.contains("stor")) {
      overskrift_faktaboks.textContent = "FIND MAD";
    } else {
      overskrift_faktaboks.textContent = "Proviant";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const knap = document.getElementById("raab");
  const sos1 = document.getElementById("sos1");

  knap.addEventListener("click", function () {
    sos1.classList.toggle("stor");

    if (sos1.classList.contains("stor")) {
      overskrift_faktaboks.textContent = "UNDSLIP";
    } else {
      overskrift_faktaboks.textContent = "Et råb om hjælp";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const knap = document.getElementById("lejr");
  const trae_i_vand = document.getElementById("trae_i_vand");

  knap.addEventListener("click", function () {
    trae_i_vand.classList.toggle("stor");
  });
});
