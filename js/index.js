$(document).ready(function() {


  $("p").on("click", function() {
	$(".intro").toggleClass("ptroll");
  });

  $("img").on("click", function() {
  	$("img").toggleClass("imgTroll");
  });

  $('h1').on('mouseover', function() {
  $(this).animate({
    "letter-spacing": "10px",
    "font-size": "50px"
  }, 1000);

});

});