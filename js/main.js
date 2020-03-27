jQuery(document).ready(function($) {
  "use strict";

  // window.addEventListener('load', AOS.refresh)

  if (window.outerWidth > 992) {
    jQuery(window).on("scroll", function() {
      var scroll = jQuery(window).scrollTop();
      var scrollHeader = jQuery(".op-header").outerHeight();

      var headerStickyClass = jQuery(".op-header sticky");

      if (scroll > scrollHeader) {
        headerStickyClass.addClass("sticky");
      } else {
        headerStickyClass.removeClass("sticky");
      }
    });
  }

  jQuery(".op-slider").slick({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 25000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false
        }
      }
    ]
  });

  jQuery(".op-testimonials-slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  jQuery(".op-testimonials-slider-variation").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  var a = 0;
  jQuery(window).scroll(function() {
    if (jQuery(".op-counters").length) {
      var oTop = jQuery(".op-counters").offset().top - window.innerHeight;
      if (a == 0 && jQuery(window).scrollTop() > oTop) {
        jQuery(".counter-box .number .counter-number").each(function() {
          var $this = jQuery(this),
            countTo = $this.attr("data-count");
          jQuery({
            countNum: $this.text()
          }).animate(
            {
              countNum: countTo
            },

            {
              duration: 2000,
              easing: "swing",
              step: function() {
                $this.text(Math.floor(this.countNum));
              },
              complete: function() {
                $this.text(this.countNum);
                //alert('finished');
              }
            }
          );
        });
        a = 1;
      }
    }
  });

  if (window.innerWidth < 992) {
    jQuery("body").on("click", ".op-nav-wrapper li.sub-menu > a", function(
      event
    ) {
      event.preventDefault();
      event.stopPropagation();
      var that = jQuery(this);
      that.parent().toggleClass("active");
      that
        .next()
        .toggleClass("active")
        .slideToggle();
    });
  }

  jQuery(".meter .progresss").each(function() {
    jQuery(this)
      .data("origWidth", jQuery(this).width())
      .width(0)
      .animate(
        {
          width: jQuery(this).data("origWidth")
        },
        1200
      );
  });

  jQuery(window).scroll(function() {
    if (jQuery(".member-details").length) {
      var oTop = jQuery(".skills-bars").offset().top - window.innerHeight;
      if (a == 0 && jQuery(window).scrollTop() > oTop) {
        jQuery(".skillbar").each(function() {
          var $that = jQuery(this);
          jQuery(this)
            .find(".skillbar-bar")
            .animate(
              {
                width: jQuery(this).attr("data-percent")
              },
              2000
            );

          var $this = jQuery(this).children(".skill-bar-percent"),
            countTo = $that.attr("data-percent");
          jQuery({
            countNum: 0
          }).animate(
            {
              countNum: countTo
            },

            {
              duration: 2000,
              easing: "swing",
              step: function() {
                //console.log($this);
                $this.text(Math.floor(this.countNum) + "%");
              },
              complete: function() {
                $this.text(this.countNum + "%");
                //alert('finished');
              }
            }
          );
        });

        a = 1;
      }
    }
  });

  AOS.init({
    once: true
  });
});
