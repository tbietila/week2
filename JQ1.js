$(document).ready(function(){

  $("p").click(function(){
    $(".pic-hidden").toggle();
    $(".pic-show").toggle();
  });
jQuery("h1").click(function() {
  alert("This is a header.");
});

$("button#Hello").click(function(){
    $("ul").prepend("<li>Hello!</li>");
});


// jQuery("p").click(function() {
//   alert("This is a paragraph.");
// });

jQuery("#wal").click(function() {
  alert("This is an image.");
});
$("h2").click(function(){
  alert("Love you mean it..Tim Gunn");
});
$("li.1").click(function(){
    alert("Auf Wiedersehen");
});
$("li.2").dblclick(function(){
    alert("I'm not a fan");
});
$("li.3").click(function(){
    alert("I work for ELLE Magazine");
});
$("#heidi").click(function(){
  $("#heidi").fadeOut();

});

});
