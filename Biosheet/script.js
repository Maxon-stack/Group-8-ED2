MYURL = ""
var UserInputs = {
  platoon: "",
  rank: "",
  arrival_date: "",
  DODID: "",
  first_name: "",
  last_name: "",
  MOS: "",
  ASI: "",
  gaining_unit: "",
  SSN: "",
  date_of_birth: "",
  place_of_birth: "",
  gender: "",
  security_clearence: "",
  BASD: "",
  DOR: "",
  ETS: "",
  marital_status: "",
  home_of_record: "",
  blood_type: "",
  glasses: "",
  inserts: "",
  color_blind: "",
  covid_vaccine: "",
  personal_email: "",
  army_email: "",
  street_address: "",
  address_line_2: "",
  city: "",
  state: "",
  zip: "",
  phone_number: "",
  emergency_name: "",
  emergency_phone_number: "",
  emergency_relation: "",
  emergency_email: "",
  emergency_street_address: "",
  emergency_address_line_2: "",
  emergency_city: "",
  emergency_state: "",
  emergency_zip: "",
  bh_Stigma: {
    q_one: "",
    q_two: [],
    q_three: [],
    q_four: [],
    q_five: [],
    q_six: "",
    q_seven: "",
    q_eight: "",
    q_nine: "",
    q_ten: "",
  }
}
function appOnSubmit(event) {
  //event.preventDefault();
  console.log('---submit starting---')
  console.log(UserInputs)
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://in-processing-api.herokuapp.com/submit');
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.send(JSON.stringify(UserInputs));
  xhr.onload = function () {
    alert(`Loaded: ${xhr.status} ${xhr.response}`);
    window.location.href = "../index.html";
  };
  xhr.onerror = function () { // only triggers if the request couldn't be made at all
    alert(`Failed to send user inputs`);
  };
}
//clearing all inputs
function exitForm() {
  console.log("Exiting")
  var selectElements = document.getElementsByTagName('select');
  var inputElements = document.getElementsByTagName('input');
  for (var i = 0; i < inputElements.length; i++) {
    if (inputElements[i].type == 'text' || 'tel') {
      inputElements[i].value = '';
    }
    if (inputElements[i].type == 'radio' || 'checkbox') {
      inputElements[i].checked = false;
    }
  }
  for (var i = 0; i < selectElements.length; i++) {
    if (selectElements[i].type == 'text' || 'tel') {
      selectElements[i].value = '';
    }
  }
  window.location.href = 'https://www.xviii.rf.gd/';
}
function handlePlatoon(event) {
  UserInputs.platoon = event.value
}
function handleGainingUnit(event) {
  UserInputs.gaining_unit = event.value
}
function handleDODID(event) {
  UserInputs.DODID = event.value
}
function handleSSN(event) {
  UserInputs.SSN = event.value
}
function handleFirstName(event) {
  UserInputs.first_name = event.value
}
function handleLastName(event) {
  UserInputs.last_name = event.value
}
function handleRank(event) {
  UserInputs.rank = event.value
}
function handleMOS(event) {
  UserInputs.MOS = event.value
}
function handleASI(event) {
  UserInputs.ASI = event.value
}
function handleBirthday(event) {
  UserInputs.date_of_birth = event.value
}
function handlePlaceOfBirth(event) {
  UserInputs.place_of_birth = event.value
}

function handleGender(event) {
  UserInputs.gender = event.value
}
function handleHomeOfRecord(event) {
  UserInputs.home_of_record = event.value
}
function handleETS(event) {
  UserInputs.ETS = event.value
}
function handleSecurityClearance(event) {
  UserInputs.security_clearence = event.value
}
function handleBASD(event) {
  UserInputs.BASD = event.value
}
function handleDOR(event) {
  UserInputs.DOR = event.value
}
function handleMaritalStatus(event) {
  UserInputs.marital_status = event.value
}
function handleBloodType(event) {
  UserInputs.blood_type = event.value
}
function handleGlasses(event) {
  UserInputs.glasses = event.value
}
function handleInserts(event) {
  UserInputs.inserts = event.value
}
function handleColorBlind(event) {
  UserInputs.color_blind = event.value
}
function handleCOVID(event) {
  UserInputs.covid_vaccine = event.value
}
function handlePhoneNumber(event) {
  UserInputs.phone_number = event.value
}
function handlePersonalEmail(event) {
  UserInputs.personal_email = event.value
}
function handleArmyEmail(event) {
  UserInputs.army_email = event.value
}
function handleStreet(event) {
  UserInputs.street_address = event.value
}
function handleStreetTwo(event) {
  UserInputs.address_line_2 = event.value
}
function handleCity(event) {
  UserInputs.city = event.value
}
function handleState(event) {
  UserInputs.state = event.value
}
function handleZip(event) {
  UserInputs.zip = event.value
}
function handleEmergencyName(event) {
  UserInputs.emergency_name = event.value
}
function handleEmergencyRelation(event) {
  UserInputs.emergency_relation = event.value
}
function handleEmergencyPhone(event) {
  UserInputs.emergency_phone_number = event.value
}
function handleEmergencyEmail(event) {
  UserInputs.emergency_email = event.value
}
function handleEmergencyStreetOne(event) {
  UserInputs.emergency_street_address = event.value
}
function handleEmergencyStreetTwo(event) {
  UserInputs.emergency_address_line_2 = event.value
}
function handleEmergencyCity(event) {
  UserInputs.emergency_city = event.value
}
function handleEmergencyState(event) {
  UserInputs.emergency_state = event.value
}
function handleEmergencyZip(event) {
  UserInputs.emergency_zip = event.value
}
function handleArrivalDate(event) {
  UserInputs.arrival_date = event.value
}
function handleNextPage() {
  console.log(UserInputs)
}
/*
The following code is for the form validation and is used to decide which form the user is on and displays the correct form.
*/
var form = document.getElementById("Bio-Form");
form.addEventListener('submit', handleNextFromBio);
function handleNextFromBio(event) {
  event.preventDefault();
  document.getElementById('Bio-Form').style.display = 'none';
  document.getElementById('Memo-Form').style.display = 'block';
  window.scrollTo(0, 0);
}

var form = document.getElementById("Memo-Form");
form.addEventListener('submit', handleNextFromMemo);
function handleNextFromMemo(event) {
  event.preventDefault();
  document.getElementById('Memo-Form').style.display = 'none';
  document.getElementById('BH-Form').style.display = 'block';
  window.scrollTo(0, 0);
}
function HandleReturnToBio() {
  document.getElementById('Bio-Form').style.display = 'block';
  document.getElementById('Memo-Form').style.display = 'none';
  window.scrollTo(0, 0);
}
function HandleReturnToMemo() {
  document.getElementById('Memo-Form').style.display = 'block';
  document.getElementById('BH-Form').style.display = 'none';
  window.scrollTo(0, 0);
}
var form = document.getElementById("BH-Form");
form.addEventListener('submit', handleSubmitForm);
function handleSubmitForm(event) {
  event.preventDefault();
  console.log(UserInputs)
  getValueOfOne();
  getChecksFromTwo();
  getChecksFromThree();
  getChecksFromFour();
  getValueOfFive();
  getValueOfSix();
  getValueOfSeven();
  getValueOfEight();
  getValueOfNine();
  getValueOfTen();
  appOnSubmit();
}
function getValueOfOne() {
  var questionOne = document.getElementsByName('Q1');
  for (var i = 0; i < questionOne.length; i++) {
    if (questionOne[i].checked) {
      UserInputs.bh_Stigma.q_one = questionOne[i].value
      break
    }
  }
}
function getChecksFromTwo() {
  questionTwo = document.getElementsByClassName('questionTwo');
  for (var i = 0; i < questionTwo.length; i++) {
    if (questionTwo[i].checked) {
      value = questionTwo[i].nextElementSibling.innerHTML
      UserInputs.bh_Stigma.q_two.push(value)
    }
  }
}
function getChecksFromThree() {
  questionThree = document.getElementsByClassName('questionThree');
  for (var i = 0; i < questionThree.length; i++) {
    if (questionThree[i].checked) {
      value = questionThree[i].nextElementSibling.innerHTML
      UserInputs.bh_Stigma.q_three.push(value)
    }
  }
}
function getChecksFromFour() {
  questionFour = document.getElementsByClassName('questionFour');
  for (var i = 0; i < questionFour.length; i++) {
    if (questionFour[i].checked) {
      value = questionFour[i].nextElementSibling.innerHTML
      UserInputs.bh_Stigma.q_four.push(value)
    }
  }
}
function getValueOfFive() {
  var questionFive = document.getElementsByName('Q_Five');
  for (var i = 0; i < questionFive.length; i++) {
    if (questionFive[i].checked) {
      UserInputs.bh_Stigma.q_five = questionFive[i].value
      break
    }
  }
}
function getValueOfSix() {
  var questionSix = document.getElementsByName('Q_Six');
  for (var i = 0; i < questionSix.length; i++) {
    if (questionSix[i].checked) {
      UserInputs.bh_Stigma.q_six = questionSix[i].value
      break
    }
  }
}
function getValueOfSeven() {
  var questionSeven = document.getElementsByName('Q_Seven');
  for (var i = 0; i < questionSeven.length; i++) {
    if (questionSeven[i].checked) {
      UserInputs.bh_Stigma.q_seven = questionSeven[i].value
      break
    }
  }
}
function getValueOfEight() {
  var questionEight = document.getElementsByName('Q_Eight');
  for (var i = 0; i < questionEight.length; i++) {
    if (questionEight[i].checked) {
      UserInputs.bh_Stigma.q_eight = questionEight[i].value
      break
    }
  }
}
function getValueOfNine() {
  var questionNine = document.getElementsByName('Q_Nine');
  for (var i = 0; i < questionNine.length; i++) {
    if (questionNine[i].checked) {
      UserInputs.bh_Stigma.q_nine = questionNine[i].value
      break
    }
  }
}
function getValueOfTen() {
  var questionTen = document.getElementsByName('Q_Ten');
  for (var i = 0; i < questionTen.length; i++) {
    if (questionTen[i].checked) {
      UserInputs.bh_Stigma.q_ten = questionTen[i].value
      break
    }
  }
}
