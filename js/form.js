const form = document.querySelector("form");
function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

const firstNameOutput = document.querySelector("#first_name_output");

/* output i form - summary*/

const formData = new FormData(form);

const firstName = formData.get("first_name");

/* værdier der skal over i mit output element*/
firstNameOutput.textContent = firstName;

/* fuktionaliteter*/
function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  event.preventDefault();
}

form.reset();

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
