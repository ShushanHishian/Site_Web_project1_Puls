$(document).ready(function(){
    $('.carousel__inner').slick(
      {
        speed:1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/chevronleft.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/chevronright.png"></button>',
       responsive: [
        {
          breakpoint:992,
           setting:{
            dots: true,
            arrow:false
          }
        }
       ]
     
      });

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
          .addClass('.catalog__tab_active').siblings().removeClass('catalog__tab_active')
          .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
  
function toggleSlide (item) {
  $(item).each(function(i){
    $(this).on('click', function(e){
         e.preventDefault();
         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    })
});
};

toggleSlide('.catalog-item__link');
toggleSlide('.catalog-item__back');


//modals window
$('[data-modal=consultation]').on('click',function(){
  $('.overlay, #consultation').fadeIn();
});

$('.modal__close').on('click', function(){
$('.overlay, #consultation, #thanks, #order').fadeOut('slow');

});




$('.button__mini').each(function(i){
$(this).on('click',function () {
  $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
  $('.overlay, #order').fadeIn('slow');
} )
});

$('#consultation-form').validate();

$('#consultation form').validate({
  rules:{
    name:"required",
    phone: "required",
    
  
    email:{
      required:true,

email:true    }
  },
  messages: {
    name: "Please specify your name",
    phone: "Please specify your phone",
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    } 
  }
});
$('#order form').validate();

$('input[name="phone"]').inputmask("+33(99) 99-99-99");











//scroll up
$(window).scroll(function() {
  if ($(this).scrollTop() > 1600) {
    $('.pageup').fadeIn();
  }
  else {
    $('.pageup').fadeOut(); 
   }
});

$("a[href^='#']").click(function(){
  const _href= $(this).attr("href");
$("html,body").animate({scrollTop:$(_href).offset().top+"px"});
return false;
});


new WOW().init();




/* 
function validate(form){
  $('form').validate({
    rules:{
      name:"required",
      phone:{
        required: true,
        minlenght: 10
      },
      email:{
        required:true,
  
  email:true   
 }
    },
    messages: {
      name: "Please specify your name",
      phone: "Please specify your phone",
      email: {
        required: "We need your email address to contact you",
        email: "Your email address must be in the format of name@domain.com"
      }
    }
  });
 

};


validateForm('#consultation-form');
validateForm('#consultation form');
validateForm('#order form'); */



});





  