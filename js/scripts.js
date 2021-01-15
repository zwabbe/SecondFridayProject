$(document).ready(function(){
  
  
  $("#submitButton").click(function(){
      const compPreferences = $("input:radio[name=compPref]:checked").val();
      const phonePreferences = $("input:radio[name=phonePref]:checked").val();
      const name = $('#inputName').val();
      const age = $('#inputAge').val();
      const preferedNoun = $("#inputNoun").val();
    
      
      alert(name);
      alert(age);
      alert(preferedNoun);
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