function buttonChoices(compPreferences, phonePreferences){
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
  const compPreferences = parseInt($("input:radio[name=compPref]:checked").val());
  const phonePreferences = $("input:radio[name=phonePref]:checked").val();
  const sumOfChoices = (compPreferences + phonePreferences);
  if (sumOfChoices ==="13"){
    alert("Mac/iPhone")
  }
  if (sumOfChoices==="14"){
    alert("Mac/Android ");
  }
  if (sumOfChoices==="23"){
    alert("PC/iPhone");
  }
  if (sumOfChoices==="24"){
    alert("PC/Android");
  }
  
    
    event.preventDefault();
  });
});