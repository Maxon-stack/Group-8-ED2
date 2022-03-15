let my_currentTab = 0;
var Individual_User = {
  Platoon: "",
  Rank: "",
  ArrivalDate: "",
  ArrivalTime: "",
  LosingInstallation: "",
  FirstName: "",
  LastName: "",
  GainingUnit: "",
  PhoneNumber: "",
  MOS: "",
  DODID: "",
  Email: "",
  FullSSN: "",
  Gender: "",
  POV: "",
  Gender: "",
  MaritalStatus: "",
  COVIDVaccinationStatus: "",
  Address: "",
  EmergencyName: "",
  EmergencyRelation: "",
  EmergencyAddress: "",
  EmergencyPhone: "",
  QuarantinePhone: "",
  QuarantineSignature: "",
  QuarantineName: "",
  

} 
function appOnSubmit(){
  console.log('---submit starting---')
  
}


function exitForm(){
  console.log("Exiting")
  var selectElements = document.getElementsByTagName('select');
  var inputElements = document.getElementsByTagName('input');
  for (var i=0; i < inputElements.length; i++) {
    if (inputElements[i].type == 'text'|| 'tel') {
      inputElements[i].value = '';
    }      
    if (inputElements[i].type == 'radio' || 'checkbox') {
      inputElements[i].checked = false;
    }
  }  
  for (var i=0; i < selectElements.length; i++) { 
    if (selectElements[i].type == 'text'|| 'tel') {
      selectElements[i].value = '';
    }     
  }
  window.location.href='https://maxon-stack.github.io/Group-8-ED2/';
}

function handlePlatoon(event){
  user_bio.Platoon = event.value
  //console.log(user_bio.Platoon)
}
function handleArrivalDate(event){

  user_bio.ArrivalDate = event.value
}
function handleArrivalTime(event){

  user_bio.ArrivalTime = event.value
}

function handleLosingInstallation(event){

  user_bio.LosingInstallation = event.value
}
function handleFirstName(event){

  user_bio.FirstName = event.value
}
function handleLastName(event){

  user_bio.LastName = event.value
}
function handleGainingUnit(event){

  user_bio.GainingUnit = event.value
}
function handlePhoneNumber(event){

  user_bio.PhoneNumber = event.value
}
function handleMOS(event){

  user_bio.MOS = event.value
}
function handleDODID(event){

  user_bio.DODID = event.value
}
function handleEmail(event){

  user_bio.Email = event.value
}
//encrypt ssn
function handleFullSSN(event){

  user_bio.FullSSN = event.value
}
function handleGender(event){

  user_bio.Gender = event.value
}
function handlePOV(event){

  user_bio.POV = event.value
}
function handleMaritalStatus(event){

  user_bio.MaritalStatus = event.value
}
function handleCOVIDVaccinationStatus(event){

  user_bio.COVIDVaccinationStatus = event.value
}
// ask sponsor how address will work
function handleAddress(event){

  user_bio.Address = event.value
}
function handleEmergencyName(event){

  user_bio.EmergencyName = event.value
}
function handleEmergencyRelation(event){
  user_bio.EmergencyRelation = event.value
}
function handleEmergencyAddress(event){
  user_bio.EmergencyAddress = event.value
}
function handleEmergencyPhone(event){
  user_bio.EmergencyPhone = event.value
}
function handleQuarantinePhone(event){
  user_bio.QuarantinePhone = event.value
}
function handleQuarantineSignature(event){
  user_bio.QuarantineSignature = event.value
}
function handleQuarantineName(event){
  user_bio.QuarantineName = event.value
}

function handleNextPage(){
  console.log(user_bio)
}
window.onload = function(){
  var currentTab = 0;
  showTab(currentTab);
}


function showTab(currentTab) {
  // This function will display the specified tab of the form...
  window.scrollTo(0,0);
  my_currentTab = currentTab
  var allTabs = document.getElementsByClassName("tab");
  console.log(allTabs)
  allTabs[currentTab].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (currentTab == 0) {
    document.getElementById("prevBtn").disabled = true;
  } else {
    document.getElementById("prevBtn").disabled = false;
  }
  if (currentTab == (allTabs.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
}

function nextPrev(n) {
  currentTab = my_currentTab
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  console.log(x)
  //if (n == 1 ) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    //document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}