const appointmentsForm = document.getElementById("things-to-do");

appointmentsForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const studyInputField = document.getElementById("hours-of-study");
  const gymInputField = document.getElementById("gym");
  const pauseInputField = document.getElementById("moment-of-pause");
  const endInputField = document.getElementById("end-of-the-day");

  const thingstodo = {
    hoursofstudy: studyInputField.value,
    gym: gymInputField.value,
    momentofpause: pauseInputField.value,
    endoftheday: endInputField.value,
  };

  console.log("APPOINTMENT SAVED", thingstodo);

  const appointmentsCard = document.createElement("div");
  appointmentsCard.classList.add("appointments-card");

  appointmentsCard.innerHTML = `
    <p>${thingstodo.study} ${thingstodo.relax}</p>
    <p>${thingstodo.gymtime}</p>
    <p>${thingstodo.coffebrak}</p>
    <button onclick="deleteCard(event)">DELETE</button>
  `;

  const sectionForCards = document.getElementById("saved-appointments");
  sectionForCards.appendChild(appointmentsCard);
});

const deleteCard = function (e) {
  const clickedButton = e.target;
  console.log(clickedButton.parentElement);
  const reallyRemove = confirm("Vuoi davvero eliminare?");
  if (reallyRemove) {
    clickedButton.parentElement.remove();
  }
};
