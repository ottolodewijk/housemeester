/*-----------------------------------------------------------------------------------*/
/* 		Mian Js Start
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function(jQuery) {
"use strict"
/*-----------------------------------------------------------------------------------*/
/*    Parallax
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function(){
  jQuery.stellar({
    horizontalScrolling: false,
    scrollProperty: 'scroll',
    positionProperty: 'position'
  });
});
/*-----------------------------------------------------------------------------------*/
/*    STICKY NAVIGATION
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function(){
    jQuery(".sticky").sticky({topSpacing:0});
});
/*-----------------------------------------------------------------------------------*/
/* 	ANIMATION
/*-----------------------------------------------------------------------------------*/
var wow = new WOW({
    boxClass:     'wow',      // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset:       100,          // distance to the element when triggering the animation (default is 0)
    mobile:       false        // trigger animations on mobile devices (true is default)
});
wow.init();
/*-----------------------------------------------------------------------------------*/
/* 	LOADER
/*-----------------------------------------------------------------------------------*/
jQuery(window).load(function() {
	jQuery("#loader").delay(500).fadeOut("slow");
});
/*-----------------------------------------------------------------------------------*/
/*  ISOTOPE PORTFOLIO
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function () {
    var jQuerycontainer = jQuery('.portfolio-wrapper .items');
    jQuerycontainer.imagesLoaded(function () {
        jQuerycontainer.isotope({
            itemSelector: '.item',
            layoutMode: 'fitRows'
        });
  });
    jQuery('.filter li a').click(function () {
        jQuery('.filter li a').removeClass('active');
        jQuery(this).addClass('active');
        var selector = jQuery(this).attr('data-filter');
        jQuerycontainer.isotope({
            filter: selector
        });
        return false;
    });
});
/*-----------------------------------------------------------------------------------*/
/* 		Active Menu Item on Page Scroll
/*-----------------------------------------------------------------------------------*/
jQuery(window).scroll(function(event) {
		Scroll();
});
jQuery('.scroll a').click(function() {
		jQuery('html, body').animate({scrollTop: jQuery(this.hash).offset().top -10}, 1000);
		return false;
});
// User define function
function Scroll() {
var contentTop      =   [];
var contentBottom   =   [];
var winTop      =   jQuery(window).scrollTop();
var rangeTop    =   200;
var rangeBottom =   500;
jQuery('nav').find('.scroll a').each(function(){
	contentTop.push( jQuery( jQuery(this).attr('href') ).offset().top);
		contentBottom.push( jQuery( jQuery(this).attr('href') ).offset().top + jQuery( jQuery(this).attr('href') ).height() );
})
jQuery.each( contentTop, function(i){
	if ( winTop > contentTop[i] - rangeTop ){
		jQuery('nav li.scroll')
		  .removeClass('active')
			.eq(i).addClass('active');			
		}}
)};
/*-----------------------------------------------------------------------------------*/
/* 		Portfolio PopUp
/*-----------------------------------------------------------------------------------*/
jQuery('#popups').magnificPopup({
  delegate: 'a.popi',
  removalDelay: 500, //delay removal by X to allow out-animation
  callbacks: {
    beforeOpen: function() {
       this.st.mainClass = this.st.el.attr('data-effect');
    }
  },
  midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
});
/*-----------------------------------------------------------------------------------*/
/* 		TESTIMONIAL SLIDER
/*-----------------------------------------------------------------------------------*/
jQuery(window).load(function() {
   jQuery('.flexslider').flexslider();
});
/*-----------------------------------------------------------------------------------*/
/*    LOADER
/*-----------------------------------------------------------------------------------*/
jQuery(document).ready(function() {
  var timer;  
  //calling jPreLoader function with properties
  jQuery('body').jpreLoader({
    splashID: "#jSplash",
    splashFunction: function() {  //passing Splash Screen script to jPreLoader
      timer = setInterval(function() {
        splashRotator();
      }, 3000);
    }
  }, 
function() 
{ //jPreLoader callback function
    clearInterval(timer);
    jQuery('').animate({"top":0}, 800, function() {
      jQuery('#wrapper').fadeIn(1000);
    });
  });
});
jQuery(function(){
  jQuery('.inner').hide();
  jQuery('.hover').hover(function(){
  jQuery('.inner').show();
  jQuery('.back').css('background','none');
},
function(){
   jQuery('.inner').hide();
     jQuery('.back').css('background','');
});
  
});
});
/*====================================
            ON DOM READY            
====================================*/
jQuery(function() {
   // Toggle Nav on Click
    jQuery('.toggle-nav').click(function() {
        // Calling a function in case you want to expand upon this.
        toggleNav();
    });
});
/*========================================
            CUSTOM FUNCTIONS            
========================================*/
function toggleNav() {
    if (jQuery('#wrap').hasClass('show-nav')) {
        // Do things on Nav Close
        jQuery('#wrap').removeClass('show-nav');
    } else {
        // Do things on Nav Open
        jQuery('#wrap').addClass('show-nav');
    }
    //jQuery('#site-wrapper').toggleClass('show-nav');
}
// Search Form Class
jQuery(document).ready(function() {
    jQuery("#s").addClass("form-control");
    jQuery("#s").attr("placeholder", "Search on site");
    jQuery(".wpcf7-text").addClass("form-control");
    jQuery(".wpcf7-email").addClass("form-control");
    jQuery(".wpcf7-textarea").addClass("form-control");
});
// Slides
jQuery('#slides').superslides({
    animation: 'fade',
    play: 10000,
    animation_speed: 1000,
    animation_easing: 'swing',
    inherit_width_from: window,
    inherit_height_from: window,
    pagination: true,
    hashchange: false,
    scrollable: true
});
//Tabs
jQuery(document).ready(function () {
    jQuery( ".tab-content" ).find( "#tab1").addClass("active");
	jQuery( ".tab-content" ).find( "#tab1").addClass("in");
});