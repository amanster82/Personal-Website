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

	$(function(){
		$('#intro').hide();
		$('#intro').fadeIn(2000);
	});

});




$("#services i.fa").hover(function() {

  console.log("inside hover");
    $(this).stop().animate({color: 'white', backgroundColor: '#FCAC45'}, 300);
    }, function(){
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
