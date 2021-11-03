$(document).ready(function () {
  var slider = $(".slider");
  var hmenu = $(".menu");
  var nav = $("nav ul");
  var counter_ctn = $(".slider-ctn").offset().top;
  var filtertabs = $(".filter-tab");
  var btn = $(".tab");
  var card = $(".card");

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

    if ( scroll > 300) {
      $(".top").fadeIn();
    } else {
      $(".top").fadeOut();
    }
  });

  hmenu.click(function () {
    hmenu.toggleClass("active");
    nav.toggleClass("nav-active");
  });

  $(window).scroll(function () {
    if ($(window).scrollTop() > counter_ctn) {
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
  });

  $('.tab-btn').click(function () {
    $('.feat-active').removeClass('feat-active');
    console.log($(this));
    $(this).children().addClass('feat-active');
    $('.tab-active').removeClass('tab-active');
    const index = $(this).index();
    console.log(index);
    $('.tabs').eq(index).addClass('tab-active');
  });

  filtertabs.on('click touch', '.all', function () {
    btn.removeClass('active-tab');
    $(this).addClass('active-tab');

    card.hide();
    card.fadeIn(700);
  });

  filtertabs.on('click', '.creative', function () {
    btn.removeClass('active-tab');
    $(this).addClass('active-tab');

    card.show();
    card.fadeOut(400);
    card.filter('.creative').fadeIn(400);
  });

  filtertabs.on('click', '.corporate', function () {
    btn.removeClass('active-tab');
    $(this).addClass('active-tab');

    card.show();
    card.fadeOut(400);
    card.filter('.corporate').fadeIn(400);
  });

  filtertabs.on('click', '.portfolio', function () {
    btn.removeClass('active-tab');
    $(this).addClass('active-tab');

    card.show();
    card.fadeOut(400);
    card.filter('.portfolio').fadeIn(400);
  });
});
