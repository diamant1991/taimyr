$('.hamburger-box').click(function(event) {
	var menu = $("#mobile-menu")
	if(menu.is(":hidden")){
		$(this).addClass('is-active');
		menu.show()
	}
	else{
		$(this).removeClass('is-active');
		menu.hide()
	}
});

$('.carousel').slick({
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: false
});