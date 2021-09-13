const eventForm = document.getElementById('event-form');

eventForm
    .addEventListener('submit', (e) => {
        e.preventDefault();

    let eventName = document.getElementById('addEventName').value;
    let eventParticipant = document.getElementById('addEventParticipant').value.trim();
    let eventDateTime = document.getElementById('addDateTime').value

    const newEvent = {
        eventName,
        eventParticipant,
        eventDateTime,
    }

    fetch('http://localhost:3001/api/event', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEvent),
    })
        .then((res) => res.json())
        .then((data) => {
            alert(data.status);
            eventName = '';
            eventParticipant = '';
            eventDateTime = '';

        })
    })
    .catch((error) => {
        console.error('Error:', error);
    })