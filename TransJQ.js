$(document).ready(function() {
  $("button#PIR").click(function() {
    $("div#home").hide();
    $("#barker").show();
    $("img#bob").fadeIn();
    $("#bob").click(function() {
      $("h2").append("Don't forget to get your pets spayed and neutered");
    });
  });

  $("button#WOF").click(function() {
    $("div#home").hide();
    $("#Wheel").show();
    $("img#patVanna").fadeIn();
    $("#patVanna").click(function() {
      $(".wheelFormBlank").show();
      $("#blank form").submit(function(event){
        var blank = ["firstName", "lastName", "dob", "email", "favColor"];

        blank.forEach(function(blank) {
            var userInput = $("input#" + blank).val();
            $("." + blank).text(userInput);
          });

          $("#confirmation").show();

          event.preventDefault();
      });
    });
  });

$("button#PYR").click(function() {
  $("div#home").hide();
  $("img#dick").show();
  $("img#dick2").fadeIn();
  $("#bob").click(function() {
    $("h2").append("Don't forget to get your pets spayed and neutered");
    });
  });
});
