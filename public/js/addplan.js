const addPlanHandler = async (event) => {
  console.log("why tho?")
  event.preventDefault();

  const guest = document.querySelector('#addPlanParticipant').value.trim();
  const PlanName = document.querySelector('#addPlanName').value.trim();
  const schedule = document.querySelector('#addDateTime').value.trim();
  const creator = document.querySelector('#addCreator').value.trim();

  if (guest && PlanName && schedule && creator) {
    const response = await fetch('/api/plan', {
      method: 'POST',
      body: JSON.stringify({ guest, PlanName, schedule, creator }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log("success")
      document.location.replace('/');
    } else {
      alert('Failed to add plan.');
    }
  }
}

document
  .querySelector('.plan-form')
  .addEventListener('submit', addPlanHandler);


