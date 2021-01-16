//Globals //

const name = $('#inputName').val();
const age = $('#inputAge').val();
const preferedNoun = $("#inputNoun").val();
const compPreferences = parseInt($("input:radio[name=mac]:checked").val());
const phonePreferences = parseInt($("input:radio[name=iphoneOrAndroid]:checked").val());
const someNameInput = $("input#inputName").val();
const someAgeInput = $("input#inputAge").val();
const somePronounInput = $("input#inputPronoun").val();






function macIphone(compPreferences, phonePreferences){
  const someNameInput = $("input#inputName").val();
  const someAgeInput = $("input#inputAge").val();
  const somePronounInput = $("input#inputPronoun").val();
  $(".replacedName").text(someNameInput);
  $(".replacedAge").text(someAgeInput);
  $(".replacedNoun").text(somePronounInput);
  $("#displayInput").show();
  alert("With those choices you should try Ruby and Swift!");
}
function macAndroid(compPreferences, phonePreferences){
  return alert("Not native to each other so some work arounds will have to be made.");
}
function pcIphone(compPreferences, phonePreferences){
  return alert("Not native to each other so some work arounds will have to be made.");
}
function pcAndroid(compPreferences, phonePreferences){
  const someNameInput = $("input#inputName").val();
  const someAgeInput = $("input#inputAge").val();
  const somePronounInput = $("input#inputPronoun").val();
  $(".replacedName").text(someNameInput);
  $(".replacedAge").text(someAgeInput);
  $(".replacedNoun").text(somePronounInput);
  alert("With those choices you should try Java and C#");
}


$(document).ready(function () {
  $("#submitButton").click(function () {
  const name = $('#inputName').val();
  const age = $('#inputAge').val();
  const preferedNoun = $("#inputNoun").val();
  const compPreferences = parseInt($("input:radio[name=compPref]:checked").val());
  const phonePreferences = $("input:radio[name=phonePref]:checked").val();
  const sumOfChoices = (compPreferences + phonePreferences);
  let result;
  if (sumOfChoices ==="13"){
    $()
    result= macIphone(compPreferences, phonePreferences);
  }
    else if (sumOfChoices==="14"){
    result= macAndroid(compPreferences, phonePreferences)
    }
    else if (sumOfChoices==="23"){
    result = pcIphone(compPreferences, phonePreferences);
    }
    else if (sumOfChoices==="24"){
    result = pcAndroid(compPreferences, phonePreferences);
  }
  
    
    event.preventDefault();
  });
});