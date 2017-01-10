
$( document ).ready(function() {
    var $container = $('.isotope');
    
    $('#filters li').click(function(){
		var $this = $(this);
        
        if ( !$this.hasClass('is-checked') ) {
          $this.parents('#options').find('.is-checked').removeClass('is-checked');
          $this.addClass('is-checked');
        }
      var selector = $this.attr('data-filter');
      $container.isotope({  itemSelector: '.item', filter: selector });
      return false;
    });
    
    jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},2000);
	});

   var counter = 1;
  $('.about-tabs li').each(function(){
    $(this).attr('data-tab', counter);
    counter++;
  });

  counter = 1;
  $('.tab-content').each(function(){
    $(this).attr('data-tab', counter);
    counter++;
  });

  $(document).on('click', '.about-tabs li', function(){
    $('.tabs .active').removeClass('active');
    $(this).addClass('active');
    var tab = $(this).attr('data-tab');
    $('.tab-content[data-tab='+ tab +']').addClass('active');
   
  });

	$('.slider-for').slick({
    	slidesToShow: 1,
    	slidesToScroll: 1,
    	arrows: false,
    	fade: true,
    	autoplay: true,
    	asNavFor: '.slider-nav'
	});
	$('.slider-nav').slick({
    	slidesToShow: 4,
    	slidesToScroll: 1,
    	asNavFor: '.slider-for',
    	dots: false,
    	centerMode: true,
    	focusOnSelect: true
	});		

	
});

