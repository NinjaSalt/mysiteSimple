$(document).ready(function(){
	resizeDiv();
	$(".project-description").load('nwc.html');
	$('.superhero').addClass('animated fadeInDown');
	//$("#linkedin").fadeIn(2000, fadeInEmail);
});
window.onresize = function(event) {
	resizeDiv();
}

function resizeDiv() {
	//vpw = $(window).width();
	var vph = $(window).height();
	console.log($(".project-description").height())
	if ($(".project-description").height()>vph){
		vph = $(".project-description").height()
	}

	var vph1=vph
	vph2=vph*.4
	var amount1 = vph1 + "px"
	var amount2 = vph2 + "px"
	var projects = document.getElementById("projects");
	$('.content').css('min-height', amount1);
	$('.aboutme').css('min-height', amount2);
}

$("#nwc").click(function(){
	//$('.project-description').addClass('animated bounceOut');
	$(".project-description").load('nwc.html')
	$('.project-description').addClass('animated bounceIn');
	window.setTimeout( function(){
                $('.project-description').removeClass('animated bounceIn');
            }, 1000);  
	//$(".project-description").slideDown(function(){$(".project-description").load('nwc.html').fadeIn();});
});

$("#fcl").click(function(){
	$(".project-description").load('fcl.html')
	$('.project-description').addClass('animated bounceIn');
	window.setTimeout( function(){
                $('.project-description').removeClass('animated bounceIn');
            }, 1000);  
	//$(".project-description").fadeOut(function(){$(".project-description").load('fcl.html').fadeIn();});
});

$("#m4000").click(function(){
	$(".project-description").load('m4000.html')
	$('.project-description').addClass('animated bounceIn');
	window.setTimeout( function(){
                $('.project-description').removeClass('animated bounceIn');
            }, 1000);  
	//$(".project-description").fadeOut(function(){$(".project-description").load('m4000.html').fadeIn();});
});

//$(".project-description").fadeOut(function() {
		//$(this).load('home.html').fadeIn();
	//});
