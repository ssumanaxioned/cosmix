$(document).ready(function () {
    var slider = $(".slider");
    
    slider.slick({
        fade: true,
        infinite: true,
        autoplay: true,
        autoplayspeed: 1000,
        dots:true
    });

    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
          $("header").addClass("nav-bg");
        }
  
        else{
            $("header").removeClass("nav-bg"); 	
        }
    });
});