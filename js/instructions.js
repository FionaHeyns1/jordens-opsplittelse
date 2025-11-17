console.log("loaded instructions");

const knap_proviant = document.getElementById("proviant");
const knap_raab = document.getElementById("raab");
const knap_lejr = document.getElementById("lejr");
const knap_reset = document.getElementById("reset");
const kokosnoed = document.getElementById("kokosnoed");
const sos1 = document.getElementById("sos1");
const trae_i_vand = document.getElementById("trae_i_vand");
const reset = document.getElementById("reset");

document.addEventListener("DOMContentLoaded", start);

function start() {
  console.log("start");
  knap_proviant.addEventListener("click", storNoed);
  knap_raab.addEventListener("click", storsos1);
  knap_lejr.addEventListener("click", storlejr);
  knap_reset.addEventListener("click", reset_site);
}

function storNoed() {
  console.log("storNoed");
  kokosnoed.classList.toggle("stor");

  if (kokosnoed.classList.contains("stor")) {
    overskrift_faktaboks.textContent = "FIND MAD";
  } else {
    overskrift_faktaboks.textContent = "OVERLEVELSES GUIDE";
  }

  if (kokosnoed.classList.contains("stor")) {
    placeholder.textContent = "Info";
  } else {
    placeholder.textContent =
      "Jorden som vi kender den, er ødelagt! Et ENORMT jordskælv, har rykket de tektoniske plader i små stykker, og har nu efterladt menneskeheden, fordelt over flere tusinder af små øer. Her får du de mest nødvendige tips, sådan at du kan sikre din egen overlevelse, i forfærdelige situation.";
  }
}

function storsos1() {
  console.log("storsos1");
  sos1.classList.toggle("stor");

  if (sos1.classList.contains("stor")) {
    overskrift_faktaboks.textContent = "UNDSLIP";
  } else {
    overskrift_faktaboks.textContent = "OVERLEVELSES GUIDE";
  }

  if (sos1.classList.contains("stor")) {
    placeholder.textContent = "Info";
  } else {
    placeholder.textContent =
      "Jorden som vi kender den, er ødelagt! Et ENORMT jordskælv, har rykket de tektoniske plader i små stykker, og har nu efterladt menneskeheden, fordelt over flere tusinder af små øer. Her får du de mest nødvendige tips, sådan at du kan sikre din egen overlevelse, i forfærdelige situation.";
  }
}

function storlejr() {
  console.log("storlejr");
  trae_i_vand.classList.toggle("stor");

  if (trae_i_vand.classList.contains("stor")) {
    overskrift_faktaboks.textContent = "LAV EN LEJR";
  } else {
    overskrift_faktaboks.textContent = "OVERLEVELSES GUIDE";
  }

  if (trae_i_vand.classList.contains("stor")) {
    placeholder.textContent = "Info";
  } else {
    placeholder.textContent =
      "Jorden som vi kender den, er ødelagt! Et ENORMT jordskælv, har rykket de tektoniske plader i små stykker, og har nu efterladt menneskeheden, fordelt over flere tusinder af små øer. Her får du de mest nødvendige tips, sådan at du kan sikre din egen overlevelse, i forfærdelige situation.";
  }
}

function reset_site() {
  console.log("reset_site");
  trae_i_vand.classList.remove("stor");
  sos1.classList.remove("stor");
  kokosnoed.classList.remove("stor");
}

// document.querySelector("#proviant").addEventListener("click", proviant);

// function proviant() {
//   console.log("button is here");

//   document.querySelector("#kokosnoed").classList.add("my_scale");
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const knap = document.getElementById("proviant");
//   const kokosnoed = document.getElementById("kokosnoed");
//   const overskrift_faktaboks = document.getElementById("overskrift_faktaboks");

//   knap.addEventListener("click", function () {
//     kokosnoed.classList.toggle("stor");

//     if (kokosnoed.classList.contains("stor")) {
//       overskrift_faktaboks.textContent = "FIND MAD";
//     } else {
//       overskrift_faktaboks.textContent = "OVERLEVELSES GUIDE";
//     }

//     if (kokosnoed.classList.contains("stor")) {
//       placeholder.textContent = "Info";
//     } else {
//       placeholder.textContent =
//         "Jorden som vi kender den, er ødelagt! Et ENORMT jordskælv, har rykket de tektoniske plader i små stykker, og har nu efterladt menneskeheden, fordelt over flere tusinder af små øer. Her får du de mest nødvendige tips, sådan at du kan sikre din egen overlevelse, i forfærdelige situation.";
//     }
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   const knap = document.getElementById("raab");
//   const sos1 = document.getElementById("sos1");

//   knap.addEventListener("click", function () {
//     sos1.classList.toggle("stor");

//     if (sos1.classList.contains("stor")) {
//       overskrift_faktaboks.textContent = "UNDSLIP";
//     } else {
//       overskrift_faktaboks.textContent = "OVERLEVELSES GUIDE";
//     }

//     if (sos1.classList.contains("stor")) {
//       placeholder.textContent = "Info";
//     } else {
//       placeholder.textContent =
//         "Jorden som vi kender den, er ødelagt! Et ENORMT jordskælv, har rykket de tektoniske plader i små stykker, og har nu efterladt menneskeheden, fordelt over flere tusinder af små øer. Her får du de mest nødvendige tips, sådan at du kan sikre din egen overlevelse, i forfærdelige situation.";
//     }
//   });
// });

// document.addEventListener("DOMContentLoaded"),
//   function () {
//     const knap = document.getElementById("reset");
//   };

// document.addEventListener("DOMContentLoaded", function () {
//   const knap = document.getElementById("lejr");
//   const trae_i_vand = document.getElementById("trae_i_vand");

//   knap.addEventListener("click", function () {
//     trae_i_vand.classList.toggle("stor");

//     if (trae_i_vand.classList.contains("stor")) {
//       overskrift_faktaboks.textContent = "LAV EN LEJR";
//     } else {
//       overskrift_faktaboks.textContent = "OVERLEVELSES GUIDE";
//     }

//     if (trae_i_vand.classList.contains("stor")) {
//       placeholder.textContent = "Info";
//     } else {
//       placeholder.textContent =
//         "Jorden som vi kender den, er ødelagt! Et ENORMT jordskælv, har rykket de tektoniske plader i små stykker, og har nu efterladt menneskeheden, fordelt over flere tusinder af små øer. Her får du de mest nødvendige tips, sådan at du kan sikre din egen overlevelse, i forfærdelige situation.";
//     }
//   });
// });
