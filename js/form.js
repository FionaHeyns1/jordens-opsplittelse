const form = document.querySelector("form");
function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

const firstNameOutput = document.querySelector("#first_name_output");
const adresseOutput = document.querySelector("#adresse_output");
const telefonOutput = document.querySelector("#telefon_output");
const koonOutput = document.querySelector("#koon_output");
const cprOutput = document.querySelector("#cpr_output");
const dagOutput = document.querySelector("#dag_output");
const tingOutput = document.querySelector("#ressourcer_name_output");
const beskedOutput = document.querySelector("#beskrivelse_name_output");

function handleSubmit(event) {
  event.preventDefault();

  /* output i form - summary*/

  const formData = new FormData(form);

  const firstName = formData.get("first_name");

  const adresse = formData.get("adresse");

  const telefon = formData.get("telefon");

  const koon = formData.get("koon");

  const cpr = formData.get("cpr");

  const dag = formData.get("dag");

  const ting = formData.getAll("ting");
  console.log("hvad mon exposure er;", ting);

  const besked = formData.get("besked");

  /* værdier der skal over i mit output element*/
  firstNameOutput.textContent = firstName;

  adresseOutput.textContent = adresse;

  telefonOutput.textContent = telefon;

  koonOutput.textContent = koon;

  cprOutput.textContent = cpr;

  dagOutput.textContent = dag;

  tingOutput.textContent = ting.join(", ");

  beskedOutput.textContent = besked;

  /* fuktionaliteter*/
  function cancelPopup(event) {
    event.preventDefault();
    form.querySelector(":user-invalid").focus();
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
// supportYes.addEventListener("click", toggleOn);
// supportNo.addEventListener("click", toggleOff);
