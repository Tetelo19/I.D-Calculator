document.getElementById('id-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const idInput = document.getElementById('id-input');
  const idNumber = idInput.value.trim();
  
  const age = calculateAge(idNumber);
  
  if (age !== null) {
    displayAge(age);
  } else {
    displayError();
  }
});

function calculateAge(idNumber) {

  const birthYear = parseInt(idNumber.substr(0, 4));
  const birthMonth = parseInt(idNumber.substr(4, 2));
  const birthDay = parseInt(idNumber.substr(6, 2));
  
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1; // Month is 0-indexed
  const currentDay = currentDate.getDate();
  
  let age = currentYear - birthYear;
  
  if (currentMonth < birthMonth || (currentMonth === birthMonth && currentDay < birthDay)) {
    age--;
  }
  
  return age;
}

function displayAge(age) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `Age: ${age}`;
}

function displayError() {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = 'Invalid ID number';
}
function removeId(button) {
    const idList = document.getElementById('id-list');
    idList.removeChild(button.parentElement);
  }