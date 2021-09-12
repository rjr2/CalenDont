const addEventHandler = async (event) => {
    console.log("why tho?")
    event.preventDefault();
  
    const guest = document.querySelector('#addEventParticipant').value.trim();
    const Eventname = document.querySelector('#addEventName').value.trim();
    const schedule = document.querySelector('#addDateTime').value.trim();
  
    if (guest && Eventname && schedule) { 
    const response = await fetch('/api/event', {
        method: 'POST',
        body: JSON.stringify({ guest, Eventname, schedule }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        console.log("success")
        document.location.replace('/');
      } else {
        alert('Failed to add event.');
      }
    }
}
  
document
  .querySelector('.event-form')
  .addEventListener('submit', addEventHandler);
  

