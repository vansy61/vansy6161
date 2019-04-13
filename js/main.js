$(document).ready(() =>{
	// handing animation load page
	$("header .row .text-logo h1").addClass("anime-zoom-in");
	$("#main .container .row .image").addClass("anime-left-in");
	$("#main .container .row .main-content").addClass("anime-right-in");
	//end

	//handing animate write text
	{
		//array text
		let textArr = ["Tôi là trần văn sỷ, 21 tuổi.", "Tôi đang học lập trình web theo hướng mern stack.", "Vui lòng chọn menu dưới để hiểu hơn về tôi.", "Hoặc liên hệ với tôi qua các cách ở menu button trên."];
		//selector place write
		let compo = $(".main-content .row .content-title h3")
		let count = 0; // variable count text index in arr will show

		function writeText(i){
			let textWrite = textArr[i];
			if(textWrite.length > compo.text().length){
				$(compo).text(compo.text() + textWrite[compo.text().length]);
				setTimeout(() =>{
					writeText(count%3);
				},80);
			}
			else{
				count++;
				setTimeout(() =>{
					deleText();
				},3000)
			}

		} // end funtion write text
		function deleText(){
			let getText = compo.text();
			if(getText.length > 0){
				$(compo).text(getText.slice(0,getText.length-1));
				setTimeout(() =>{
					deleText();
				},80)
			}
			else{
				setTimeout(() =>{
					writeText(count%3);
				},2000)
			}

		} // end function delete text
		writeText(count);
	}
	//end

	//handing click menu
	{
		//click menu main
		$(".content-nav .main-nav ul li").click(function(){
			$("html, body").addClass("overHidden");
			$("section.content").addClass("show");
			let arr =[];
			arr[0] = 0;
			arr[1] = $("#aboutme").outerHeight();
			arr[2] = $("#myskill").outerHeight() + arr[1];
			let vitri = $(this).index();
			$("#prot").animate({scrollTop: arr[vitri]},500);
			
			$(".menu-fixed ul li span").removeClass("act-menu");
		    $(`.menu-fixed ul li i[data-idl="${$(this).data("idl")}"]`).next().addClass("act-menu");
			
			
			
		});
		//click menu fixed
		$(".menu-fixed ul li").click(function(){
			let arr =[];
			arr[0] = 0;
			arr[1] = $("#aboutme").outerHeight();
			arr[2] = $("#myskill").outerHeight() + arr[1];
			let vitri = $(this).index();
			$("#prot").animate({scrollTop: arr[vitri]},500);
			$(".menu-fixed ul li span").removeClass("act-menu");
		    $(this).children().last().addClass("act-menu");


		});
	}
	//handing scroll section contnet
	{
		$("#prot").scroll(function(){
			let arr =[];
			arr[0] = $("#aboutme").outerHeight() -20;
			arr[1] = $("#myskill").outerHeight() + arr[0] -20;
			console.log($(this).scrollTop());
			if($(this).scrollTop() < arr[0]){
				$(".menu-fixed ul li span").removeClass("act-menu");
		    	$(".menu-fixed ul li span").eq(0).addClass("act-menu");
			}
			else if((arr[0] <= $(this).scrollTop()) && ($(this).scrollTop() < arr[1]) ){
				$(".menu-fixed ul li span").removeClass("act-menu");
		    	$(".menu-fixed ul li span").eq(1).addClass("act-menu");
		    	console.log(2);
			}
			else {
				$(".menu-fixed ul li span").removeClass("act-menu");
		    	$(".menu-fixed ul li span").eq(2).addClass("act-menu");
		    	console.log(3);
			}
		});
	}
	//handing click close button
	{
		$("section.content .bg-close i").click(function(){
			$("html, body").removeClass("overHidden");
			$("section.content").removeClass("show");
			
		});
	}

})