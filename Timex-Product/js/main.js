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
	// js for header when scroll
	$(window).scroll(() =>{
		let place = $("html, body").scrollTop();
		let size = $("html, body").innerWidth();
		console.log(size);
		if(place > 50 && size > 992){
			$("header.row").addClass("fixed");
		}
		else{
			$("header.row").removeClass("fixed");
		}
	});

	//js for click colections
	$(".colec-main-content .colec-main-list div").click(function(){
		$(".colec-main-content .colec-main-list div").removeClass("active");
		$(this).addClass("active");
		$(".colec-main-content .colec-main-view .colec-main-view-item").removeClass("active");
		$(".colec-main-content .colec-main-view .colec-main-view-item").eq($(this).index()).addClass("active");
		$(".colec-main-content .colec-main-number span:first-child").text($(this).index() + 1)
	});
	$(".slide .sl-main .slide-main .active").next().addClass("active-1");
	$(".slide .sl-main .slide-main .active").next().next().addClass("active-2");

	$(".sl-next").click(()=>{
		$(".slide .sl-main .slide-main .active").addClass("item1");
		$(".slide .sl-main .slide-main .active").next().addClass("item2");
		$(".slide .sl-main .slide-main .active").next().next().addClass("item3");
		$(".slide .sl-main .slide-main .active").next().next().next().addClass("item4");

		setTimeout(() =>{
			$(".slide .sl-main .slide-main .active").next().addClass("active");
			$(".slide .sl-main .slide-main .active").eq(0).removeClass("active");
			$(".slide .sl-main .slide-main .active-1").next().addClass("active-1");
			$(".slide .sl-main .slide-main .active-1").eq(0).removeClass("active-1");
			$(".slide .sl-main .slide-main .active-2").next().addClass("active-2");
			$(".slide .sl-main .slide-main .active-2").eq(0).removeClass("active-2");
			$(".slide .sl-main .slide-main .sl-inner div").removeClass("item1");
			$(".slide .sl-main .slide-main .sl-inner div").removeClass("item2");
			$(".slide .sl-main .slide-main .sl-inner div").removeClass("item3");
			$(".slide .sl-main .slide-main .sl-inner div").removeClass("item4");
			if (!$(".slide .sl-main .slide-main .active-2").next().length) {
				$(".sl-next").css("display","none");
			}
			if($(".slide .sl-main .slide-main .sl-inner .active").prev().length){
				$(".sl-prev").css("display","block");
			}
		},400)
		
	});
	$(".sl-prev").click(()=>{
		$(".slide .sl-main .slide-main .active").addClass("item6");
		$(".slide .sl-main .slide-main .active").next().addClass("item7");
		$(".slide .sl-main .slide-main .active").next().next().addClass("item8");
		$(".slide .sl-main .slide-main .active").prev().addClass("item5");

		setTimeout(() =>{
			$(".slide .sl-main .slide-main .active").prev().addClass("active");
			$(".slide .sl-main .slide-main .active").eq(1).removeClass("active");
			$(".slide .sl-main .slide-main .active-1").prev().addClass("active-1");
			$(".slide .sl-main .slide-main .active-1").eq(1).removeClass("active-1");
			$(".slide .sl-main .slide-main .active-2").prev().addClass("active-2");
			$(".slide .sl-main .slide-main .active-2").eq(1).removeClass("active-2");
			$(".slide .sl-main .slide-main .sl-inner div").removeClass("item5");
			$(".slide .sl-main .slide-main .sl-inner div").removeClass("item6");
			$(".slide .sl-main .slide-main .sl-inner div").removeClass("item7");
			$(".slide .sl-main .slide-main .sl-inner div").removeClass("item8");
			if ($(".slide .sl-main .slide-main .active-2").next().length) {
				$(".sl-next").css("display","block");
			}
			if(!$(".slide .sl-main .slide-main .active").prev().length){
				$(".sl-prev").css("display","none");
		}
		},400)
		
	});
})