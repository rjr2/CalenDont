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
      body: JSON.stringify({ guest, PlanName, schedule, creator}),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log("success")
      document.location.replace('/');
    } else {
      alert('Failed to add plan.');
    }
  }
};

const getPlanHandler = async (event) => {
  console.log('straight cheez boyz')
  event.preventDefault();

  const cardTitle1 = document.querySelector('#title1');
  const cardCreator = document.querySelector('#creator1');
  const cardGuest = document.querySelector('#guest1');
  const cardStatus = document.querySelector('#status1');


  if (cardTitle1 && cardCreator && cardGuest && cardStatus) {
    const response = await fetch('/api/plan', {
      method: 'GET',
      body: JSON.stringify({ cardTitle1, cardCreator, cardGuest, cardStatus }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      console.log("success")
      document.location.replace('/');
    } else {
      alert('Failed to show plan.');
    }
  }
};


document
  .querySelector('.plan-form')
  .addEventListener('submit', addPlanHandler, getPlanHandler);


