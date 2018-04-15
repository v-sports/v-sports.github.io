var options = {
    accessibility: true,
    prevNextButtons: true,
    pageDots: true,
    setGallerySize: false,
    arrowShape: {
      x0: 10,
      x1: 60,
      y1: 50,
      x2: 60,
      y2: 45,
      x3: 15
    }
  };
  
  var carousel = document.querySelector('[data-carousel]');
  var slides = document.getElementsByClassName('carousel-cell');
  var flkty = new Flickity(carousel, options);
  
  flkty.on('scroll', function () {
    flkty.slides.forEach(function (slide, i) {
      var image = slides[i];
      var x = (slide.target + flkty.x) * -1/3;
      image.style.backgroundPosition = x + 'px';
    });
  });


  document.addEventListener('DOMContentLoaded', function () {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {
  
          // Get the target from the "data-target" attribute
          var target = $el.dataset.target;
          var $target = document.getElementById(target);
  
          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  });

// smooth scroll animation
$(document).ready(function() {
  var $menu = $(".navbar-start");
  var $menu_a = $("a", $menu);
  var id = false;
  var sections = [];
  var hash = function(h) {
    if (history.pushState) {
      history.pushState(null, null, h);
    } else {
      location.hash = h;
    }
  };

  $menu_a.click(function(event) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - $(".navbar").height()
      },
      {
        duration: 700,
        complete: hash($(this).attr("href"))
      }
    );
  });

  $menu_a.each(function() {
    sections.push($($(this).attr("href")));
  });

  $(window).scroll(function(event) {
    var scrolling = $(this).scrollTop() + $(this).height() / 3;
    var scroll_id;
    for (var i in sections) {
      var section = sections[i];
      if (scrolling > section.offset().top) {
        scroll_id = section.attr("id");
      }
    }
    if (scroll_id !== id) {
      id = scroll_id;
      $menu_a.removeClass("is-active");
      $("a[href='#" + id + "']", $menu).addClass("is-active");
    }
  });
});

