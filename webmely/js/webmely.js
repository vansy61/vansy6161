$(document).ready(() => {
// page finish load 
  $("body").removeClass("load");
  $("body .loading").addClass("d-none");
let status = "off"; // var status for change menu.
//function change menu
function  changeMenu(){
    let a = $(".navbar").offset().top;//location of menu compare to top
    if(a >= 140 && status =="off"){
      $("nav.navbar").addClass("menu-fixed");
      $("#logo-top").addClass("logo-fixed");
      status = "on";
    }
    if(a < 140 && status =="on"){
      $("nav.navbar").removeClass("menu-fixed");
      $("#logo-top").removeClass("logo-fixed");
      status = "off";
    }
  }
new WOW().init();
// call change menu first 
changeMenu();

// particle header
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 200,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
    },
    "opacity": {
      "value": 0,
      "random": false
    },
    "size": {
      "value": 2,
      "random": false,
      "anim": {
        "enable": false
      }
    },
    "line_linked": {
      "enable": true,
      "opacity": 0.2
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": false
      },
      "resize": true
    },
    "modes": {
      "bubble": {
        "distance": 200,
        "size": 2,
        "duration": 2,
        "opacity": 1,
        "speed": 3
      }
    }
  },
  "retina_detect": true
});


// main menu when scroll 
{
 $(window).scroll(() => {
  // change main menu when scroll
  changeMenu();
  //change effect list menu
  let b = $("html, body").scrollTop();//location user scroll

  //get list location of sections 
  let listLoc = [];
  let aList = $("#menu-main ul li a");
  // get all location section compare to to
  for(let i=0; i<5; i++){
    let sec = $("body > section")[i];
    listLoc.push($(sec).offset().top);
  } 
  listLoc = listLoc.reverse();
  // remove class choosed in all tag a
  for(let i=0; i< aList.length; i++){
    $(aList[i]).removeClass("choosed");
  }
  //add class choosed
  for(let i=0; i<listLoc.length; i++){
    if((b+1)>=listLoc[i]){
      $(aList[4-i]).addClass("choosed");
      break;
    }
  }





  })//end event scroll
}
// js for button header
$("header .container .text-intro a").click(()=>{
  let offSetT = $("section#services").offset().top;
  $("html, body").animate({scrollTop:offSetT});
})


// js scrollspy
{
  $("#menu-main ul li a").on('click', function(event) {
    if (this.hash !== "") {
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800);
    } 
  });
}


// js back to top when click logo
{
  $("nav div a.navbar-brand").click(function(){
    $("html, body").animate({scrollTop: 0},800);
  })
}
})

//js check form
{

  function checkName(){
    let name = $("#inputname").val();
    if(name == ""){
      $("#inputname").next().addClass("check");
      return false;
    }
    else{
      $("#inputname").next().removeClass("check");
      return true;
    }
  }
  function checkEmail(){
    let email =$("#inputemail").val();
    let rexEmail = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/gm;
    if(!rexEmail.test(email)){
     $("#inputemail").next().addClass("check");
     return false;
   }
   else{
    $("#inputemail").next().removeClass("check");
    return true;
  }
}
function checkPhone(){
  let phone =$("#inputphone").val();
  let rexPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/gm;
  if(!rexPhone.test(phone)){
   $("#inputphone").next().addClass("check");
   return false;
 }
 else{
  $("#inputphone").next().removeClass("check");
  return true;
}
}
function checkMess(){
  let name = $("#inputmess").val();
  if(name == ""){
    $("#inputmess").next().addClass("check");
    return false;
  }
  else{
    $("#inputmess").next().removeClass("check");
    return true;
  }
}
$("#inputname").focusout(checkName);
$("#inputemail").focusout(checkEmail);
$("#inputphone").focusout(checkPhone);
$("#inputmess").focusout(checkMess);
$("#submit-form").click(() =>{
  $("#send-done").removeClass("show").addClass("d-none");
  let  a = checkMess() + checkName() + checkPhone() + checkEmail();
  if(a == 4){
    $("#send-done").removeClass("d-none").addClass("show");
   }

});
$("#close-alert-send").click(() =>{
     $("#send-done").removeClass("show").addClass("d-none");
});


}

// js click portfolio item
$(".row-port-item .port-item a").click(function(){
  let a = $(this).data("modalview");
  $("body").addClass("over-hid");
  $(a).addClass("active");
})
$(".port-modal-bg").click(function(){
  $("body").removeClass("over-hid");
  $(this).removeClass("active");
})


//handling loading page 
  //for block services
  $()
