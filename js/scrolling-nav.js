//jQuery to collapse the navbar on scroll


/** $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}); **/


// My personal jQuery script
$(document).ready(function(){

	
	//hide .navbar first
	$(".navbar").hide();
	
	//fade in .navbar
	$(function(){
		$(window).scroll(function(){
		
		if ($(this).scrollTop() > 100) 
			{
				$('.navbar').fadeIn();
		
			}
		
		else 
			{
				$('.navbar').fadeOut();
			}
		});
	
	});

	// Fade In transition when user visits site for the first time

	//$(function(){
		//$('#intro').hide();
		//$('#intro').fadeIn(3);
	//});

});

$("#about img").hover(

//Mouse In
    function(){
        $(this).stop().animate({'border-color': '#FCAC45' }, 300);
    },

//Mouse Out
    function(){
        $(this).stop().animate({'border-color': 'white' }, 300);
    }
);



$("#services i.fa").hover(

//Mouse In
    function() {
    $(this).stop().animate({color: 'white', backgroundColor: '#FCAC45'}, 300);
    }, 
//Mouse Out
    function(){
    $(this).stop().animate({color: '#333', backgroundColor: '#fff'}, 300);
});



/* Blurring to focus on projects being selected. */


$("#project .img-parent").hover(function() {
	console.log("inside hover");
	 $('#project .img-parent img').toggleClass("imgblur");
		$(this).toggleClass("active");
});


$(".fa-envelope-o").hover(function() {

  console.log("inside hover");
    $(this).stop().animate({color: '#ffc107', fontSize: '5em'}, 300);
    }, function(){
    $(this).stop().animate({color: '#333', fontSize: '3em'}, 300);
});


$(".fa-facebook-square").hover(function() {

  console.log("inside hover");
    $(this).stop().animate({color: '##415e9b', fontSize: '5em'}, 300);
    }, function(){
    $(this).stop().animate({color: '#333', fontSize: '3em'}, 300);
});

$(".fa-linkedin-square").hover(function() {

  console.log("inside hover");
    $(this).stop().animate({color: '#0077b5', fontSize: '5em'}, 300);
    }, function(){
    $(this).stop().animate({color: '#333', fontSize: '3em'}, 300);
});

$(".fa-twitter").hover(function() {

  console.log("inside hover");
    $(this).stop().animate({color: '#31abf6', fontSize: '5em'}, 300);
    }, function(){
    $(this).stop().animate({color: '#333', fontSize: '3em'}, 300);
});



//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
})



var $myName= $('.myName').addClass('hello');
var $AmanBhayani= $('.AmanBhayani').addClass('there');
var $coolThings= $('.coolThings').addClass('canI');
var $arrow= $('#arrow').addClass('doThis');



/*$(function(){

        $('.myName').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
           $('.AmanBhayani').addClass('animated rubberBand');
        });

        $('.AmanBhayani').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $('.coolThings').addClass('animated zoomIn');
        });

        $('.coolThings').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
            $('#arrow').addClass('animated flip');
        });
    });*/



//about

var $aboutsection= $('#about img');

$aboutsection.waypoint(function(){
    $aboutsection.addClass('animated bounceIn').css("opacity", "");
    console.log("this is working!");

}, { offset: '70%' });

//Service
var $communication= $('#services i.fa.communication');

$communication.waypoint(
    function(){
        $communication.stop().animate({color: 'white', backgroundColor: '#FCAC45'}, 1000).animate({color: '#333', backgroundColor: '#fff'}, 1000);
        this.destroy();
}, { offset: '70%' });


var $design= $('#services i.fa.design');

$communication.waypoint(
    function(){
        $design.stop().delay(1000).animate({color: 'white', backgroundColor: '#FCAC45'}, 1000).animate({color: '#333', backgroundColor: '#fff'}, 1000);
        this.destroy();
}, { offset: '70%' });


var $innovation= $('#services i.fa.innovation');

$innovation.waypoint(
    function(){
        $innovation.stop().delay(2000).animate({color: 'white', backgroundColor: '#FCAC45'}, 1000).animate({color: '#333', backgroundColor: '#fff'}, 1000);
        this.destroy();
}, { offset: '70%' });


//Projects


var $projects= $('#project .img-parent img');

$projects.waypoint(
    function(){
    setTimeout(function(){
       $projects.stop().removeClass('imgblur'); 
    }, 1000); 
}, { offset: '70%' });


var $map= $('.map-thing');

$map.waypoint(function(){
    $map.addClass('animated fadeInUp');
    console.log("this is working!");

}, { offset: '30%' });


var $contact= $('.content');

$contact.waypoint(function(){
    $contact.addClass('animated fadeInDown');
    console.log("HELLLOOOOOOOOOO");
}, { offset: '90%' });



//-----------------------------------------------

// Progress bars


// progressbar.js@1.0.0 version is used
// Docs: http://progressbarjs.readthedocs.org/en/1.0.0/



require.config({
    paths: {'progressbar': '../bower_components/progressbar.js/dist/progressbar'}
});

define(['progressbar'], function(ProgressBar) {
    var line = new ProgressBar.Line('#something');
});



$(function(){

var ProgressBar = require ('progressbar.js'); 

var bar = new ProgressBar.Circle('#something', {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 4,
  trailWidth: 1,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStylesomething: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#333', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '2rem';

bar.animate(1.0);  // Number from 0.0 to 1.0

});