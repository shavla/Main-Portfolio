function funcHome() {
  $(".home").css("display", "flex");
  $(".about").css("display", "none");
  $(".work").css("display", "none");
  $(".contact").css("display", "none");
}
function funcAbout() {
  $(".home").css("display", "none");
  $(".about").css("display", "flex");
  $(".work").css("display", "none");
  $(".contact").css("display", "none");
}

function funcWork() {
  $(".home").css("display", "none");
  $(".about").css("display", "none");
  $(".work").css("display", "flex");
  $(".contact").css("display", "none");
}
function funcContact() {
  $(".home").css("display", "none");
  $(".about").css("display", "none");
  $(".work").css("display", "none");
  $(".contact").css("display", "flex");
}

$(document).ready(() => { 
	$('.selected-element').addClass('animate'); 
});
