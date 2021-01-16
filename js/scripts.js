//Globals //

const name = $('#inputName').val();
const age = $('#inputAge').val();
const preferedProNoun = $("#inputProNoun").val();
const compPreferences = parseInt($("input:radio[name=compPref]:checked").val());
const phonePreferences = $("input:radio[name=phonePref]:checked").val();
const someNameInput = $("input#inputName").val();
const someAgeInput = $("input#inputAge").val();
const someProNounInput = $("input#inputProNoun").val();




function macIphone(compPreferences, phonePreferences) {
  const someNameInput = $("input#inputName").val();
  const someAgeInput = $("input#inputAge").val();
  const someProNounInput = $("input#inputProNoun").val();
  $(".PcDisplayInput").hide();
  $(".MacDisplayInput").fadeIn(2000);
  $(".replacedName").text(someNameInput);
  $(".replacedAge").text(someAgeInput);
  $(".replacedProNoun").text(someProNounInput);
  return macIphone;
}
function macAndroid(compPreferences, phonePreferences) {
  return alert("Not native to each other so some work arounds will have to be made.");
}
function pcIphone(compPreferences, phonePreferences) {
  return alert("Not native to each other so some work arounds will have to be made.");
}
function pcAndroid(compPreferences, phonePreferences) {
  const someNameInput = $("input#inputName").val();
  const someAgeInput = $("input#inputAge").val();
  const someProNounInput = $("input#inputProNoun").val();
  $(".MacDisplayInput").hide();
  $(".PcDisplayInput").fadeIn(2000);
  $(".replacedName").text(someNameInput);
  $(".replacedAge").text(someAgeInput);
  $(".replacedProNoun").text(someProNounInput);
    return pcAndroid;
}

$(document).ready(function () {
    $(".MacDisplayInput").hide();
    $(".PcDisplayInput").hide();
    $("#submitButton").click(function () {
    const compPreferences = parseInt($("input:radio[name=compPref]:checked").val());
    const phonePreferences = $("input:radio[name=phonePref]:checked").val();
    const sumOfChoices = (compPreferences + phonePreferences);
    const age = $('#inputAge').val();
    let result;
    if (sumOfChoices === "13") {
      result = macIphone(compPreferences, phonePreferences);
    }
    else if (sumOfChoices === "14") {
      result = macAndroid(compPreferences, phonePreferences);
    }
    if (sumOfChoices === "23") {
      result = pcIphone(compPreferences, phonePreferences);
    }
    else if (sumOfChoices === "24") {
      result = pcAndroid(compPreferences, phonePreferences);
    }
    event.preventDefault();
  });
});