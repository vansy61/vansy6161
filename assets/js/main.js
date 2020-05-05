$('#testimonial-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: '#prev-slider',
    nextArrow: '#next-slider'
});

$(document).on('click', '.show-modal-login', function(){
  $('#modal-register').modal('hide')
  $('#modal-login').modal('show')
})



$(".custom-file-input").on("change", function() {
    var fileName = $(this).val().split("\\").pop();
    $(this).siblings(".custom-file-label").addClass("selected").html(fileName);
});



// =======================
var input_selector = '.input-material';
$(input_selector).each(function(index, element) {
    if ($(element).val().length > 0 || element.autofocus || $(this).attr('placeholder') !== undefined) {
        $(this).siblings('label').addClass('active');
    }
    else {
        $(this).siblings('label').removeClass('active');
    }
});
$(document).on('change', input_selector, function () {
    if($(this).val().length !== 0 || $(this).attr('placeholder') !== undefined) {
        $(this).siblings('label').addClass('active');
    }
});
$(document).on('focus', input_selector, function () {
    $(this).siblings('label').addClass('active');
});
$(document).on('blur', input_selector, function () {
    var $inputElement = $(this);
    if ($inputElement.val().length === 0 && $inputElement.attr('placeholder') === undefined) {
      $inputElement.siblings('label').removeClass('active');
    }
});
// ==============================
