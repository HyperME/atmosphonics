$(document).ready(function(){
  $('.slider').slick({
    autoplay: true,
    dots: true,
    speed: 500
  });
    
    $('.signin').click(function(){
        $('.signup_form').removeClass('active');
        $('.signin_form').toggleClass('active');
        
    });
    $('.signup').click(function(){
        $('.signin_form').removeClass('active');
        $('.signup_form').toggleClass('active');
        
    });
    $('.cancel').click(function(){
        $('.signin_form, .signup_form').removeClass('active');
        
    });
    $('.mobile-button').click(function(){
        $('.mobile-menu').toggleClass('mob_toggle');
        $('.mobile-button').toggleClass('click');
    });
});