//jQuery to collapse the navbar on scroll


/** $(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
}); **/


// My personal jQuery script

    $(window).load(function() {
        // Animate loader off screen
        $(".se-pre-con").hide();
    });

$(document).ready(function(){

	
	//hide .navbar first
	$(".navbar").hide();


    $('.myName').addClass('animated tada');
    $('.AmanBhayani').addClass('animated rubberBand');
    $('.coolThings').addClass('animated zoomIn');
    $('.arrow').addClass('animated flip');

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



//=======================modal waypoints 


$( "#portfolioModal1" ).scroll(function() {

    var $skills=$('.skills-title');

    $skills.waypoint( function(){
            $skills.addClass('animated fadeInUp');
    }, {offset: '90%'} );


    var $pl=$('.pl');

    $pl.waypoint( function(){
            $pl.addClass('animated slideInDown').css('opacity', '');
    }, {offset: '90%'} );


$("#java").waypoint(function(){
        $("#java").addClass('animated fadeInLeft').css('opacity', '');

}, {offset: '70%'});


$("#c").waypoint(function(){
        $("#c").addClass('animated fadeInLeft').css('opacity', '');

}, {offset: '70%'});

$("#python").waypoint(function(){
        $("#python").addClass('animated fadeInLeft').css('opacity', '');

}, {offset: '70%'});

$("#html").waypoint(function(){
        $("#html").addClass('animated fadeInLeft').css('opacity', '');

}, {offset: '70%'});


$("#js").waypoint(function(){
        $("#js").addClass('animated fadeInLeft').css('opacity', '');

}, {offset: '70%'});



});







//Projects


//flexslider
$("#initialize_modal").on("click", function() {
    console.log("it fired!")
setTimeout(function() {
      $('.flexslider1').flexslider({
        animation: "slide",
        prevText: "",
        nextText: "",
      });
    }, 100);

});

//flexslider
$("#initialize_modal2").on("click", function(){

    setTimeout(function() {
      $('.flexslider2').flexslider({
        animation: "slide",
        prevText: "",
        nextText: "",
      });
    }, 100);

});


$("#initialize_modal3").on("click", function(){

    setTimeout(function() {
      $('.flexslider3').flexslider({
        animation: "slide",
        prevText: "",
        nextText: "",
      });
    }, 100);

});


$("#initialize_modal4").on("click", function(){

    setTimeout(function() {
      $('.flexslider4').flexslider({
        animation: "slide",
        prevText: "",
        nextText: "",
      });
    }, 100);

});



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



/*GOOGLE MAPS FOR RESUME SECTION*/
$("#portfolioModal1").on('mouseenter', function() {
  google.maps.event.trigger(map, 'resize');

  console.log("ummmmmm is it working??");
});
















