// // Site loading sequence

$( document ).ready(function() {
  $('.title .on').delay(10).fadeTo(1300,1);
  $('.title .being').delay(500).fadeTo(1300,1);
  $('.title .white').delay(1000).fadeTo(1300,1);
  $('.title_secondary').delay(2500).fadeTo(1300,1);
  $('.essay_line').addClass("active");
  $('.essay_line').delay(3500).fadeTo(500,1);
  $('.essay_content').delay(3500).fadeTo(1300,1);
});
