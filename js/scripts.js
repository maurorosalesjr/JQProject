//jQuery(document).ready(function() {
  //jQuery("h1").click(function() {
    //alert("This is a heading.");
    //alert("I told you, THIS IS A HEADING!");
  //});

  //jQuery("p").click(function() {
    //alert("This is a paragraph.");
  //});

  //jQuery("img").click(function() {
   //alert("This is an image.");
  //});
//});

$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });
});

$(document).ready(function() {
  $(".clickable2").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
  });
});

$(document).ready(function() {
  $(".clickhere").click(function() {
    $("#ghost-showing").fadeToggle();
    $("#ghost-hidden").fadeOut();
  });
});