import $ from 'jquery';

// Back to top button
$(window).scroll(function () {
  if ($(this).scrollTop() > 300) {
    $(".back-to-top").fadeIn("slow");
  } else {
    $(".back-to-top").fadeOut("slow");
  }
});
$(".back-to-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 200);
  return false;
});

$(window).scroll(function() {
	if ($(this).scrollTop() > 72) {
		$(".main-navbar-wrapper").addClass("fixed");
	} else {
		$(".main-navbar-wrapper").removeClass("fixed");
	}
});

$(document).on("click", function(e) {
    if (
        $(window).innerWidth() < 992 &&
        !$(e.target).is("#slide-toggle, #slide-toggle .fas")
    ) {
        $("body").removeClass("nav-slide-open");
    }
});