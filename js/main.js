AOS.init({
  duration: 600
});
  

(function($) {

  'use strict';

    function fixedHeaderOffset(hash) 
    {
      var width = window.innerWidth;
      console.log(width);

      console.log(hash);
      var offsetTop = $(hash).offset().top;
      
      if (hash === "#combattingInequality") {
        $("html, body").stop().animate({scrollTop: offsetTop - 80 }, 500, 'swing', function () {
          window.location.hash = target;
      });
      } else if (hash === "#partnerships") {
        $("html, body").stop().animate({scrollTop: offsetTop - 80 }, 500, 'swing', function () {
          window.location.hash = target;
      });
      } else if (hash === "#projects") {
        $("html, body").stop().animate({scrollTop: offsetTop - 140 }, 500, 'swing', function () {
          window.location.hash = target;
      });
      } else if (hash === "#careers") {
        $("html, body").stop().animate({scrollTop: offsetTop - 75 }, 500, 'swing', function () {
          window.location.hash = target;
      });
      }
    }
  
      $(window).on("hashchange", function(e) {
        e.preventDefault();

        fixedHeaderOffset(window.location.hash);
      });

    function scrollUpOnLoad() {

    }

    function scrollUpToCompensateForFixedHeader()
    {
      var hash, 
        target, 
        offset;

      // Get hash, e.g. #mathematics
      hash = window.location.hash;
      if ( hash.length < 2 ) { return; }
      console.log(hash);

      // Get :target, e.g. <h2 id="mathematics">...</h2>
      target = document.getElementById( hash.slice(1) );
      if ( target === null ) { return; }

      // Get distance of :target from top of viewport. If it's near zero, we assume
      // that the user was just scrolled to the :target.
      
      //window.scrollBy(0, -fixedHeaderOffset(hash));
      
    }

  $(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });

  $.scrollIt({
    upKey: 38,             // key code to navigate to the next section
    downKey: 40,           // key code to navigate to the previous section
    easing: 'linear',      // the easing function for animation
    scrollTime: 500,       // how long (in ms) the animation takes
    activeClass: 'active', // class given to the active nav element
    onPageChange: null,    // function(pageIndex) that is called when page is changed
    topOffset: -180           // offste (in px) for fixed top navigation
    });

	// bootstrap dropdown hover

  // loader
  var loader = function() {
    setTimeout(function() { 
      if($('#loader').length > 0) {
        $('#loader').removeClass('show');
      }
    }, 1);
  };
  loader();


  // navigation
  var OnePageNav = function() {
    var navToggler = $('.js-site-nav-toggle');
    $(".smoothscroll[href^='#'], #ftco-navbar ul li a[href^='#']").on('click', function(e) {
      e.preventDefault();
      var hash = this.hash;
        
      $('html, body').animate({

        scrollTop: $(hash).offset().top
      }, 500, 'easeInOutExpo', function(){
        window.location.hash = hash;
      });
    });
    $("#ftco-navbar ul li a[href^='#']").on('click', function(e){
      if ( navToggler.is(':visible') ) {
        navToggler.click();
      }
    });

    // $('body').on('activate.bs.scrollspy', function () {
    //   console.log('nice');
    // })
  };
  OnePageNav();

  $(window).scroll(function() {
/*
    var $this = $(this),
      st = $(window).scrollTop(),
      navbar = $('.navbar'),
      newH = navbar.height(),
      menu = 120;

      if (st/3 <= 50) newH = menu;
      else if (st/3 <= 100) newH = menu - st/3 + 50;
      else newH = 70;
      navbar.css({'height': newH + 'px'});
    
    if (st > 150) {
      if ( !navbar.hasClass('scrolled') ) {
        navbar.addClass('scrolled');  
        $("#logo").attr("src", "logo_graphic.png");
      }
    } 
    if (st < 150) {
      if ( navbar.hasClass('scrolled') ) {
        navbar.removeClass('scrolled sleep');
        $("#logo").attr("src", "logo_text.png")
      }
    } 
    if ( st > 350 ) {
      if ( !navbar.hasClass('awake') ) {
        navbar.addClass('awake'); 
      }
    }
    if ( st < 350 ) {
      if ( navbar.hasClass('awake') ) {
        navbar.removeClass('awake');
        navbar.addClass('sleep');
      }
    }
    */

  });

  $("#servedSection .row .col").on("mouseenter", function(e) {
      if (this.id === "lotSection") {
        $("#servedSection").stop().css({
          "background": "url('images/banner_images/lot2545.png')",
          "background-size": "cover"
        });
      } else if (this.id === "reiSection") {
        $("#servedSection").stop().css({
          "background": "url('images/our-work/our-work-header-new.png')",
          "background-size": "cover"
        });
      } else if (this.id === "democracySection") {
        $("#servedSection").stop().css({
          "background": "url('images/banner_images/ggm-banner.png')",
          "background-size": "cover"
        });
      } else if (this.id === "haitiSection") {
        $("#servedSection").stop().css({
          "background": "url('images/banner_images/haiti-header.png')",
          "background-size": "cover"
        });
      }
  });
  
  $('.navbar .hover-background').on('mouseenter', function(e) {
    var scrollTop = $(window).scrollTop();
    var lowerNavbar = $('.secondary-nav .secondary-nav-inner');
    lowerNavbar.html('');

    var secondaryNav = false;

    if (this.id === "ourWorkLink") {
      secondaryNav = true;
      lowerNavbar.html(
      "<a href='our-work.html#combattingInequality' class='secondary-nav__link'>Combatting Inequality</a>" + 
      "<a href='our-work.html#partnerships' class='secondary-nav__link'>Partnerships</a>" + 
      "<a href='our-work.html#projects' class='secondary-nav__link'>Projects</a>" + 
      "<a href='education.html' class='secondary-nav__link'>Education</a>"
      );
    } else if (this.id === "aboutUsLink") {
      secondaryNav = true;
      lowerNavbar.html(
        "<a href='team.html#coreValues' class='secondary-nav__link'>Core Values</a>" + 
        "<a href='team.html#ourTeam' class='secondary-nav__link'>Our Team</a>" + 
        "<a href='join-us.html' class='secondary-nav__link'>Careers</a>"
        );
    } /* else if (this.id === "impactLink") {
      secondaryNav = true;
      lowerNavbar.html(
        "<a href='' class='secondary-nav__link'>North America</a>" + 
        "<a href='' class='secondary-nav__link'>Central America</a>" + 
        "<a href='' class='secondary-nav__link'>Europe & Asia</a>" + 
        "<a href='' class='secondary-nav__link'>Africa</a>"
        );
    } */ else if (this.id === "donateButton") {
      secondaryNav = true;
      lowerNavbar.html(
        "<a href='donate.html' class='secondary-nav__link'>For Democracy</a>" + 
        "<a href='donate.html' class='secondary-nav__link'>For COVID-19</a>" +
        "<a href='donate.html' class='secondary-nav__link'>For Black Lives Matter</a>"
        );
    } else if (this.id === "educationLink") {
      secondaryNav = true;
      lowerNavbar.html(
        "<a href='education.html#mindset' class='secondary-nav__link'>Mindset</a>" 
        );
    } else if (this.id === "contactLink") {
      secondaryNav = true;
      lowerNavbar.html(
        "<a href='contact.html' class='secondary-nav__link'>For Nonprofits</a>" + 
        "<a href='join-us.html' class='secondary-nav__link'>Join Our Team</a>"
      );
    }

    var topPos = scrollTop <= 90 ? '110px' : '80px';

    if(secondaryNav) {
      $('.secondary-nav').css({'display': 'inline', 'background': '#fff'});
      $('.secondary-nav__background').css({'display': 'inline'});

      $('.secondary-nav').stop().animate({
        'height': '60px',
        'opacity': 1,
        'top': topPos,
        'border-width': '1px'
      }, 250);
      $('.secondary-nav__background').stop().animate({
          'opacity': 0.9
      }, 250);
    } else {
      $('.secondary-nav').stop().animate({
        'height': '0px',
        'opacity': 0,
        'border-width': '0px'
      }, 250);
      $('.secondary-nav__background').stop().animate({
          'display': 'none',
          'opacity': 0
      }, 250);
    }

    if (scrollTop <= 90) {
        $('.header-background').css({
          'opacity': 0.5
        });
    }
  });

  $('.navbar').on('mouseleave', function(e) {
      var scrollTop = $(window).scrollTop();

      $('.secondary-nav').stop().animate({
        'height': '0px',
        'opacity': 0,
        'border-width': '0px'
      }, 250);
      $('.secondary-nav__background').stop().animate({
          'display': 'none',
          'opacity': 0
      }, 250);

      if (scrollTop <= 90) {
        $('.header-background').stop().animate({
          'opacity': 0
        }, 250);
      }
      
  });


  $('.js-site-nav-toggle').on('click', function(e) {

    var $this = $(this);
    e.preventDefault();

 

    if ( $('body').hasClass('menu-open') ) {
      $this.removeClass('active');
        $('.site-menu .site-menu-inner > ul > li').each(function(i) {

          var that = $(this);
          setTimeout(function() {
            that.removeClass('is-show');
          }, i * 100);

          // $(this).removeClass('is-show');
        });
      
      setTimeout(function() {
        // $('.site-menu').fadeOut(400);
        $('.site-menu').removeClass('site-menu-show');
      }, 800);

      $('body').removeClass('menu-open');
    } else {

      // $('.site-menu').fadeIn(400);
      $('.site-menu').addClass('site-menu-show');

      $this.addClass('active');
      $('body').addClass('menu-open');

      setTimeout(function() {
        $('.site-menu .site-menu-inner > ul > li').each(function(i) {
          var that = $(this);
          setTimeout(function() {
            that.addClass('is-show');
          }, i * 100);

        });
      }, 250);
      
    }

  });


	
	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// home slider
	$('.home-slider').owlCarousel({
    loop:true,
    autoplay: true,
    margin:0,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:true,
    autoplayHoverPause: true,
    items: 1,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:1,
        nav:false
      },
      1000:{
        items:1,
        nav:true
      }
    }
	});

  $('.home-slider-loop-false').owlCarousel({
    loop:false,
    autoplay: true,
    margin:0,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:true,
    autoplayHoverPause: true,
    items: 1,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:1,
        nav:false
      },
      1000:{
        items:1,
        nav:true
      }
    }
  });

	// owl carousel
	var majorCarousel = $('.js-carousel-1');
	majorCarousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 3,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:3,
        nav:true,
        loop:false
      }
  	}
	});

	// owl carousel
	var major2Carousel = $('.js-carousel-2');
	major2Carousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    autoplayHoverPause: true,
    items: 4,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:3,
        nav:false
      },
      1000:{
        items:4,
        nav:true,
        loop:false
      }
  	}
	});


  $('.centernonloop').owlCarousel({
    center: true,
    items: 1,
    loop: false,
    margin:10,
    dots: true,
    responsive:{
      600:{
        items: 3
      }
    }
  });

  $('#date').datepicker({
    'format': 'm/d/yyyy',
    'autoclose': true
  });
  $('#time').timepicker();


  //------- Google Map  js --------//  

    if (document.getElementById("map")) {
        google.maps.event.addDomListener(window, 'load', init);

        function init() {
            var mapOptions = {
                zoom: 11,
                center: new google.maps.LatLng(40.6700, -73.9400), // New York
                styles: [{
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#e9e9e9"
                    }, {
                        "lightness": 17
                    }]
                }, {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f5f5f5"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 17
                    }]
                }, {
                    "featureType": "road.highway",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 29
                    }, {
                        "weight": 0.2
                    }]
                }, {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 18
                    }]
                }, {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#ffffff"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f5f5f5"
                    }, {
                        "lightness": 21
                    }]
                }, {
                    "featureType": "poi.park",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#dedede"
                    }, {
                        "lightness": 21
                    }]
                }, {
                    "elementType": "labels.text.stroke",
                    "stylers": [{
                        "visibility": "on"
                    }, {
                        "color": "#ffffff"
                    }, {
                        "lightness": 16
                    }]
                }, {
                    "elementType": "labels.text.fill",
                    "stylers": [{
                        "saturation": 36
                    }, {
                        "color": "#333333"
                    }, {
                        "lightness": 40
                    }]
                }, {
                    "elementType": "labels.icon",
                    "stylers": [{
                        "visibility": "off"
                    }]
                }, {
                    "featureType": "transit",
                    "elementType": "geometry",
                    "stylers": [{
                        "color": "#f2f2f2"
                    }, {
                        "lightness": 19
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.fill",
                    "stylers": [{
                        "color": "#fefefe"
                    }, {
                        "lightness": 20
                    }]
                }, {
                    "featureType": "administrative",
                    "elementType": "geometry.stroke",
                    "stylers": [{
                        "color": "#fefefe"
                    }, {
                        "lightness": 17
                    }, {
                        "weight": 1.2
                    }]
                }]
            };
            var mapElement = document.getElementById('map');
            var map = new google.maps.Map(mapElement, mapOptions);
            var marker = new google.maps.Marker({
                position: new google.maps.LatLng(40.6700, -73.9400),
                map: map,
                title: 'Snazzy!'
            });
        }
    }



})(jQuery);