$(document).ready(() => {
	// show tab with in 
	{
		let listBtn = $(".within-content .within-tab-btn ul li");
		let listTabWithIn = $(".within-content .within-tab-ct .tab-child");
		listBtn.click(function(){
			let indexBtn = $(this).index();
			listBtn.removeClass("active");
			$(this).addClass("active");
			listTabWithIn.removeClass("active");
			listTabWithIn.eq(indexBtn).addClass("active");
		});
	}
})