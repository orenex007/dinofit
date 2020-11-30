$(document).ready(function(){
	// toogle menu/navbar script 
	$(window).scroll(function(){
		if (this.scrollY > 20) {
			$(".navbar").addClass("sticky");
		}
		else{
			$(".navbar").removeClass("sticky");
		}
	});

	$(".menu-btn").click(function(){
		$(".navbar .menu").toggleClass("active")
		$(".menu-btn i").toggleClass("active");
	});

	var typed = new Typed(".typing-1", {
		strings: ["personal", "pair", "group"],
		typeSpeed: 100,
		backSpeed: 60,
		loop: true
	});

});