$('.hamburger-box').click(function(event) {
	$(this).toggleClass('is-active');
});

$('.carousel').slick({
  arrows: false,
  dots: true,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: false
});