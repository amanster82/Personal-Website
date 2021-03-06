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

	
    console.log("Hello there! If you are reading this, feel free to look over my source code. Have a good day!");


	//hide .navbar first
	$(".navbar").hide();

var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    $('.myName').addClass('animated tada').one(animationEnd, function(){
        AmanBhayani();
    });

    function AmanBhayani () {
        $('.AmanBhayani').addClass('animated rubberBand').one(animationEnd, function(){
            $('.coolThings').addClass('animated zoomIn').one(animationEnd, function(){
                $('.arrow').addClass('animated flip');
            });
        });
    }
   
	//fade in .navbar
	$(function(){
		$(window).scroll(function(){
		
		if ($(this).scrollTop() > 500) 
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


    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $(function() {
        $('a.page-scroll').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });
    });



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



$("#services i.fa, #button_click").hover(

//Mouse In
    function() {
    $(this).stop().animate({color: 'white', backgroundColor: '#FCAC45'}, 300);
    }, 
//Mouse Out
    function(){
    $(this).stop().animate({color: '#333', backgroundColor: '#fff'}, 300);
});



/* Blurring to focus on projects being selected. */


$("#project .img-parent").hover(
	//console.log("inside hover");
    function (){
        $(this).addClass("active");
        $("#project .img-parent").addClass("imgblur");
    }, 

    function(){
        $(this).removeClass("active");
        $("#project .img-parent").removeClass("imgblur");
    },
		
);


$("#mail").hover(function() {

  //console.log("inside hover");
    $(this).stop().animate({color: '#ffc107', fontSize: '2.5em'}, 300);
    }, function(){
    $(this).stop().animate({color: 'white', fontSize: '2em'}, 300);
});


$("#facebook").hover(function() {

 // console.log("inside hover");
    $(this).stop().animate({color: '##415e9b', fontSize: '2.5em'}, 300);
    }, function(){
    $(this).stop().animate({color: 'white', fontSize: '2em'}, 300);
});

$("#linkedin").hover(function() {
 
 // console.log("inside hover");
    $(this).stop().animate({color: '#0077b5', fontSize: '2.5em'}, 300);
    }, function(){
    $(this).stop().animate({color: 'white', fontSize: '2em'}, 300);
});

$("#github").hover(function() {

 // console.log("inside hover");
    $(this).stop().animate({color: '#4caf50', fontSize: '2.5em'}, 300);
    }, function(){
    $(this).stop().animate({color: 'white', fontSize: '2em'}, 300);
});



//about

var $aboutsection= $('#about img');

$aboutsection.waypoint(function(){
    $aboutsection.addClass('animated bounceIn').css("opacity", "");
 //   console.log("this is working!");

}, { offset: '70%' });

//Service
var flag = true;

var $communication= $('#services i.fa.communication');
$communication.waypoint(
    function communication(){
        if(flag){
            $communication.stop().animate({color: 'white', backgroundColor: '#FCAC45'}, 1000, function(){
                design();
            }).animate({color: '#333', backgroundColor: '#fff'}, 1000, "swing");
            flag = false;
        }
    }, { offset: '70%' });



var $design= $('#services i.fa.design');
function design(){
        $design.stop().animate({color: 'white', backgroundColor: '#FCAC45'}, 1000,  function(){
            innovation();
        }).animate({color: '#333', backgroundColor: '#fff'}, 1000);
    };


var $innovation= $('#services i.fa.innovation');
function innovation(){
        $innovation.stop().animate({color: 'white', backgroundColor: '#FCAC45'}, 1000, function(){
            experience();
        }).animate({color: '#333', backgroundColor: '#fff'}, 1000);
    };


var $ExperienceButton= $('#button_click');
function experience(){
        $ExperienceButton.stop().animate({ fontSize: '2em', borderColor: 'blue'}, 1000).animate({fontSize: '1.2em', color: '#333', backgroundColor: '#fff', borderColor: 'blue',  border: 'solid'}, 1000);
    };



//=======================modal waypoints 


    var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

    var $AmanBhayani=$('.tt');
            $AmanBhayani.addClass('animated flipInX').one(animationEnd,function(){
                $(this).removeClass('animated flipInX');
                qualEx('.item-intro');
    });

    function qualEx(qualEx){
            $(qualEx).addClass('animated fadeInDown').one(animationEnd, function(){
                 $(this).removeClass('animated fadeInDown');
                 $(this).css('opacity', '1');
                 
            });
            education('#mapEd');
        }


    function education(mapEd){
            $(mapEd).addClass('animated fadeIn').one(animationEnd, function(){
                 $(this).removeClass('animated fadeIn');
                 $(this).css('opacity', '1');
                 
            });
            university('.modal-body');

    }


    function university(uni){
            $(uni).addClass('animated fadeIn').one(animationEnd, function(){
                 $(this).removeClass('animated fadeIn');
                 $(this).css('opacity', '1');

             });
    }


    /**function map(map){
            $(map).addClass('animated fadeInUp').one(animationEnd, function(){
                 $(this).removeClass('animated fadeInUp')
                 $(this).css('opacity', '1');
                 $("#portfolioModal1").on('mouseenter', function() {
                    google.maps.event.trigger(map, 'resize');

                    console.log("ummmmmm is it working??");
});
            });

    } **/


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


    $(".Experience").waypoint(function(){
            $(".Experience").addClass('animated fadeIn').css('opacity', '');

    }, {offset: '70%'});


    $("#cgi").waypoint(function(){
            $("#cgi").addClass('animated fadeIn').css('opacity', '');

    }, {offset: '70%'});

       $("#title-cgi").waypoint(function(){
            $("#title-cgi").addClass('animated fadeIn').css('opacity', '');

    }, {offset: '70%'});

    
    $("#ul-cgi").waypoint(function(){
            $("#ul-cgi").addClass('animated fadeIn').css('opacity', '');

    }, {offset: '70%'});


    $("#ombuds").waypoint(function(){
            $("#ombuds").addClass('animated fadeIn').css('opacity', '');

    }, {offset: '90%'});


    $("#title-ombuds").waypoint(function(){
            $("#title-ombuds").addClass('animated fadeIn').css('opacity', '');

    }, {offset: '90%'});


    $("#ul-ombuds").waypoint(function(){
            $("#ul-ombuds").addClass('animated fadeIn').css('opacity', '');

    }, {offset: '95%'});

    $("#close_button").waypoint(function(){
            $("#close_button").addClass('animated fadeIn').css('opacity', '');

    }, {offset: '90%'})

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
   // console.log("this is working!");

}, { offset: '50%' });


var $contact= $('.content');

$contact.waypoint(function(){
    $contact.addClass('animated fadeInDown');
    //console.log("HELLLOOOOOOOOOO");
}, { offset: '50%' });


var $typewriter= $('.withLove');

$typewriter.waypoint(function(){
    
    $typewriter.addClass('typewriter');
    //console.log("is it typewriter");

}, { offset: '95%' });


