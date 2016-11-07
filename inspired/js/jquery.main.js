(function($) { 
	$(function(){ 
		slider(); 
	/*This area from init Function*/ 
	}); 


	function slider(){ 
		var mySwiper = new Swiper ('.swiper-container', { 
		// Optional parameters 
			direction: 'horizontal', 
			        pagination: '.swiper-pagination',
				paginationClickable: true,
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
			loop: true 
		}) 
	} 

/*This area from declaration plugins*/ 
})(jQuery);

