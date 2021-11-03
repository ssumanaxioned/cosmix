$(document).ready(function () {
  var slider = $(".slider");
  var hmenu = $(".menu");
  var nav = $("nav ul")
  var counter_ctn = $(".counter-ctn").offset().top;
  var position = counter_ctn - $(window).height();

  slider.slick({
    fade: true,
    infinite: true,
    autoplay: true,
    autoplayspeed: 5000,
    dots: true,
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    if (scroll > 50) {
      $("header").addClass("nav-bg");
    } else {
      $("header").removeClass("nav-bg");
    }
  });

  hmenu.click(function () {
    hmenu.toggleClass("active");
    nav.toggleClass("nav-active");
  });

  $(window).scroll(function(){
      if ($(window).scrollTop() > position) {
          console.log($(window).scrollTop());
        $(".count").each(function () {
            var $this = $(this),
              countTo = $this.attr("data-target");
        
            $({ countNum: $this.text() }).animate(
              {
                countNum: countTo,
              },
        
              {
                duration: 3000,
                easing: "linear",
                step: function () {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                  $this.text(this.countNum);
                },
              }
            );
          });
      }
  })
});
