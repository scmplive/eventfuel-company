


/*global $:false */
/*global window: false */

(function(){
  "use strict";


$(function ($) {

      


var timeOut, callNext = function(){
	clearTimeout(timeOut);
	timeOut = setTimeout(function(){
		$.fn.multiscroll.moveSectionDown();
	},5000);
};

$('#myContainer').multiscroll({
	// anchors: ['first', 'second', 'third'],
	menu: '#menu',
	navigation: true,
	navigationTooltips: ['One', 'Two', 'Three', 'Four'],
	loopBottom: true,
	loopTop: true,
	afterLoad: callNext
});
callNext();


$('.ms-section').mouseenter(function(){
    $(this).find('.ms-overlay').fadeIn(1000);
})
$('.ms-section').mouseleave(function(){
    $('.ms-overlay').fadeOut(500);
})


  
});
// $(function ($)  : ends

})();
//  JSHint wrapper $(function ($)  : ends


