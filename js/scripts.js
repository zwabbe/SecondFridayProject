function macIphone(compPreferences, phonePreferences){
  
  return compPreferences + phonePreferences;
}
function macAndroid(compPreferences, phonePreferences){
  return compPreferences + phonePreferences;
}


//Globals //

const name = $('#inputName').val();
const age = $('#inputAge').val();
const preferedNoun = $("#inputNoun").val();
const compPreferences = parseInt($("input:radio[name=mac]:checked").val());
const phonePreferences = parseInt($("input:radio[name=iphoneOrAndroid]:checked").val());
let radioValCombined = (compPreferences + phonePreferences);


$(document).ready(function () {
  $("#submitButton").click(function () {
  const name = $('#inputName').val();
  const age = $('#inputAge').val();
  const preferedNoun = $("#inputNoun").val();
  const compPreferences = parseInt($("input:radio[name=mac]:checked").val());
  const phonePreferences = parseInt($("input:radio[name=iphoneOrAndroid]:checked").val());


    
    event.preventDefault();
  });
});