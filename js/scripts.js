$(document).ready(function () {
  $(".resultShow1").hide();
  $(".resultShow2").hide();
  $(".resultShow3").hide();
  $("form").submit(function (event) {
    event.preventDefault();
    const q1 = parseInt($("input:radio[name=q1]:checked").val());
    const q2 = parseInt($("input:radio[name=q2]:checked").val());
    const q3 = parseInt($("input:radio[name=q3]:checked").val());
    const q4 = parseInt($("input:radio[name=q4]:checked").val());
    const q5 = parseInt($("input:radio[name=q5]:checked").val());
    const someNameInput = $("input#inputName").val();
    let sumOfChoices = (q1 + q2 + q3 + q4 + q5);
    console.log(sumOfChoices); 
    if (sumOfChoices === 2 || sumOfChoices === 4) {
      $(".resultShow2").hide();
      $(".resultShow3").hide();
      $(".resultShow1").fadeIn(2000);
      $(".replacedName").text(someNameInput);
    }
    else if (sumOfChoices === 1 || sumOfChoices === 3) {
      $(".resultShow1").hide();
      $(".resultShow3").hide();
      $(".resultShow2").fadeIn(2000);
      $(".replacedName").text(someNameInput);
    }
    else if (sumOfChoices === 0) {
    $(".resultShow1").hide();
    $(".resultShow2").hide();
    $(".resultShow3").fadeIn(2000);
    $(".replacedName").text(someNameInput);
    }
    else !sumOfChoices;
    alert("Please make sure to answer every option and try again!");
    
  });
});