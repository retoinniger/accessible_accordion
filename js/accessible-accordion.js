// Accessible Accordion

$(document).ready(function () {
	'use strict';
	// alles schliessen
  $('.acc-link').not('.open').next('.accordion').hide();
	
  $('.acc-link').click(function () {
		// wenn geöffnet
    if ($(this).hasClass('open')) {
      $(this).next('.accordion').slideToggle(500);
			$(this).attr('aria-expanded', false);
      $(this).removeClass('open');
    } else {
			// schliesst geöffnete "Auskommentiern wenn nicht erwünscht"
			$('.open').next('.accordion').slideToggle(500);
			$('.open').attr('aria-expanded', false);
      $('.open').removeClass('open');
			// wenn geschlossen
      $(this).next('.accordion').slideToggle(500);
      $(this).addClass('open');
			$(this).attr('aria-expanded', true);
    }
    return false;
  });
});