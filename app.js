 $(document).ready(function(){
 	$('.btn__drank').click(function(){
 		$('.nav').toggleClass('active');
 	})
 	$('.btn__green').click(function(){
 		$('.contact__list').toggleClass('active');
 	})
 	$('.close').click(function(){
 		$('.nav').removeClass('active');
 	})
 	$('.btn__close').click(function(){
 		$('.contact__list').removeClass('active');
 	})

//  	$(window).resize(function(){
// 	 $('.nav__reponsive').removeClass('active');
// });
 	if ($(window).width() >= 0) {

 	$('.nav').removeClass('active');

}	
	if ($(window).width() >= 0) {

 	$('.contact__list').removeClass('active');

}
 });