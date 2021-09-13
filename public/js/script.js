function togglePlanDisplay() {
    var myPlans = document.getElementById('plan-cards');
    var planDisplayButton = document.getElementById('plan-display-button');
    var displaySetting = myPlans.style.display;

    if (displaySetting == 'block') {
      myPlans.style.display = 'none';
      planDisplayButton.innerHTML = 'View Your Plans';
    }
    else {
      myPlans.style.display = 'block';
      planDisplayButton.innerHTML = 'Hide Your Plans';
    }
  }

  function togglePlanForm() {
    var myForm = document.getElementById('plan-form');
    var formDisplayButton = document.getElementById('form-display-button');
    var displaySetting = myForm.style.display;

    if (displaySetting == 'block') {
      myForm.style.display = 'none';
      formDisplayButton.innerHTML = 'Add New Plan';
    }
    else {
      myForm.style.display = 'block';
      formDisplayButton.innerHTML = 'Nevermind!';
    }
  }

  function clearPlanInput(){
    document.getElementById('addPlanName').value = '';
    document.getElementById('addPlanParticipant').value = '';
    document.getElementById('selectDateTime').value = '';
  }