/**
 * RUZEE.Ellisis 0.1
 * (c) 2007 Steffen Rusitschka
 * jQuery port & modifications by Florent Bonomo
 *
 * RUZEE.Ellipsis is freely distributable under the terms of an MIT-style license.
 * For details, see http://www.ruzee.com/
 */

(function(jQuery)
{
	jQuery.fn.extend(
	{
		ellipsis : function(options)
		{
			var defaults =
			{
				_class : 'ellipsis',
				block : 'span',
				ellipsis : '...',
				save_to_attr : false
			};

			return this.each(
				function()
				{
					// get selected element
					var e = jQuery(this);
					
					// merge default options & user options
					var o =  jQuery.extend(defaults, options);
					
					// get element's width
					var w = e.width();

					// get element's content
					var t = e.html();
					
					// Save the original text in given attribute
					if(o.save_to_attr !== false)
					{
						e.attr(o.save_to_attr, t);
					}
					
					// wrap element inside a block
					e.wrapInner('<' + o.block + '></' + o.block + '>');
					
					// set container to work with
					c = e.children(o.block);
					
					// while the text doesn't fit in its dedicated container
					while(t.length > 0 && c.width() >= w)
					{
						// remove one char
						t = t.substr(0, t.length - 1);
						
						// add '…' at the end
						c.html(t + o.ellipsis);
					}
					
					// remove working block and class
					e.html(c.html()).removeClass(o._class);
				}
			);
		}
	});
})(jQuery);