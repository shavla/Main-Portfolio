function funcHome() {
  $(".home").css("display", "flex");
  $(".about").css("display", "none");
  $(".work").css("display", "none");
  $(".contact").css("display", "none");
}
function funcAbout() {
  $(".home").css("display", "none");
  $(".about").css("display", "inline");
  $(".work").css("display", "none");
  $(".contact").css("display", "none");
}

function funcWork() {
  $(".home").css("display", "none");
  $(".about").css("display", "none");
  $(".work").css("display", "inline");
  $(".contact").css("display", "none");
}
function funcContact() {
  $(".home").css("display", "none");
  $(".about").css("display", "none");
  $(".work").css("display", "none");
  $(".contact").css("display", "inline");
}

$(document).ready(() => { 
	$('.selected-element').addClass('animate'); 
});
