$(document).ready(() => {
	$(".fixed-left >button").click(() =>{
		$(".fixed-left >nav").slideToggle();
	});

	anime({
		targets: ".load-page svg g path",
		strokeDashoffset: [anime.setDashoffset,0],
		duration: 2000,
		easing: "easeOutQuint",
		complete: function(){
			$(".load-page").css({"opacity":"0","visibility":"hidden"});

		}
	});
})