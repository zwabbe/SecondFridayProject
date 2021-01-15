function macIphone(compPreferences, phonePreferences) {
  return compPreferences + phonePreferences;
}
function macAndroid(compPreferences, phonePreferences) {
  return compPreferences + phonePreferences;
}
function pcIphone(compPreferences, phonePreferences) {
  return compPreferences + phonePreferences;
}
function pcAndroid(compPreferences, phonePreferences) {
  return compPreferences + phonePreferences;
}


//Globals //

const name = $('#inputName').val();
const age = $('#inputAge').val();
const preferedNoun = $("#inputNoun").val();
const compPreferences = $("input:radio[name=MacOrPC]:checked").val();
const phonePreferences = $("input:radio[name=iphoneOrAndroid]:checked").val();



$(document).ready(function () {
  $("#submitButton").click(function () {
    const name = $('#inputName').val();
    const age = $('#inputAge').val();
    const preferedNoun = $("#inputNoun").val();
    const compPreferences = $("input:radio[name=compPref]:checked").val();
    const phonePreferences = $("input:radio[name=phonePref]:checked").val();
    alert(compPreferences);
    alert(phonePreferences);


    
    event.preventDefault();
  });
});


/*function moveBox() {
    $(".tree").animate({
      "top": 20,
      "left": 20
    });
  }*/