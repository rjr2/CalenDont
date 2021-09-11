function toggleEventDisplay() {
    var myEvents = document.getElementById('event-cards');
    var eventDisplayButton = document.getElementById('event-display-button');
    var displaySetting = myEvents.style.display;

    if (displaySetting == 'block') {
      myEvents.style.display = 'none';
      eventDisplayButton.innerHTML = 'View Your Events';
    }
    else {
      myEvents.style.display = 'block';
      eventDisplayButton.innerHTML = 'Hide Your Events';
    }
  }

  function toggleEventForm() {
    var myForm = document.getElementById('event-form');
    var formDisplayButton = document.getElementById('form-display-button');
    var displaySetting = myForm.style.display;

    if (displaySetting == 'block') {
      myForm.style.display = 'none';
      formDisplayButton.innerHTML = 'Add New Event';
    }
    else {
      myForm.style.display = 'block';
      formDisplayButton.innerHTML = 'Nevermind!';
    }
  }

  function clearEventInput(){
    document.getElementById('addEventName').value = '';
    document.getElementById('addEventParticipant').value = '';
    document.getElementById('selectDateTime').value = '';
  }