$(document).ready(() =>{
	// js for animation load page
	{
		let processLoad ={
			pro: "0%",
		}
		let ani = anime.timeline({
			easing: "linear"});
		ani
		.add({
			targets: ".load-page .content-load svg path",
			strokeDashoffset: [anime.setDashoffset,0], 
			duration: 2500,
			easing: "easeOutCubic"
		})
		// end animation paint stroke
		.add({
			targets: ".load-page .content-load img",
			opacity: 1,
			duration: 500,
			easing: "easeOutQuint"
		})
		// end animation show image
		.add({
			targets: ".load-page .content-load svg path",
			opacity: 0,
			duration: 500	
		}, "-=500")
		//end animation hide stroke
		.add({
			targets: processLoad,
			pro: "100%",
			round: 1,
			duration: 2900,	
			update: function(){
				$(".load-page .content-load h3").text(processLoad.pro);
			}
		},0)
		//end animation count %
		.add({
			targets: ".load-page .content-load img",
			translateY: "-200%",
			duration: 200,
			change: () =>{
				$(".load-page .content-load h3").css("display", "none");
			}
		})
		//end aimation hide image
		.add({
			targets: ".load-page .close-load .load-left",
			translateX: "-100%",
			duration: 500
		})
		.add({
			targets: ".load-page .close-load .load-right",
			translateX: "100%",
			duration: 500,
			complete: () =>{
				$(".load-page").addClass("d-none");
				headerTitle();
			}
		}, "-=500")
		// end animation opne door
	}
	//js for animation svg and title header
	{
		function headerTitle(){
				anime({
					targets: ".header-title .row .center-title h4",
					translateY: [100,0],
					opacity: [0, 1],
					duration: 700
				})
				anime({
					targets: ".header-title .row .center-title h2",
					translateY: [100,0],
					opacity: [0,1],
					delay: 200,
					duration: 700
				})
		}
		// anime for rada
		anime({
			targets: ".anime-svg-header svg#anime-svg #Satellite",
			rotate: [-10, 90],
			delay: 3000,
			endDelay: 3000,
			duration: 10000,
			easing: "linear",
			direction: "alternate",
			loop: true
			});
		// anime for cloud
		anime({
			targets: ".anime-svg-header svg#anime-svg #cloud1",
			translateX: ["100%", "-300%"],
			duration: 80000,
			easing: "linear",
			direction: "alternate",
			loop: true
			});
	}
	// js for when scroll
	{
		// hidden list menu, contact and  show title menu
		let status = "noactive";
		function changeMenu(){
			let aa =$("html, body").scrollTop();
			
			if(aa >= 100)
			{
				if(status!= "active"){
				$("nav .row .main-menu").addClass("hidden"); 
				$("nav .row .contact").addClass("hidden");
				$("nav .row .logo h6.text-logo").addClass("hidden");
				$("nav .row .logo h6.menu-title").addClass("show");

				status = "active";
				}	
			}
			if(aa < 100)
			{
				if( aa != "noactive"){
				$("nav .row .main-menu").removeClass("hidden"); 
				$("nav .row .contact").removeClass("hidden");
				$("nav .row .logo h6.text-logo").removeClass("hidden");
				$("nav .row .logo h6.menu-title").removeClass("show");
				status = "no-active";
				}
			}
		};
		$(window).scroll(function(){
			changeMenu();
		})
	}
	// js click button menu
	{
		function closeMenuBox(){
			$(".menu-box").css({"opacity":"0", "visibility":"hidden"});
			$(".menu-box .menu-box-anime img").removeClass("anime-menu-box");
		};
		$("header nav .row .logo .menu-title").click(() =>{
			$(".menu-box").css({"opacity":"1", "visibility":"visible"});
			$(".menu-box .menu-box-anime img").addClass("anime-menu-box");
		})
		$(".menu-box .menu-box-close").click(() =>{
			closeMenuBox();
		})
	}
	// js for contact us
	{
		//click contact us in header
		$("header nav .contact .btn").click(() =>{
			$(".contact-box").css("height","100%");
		});
		//click contact us in box menu
		$(".menu-box .menu-box-list ul li").eq(4).click(() =>{
			closeMenuBox();
			$(".contact-box").css("height","100%");
		});
		//checked input
		$(".contact-input form div input, .contact-input form div textarea").focus(function(){
			$(this).parent().addClass("checked");
		});
		//check value user enter
		function checkName(){
			let name = $(".contact-input form .name input").val();
			if(name.length <= 3){
				$(".contact-input div.name").addClass("check");
				return false;
			}
			else{
				$(".contact-input div.name").removeClass("check");
				return true;
			}
		}
		function checkEmail(){
			let email =$(".contact-input form .email input").val();
			let rexEmail = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm;
			if(!rexEmail.test(email)){
				$(".contact-input div.email").addClass("check");
				return false;
			}
			else{
				$(".contact-input div.email").removeClass("check");;
				return true;
			}
		}
		function checkPhone(){
			let phone =$(".contact-input form .phone input").val();
			let rexPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/gm;
			if(!rexPhone.test(phone)){
				$(".contact-input div.phone").addClass("check");
				return false;
			}
			else{
				$(".contact-input div.phone").removeClass("check");
				return true;
			}
		}
		function checkMess(){
			let name = $(".contact-input form div.message textarea").val();
			if(name == ""){
				$(".contact-input div.message").addClass("check");
				return false;
			}
			else{
				$(".contact-input div.message").removeClass("check");
				return true;
			}
		}
		$(".contact-input form .name input").focusout(checkName);
		$(".contact-input form .phone input").focusout(checkPhone);
		$(".contact-input form .email input").focusout(checkEmail);
		$(".contact-input form .message textarea").focusout(checkMess);
		// user click submit
		$(".contact-box .form-contact .contact-button").click(function(){
			let checkInput = checkName() + checkPhone() + checkEmail() + checkMess();
			if(checkInput == 4){
				$(".contact-box .form-contact .submit-done").css({"top":"0"});
			}
		}); 
		//user click close button or click bg black
		$(".contact-box .bg-black").click(() =>{
			$(".contact-box").css("height","0%");
		});
		$(".contact-box .form-contact .submit-done >div button").click(() =>{
			$(".contact-box").css("height","0%");
		});
	}
	//function call when load page or reload page
		changeMenu();//in js for when scroll 
})