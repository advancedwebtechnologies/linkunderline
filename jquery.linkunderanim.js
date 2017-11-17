/*!
 * jQuery  plugin
 * Original author: Vasil Khachidze
 * Further changes, comments: vasil.khachidze@mail.com
 * Licensed under the MIT license
 */
(function($){
	$.fn.linkUnderlineAnim = function(options) {
		
		var defaults = $.extend({
			"speed" 			: 300,
			"color" 			: "#DB3340",
			"thickness"			: 2,
			"distance"			: 0
		}, options);
			
		return this.each(function() {
		
			var items = $("li a");
			var o = defaults;

			items.css("position", "relative")
				 .css("text-decoration", "none")
				 .css("padding-bottom", o.distance);
			
			var css = 'ul li a {position: relative; text-decoration: none;}' +
				'ul li a:before {content: "";position: absolute; width: 100%; height: ' + o.thickness + 'px; bottom: 0; left: 0;'+
				'background-color: ' + o.color + ';' +
				'red; visibility: hidden; -webkit-transform: scaleX(0); transform: scaleX(0);' +
				'-webkit-transition: all ' + o.speed/1000 +'s ease-in-out 0s; transition: all ' + o.speed/1000 + 's ease-in-out 0s;}' +
				'ul li a:hover:before {visibility: visible; -webkit-transform: scaleX(1); transform: scaleX(1);}',
				
				head = document.head || document.getElementsByTagName('head')[0],
				
				style = document.createElement('style');

			style.type = 'text/css';
			if (style.styleSheet){
			  style.styleSheet.cssText = css;
			} else {
			  style.appendChild(document.createTextNode(css));
			}

			head.appendChild(style);
		});
		
	}
})(jQuery);