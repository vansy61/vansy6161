$(document).ready(() =>{
	// handing load page
	$("header .row .text-logo h1").addClass("anime-zoom-in");
	$("#main .container .row .image").addClass("anime-left-in");
	$("#main .container .row .main-content").addClass("anime-right-in");
	//end

	//handing animate for text
	{
		let textArr = ["Tôi là trần văn sỷ, 21 tuổi.", "Tôi đang học lập trình web theo hướng mern stack.", "Vui lòng chọn menu dưới để hiểu hơn về tôi.", "Hoặc liên hệ với tôi qua các cách ở menu button trên."];
		let compo = $(".main-content .row .content-title h3")
		let count = 0; // variable count place text will show
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
		//myproject
		$(".content-nav .main-nav ul li").click(function(){
			let a  = $(this).data("click");
			$(a).addClass("show");
			$("html, body").addClass("overHidden");
		});
	}
	//handing click close button
	{
		$("section.content .bg-close i").click(function(){
			console.log("obj");
			$(this).parent().parent().removeClass("show");
			$("html, body").removeClass("overHidden");
		});
	}

})