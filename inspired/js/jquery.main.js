(function($) { 
	$(function(){ 
		slider();
        socialMove();
	/*This area from init Function*/ 
	}); 

    function socialMove(){
        var opener = $('#share_links #up'),
            slideItem = $('.left_side .social_links'),
            activeclass= 'active';

        opener.on('click', function(e){
            e.preventDefault();
            if($(this).hasClass(activeclass)){
                $(this).removeClass(activeclass);
                slideItem.removeClass(activeclass);
            } else {
                $(this).addClass(activeclass);
                slideItem.addClass(activeclass);
            }
        })
    }

	function slider(){ 
		var mySwiper = new Swiper ('.swiper-container', { 
		// Optional parameters 
			direction: 'horizontal', 
			        pagination: '.swiper-pagination',
				paginationClickable: true,
				nextButton: '.swiper-button-next',
				prevButton: '.swiper-button-prev',
			loop: true,
            effect: 'fade'
		}) 
	} 

/*This area from declaration plugins*/ 
})(jQuery);

