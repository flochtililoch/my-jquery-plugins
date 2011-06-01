/*!
 * Nice Input jQuery plugin
 * (c) 2011 Florent Bonomo
 * http://github.com/flochtililoch
 */
(function(jQuery)
{
	$.fn.extend(
	{
		niceinput : function(o)
		{
			var d =
			{
				attr : 'niceinput',
				notin : [],
				insert : { parent : null, before : '<span/>' },
				wrap : '<span class="niceinput"><strong/></span>',
			};
			
			// merge default options & user options
			o =  $.extend(d, o);
			
			return jQuery(this).each(
				function()
				{
					var elt = jQuery(this);
					if(elt.attr(o.attr) !== undefined || elt.parents().filter(o.notin.join(',')).length)
					{
						return elt;
					}

					// flag element as decorated and decorate element
					elt.attr(o.attr,o.attr).wrap(o.wrap);
					if(typeof o.insert !== 'undefined')
					{
						jQuery.each(o.insert, function(k, v)
						{
							elt = elt[k](v);
						});
					}
				}
			);
		}
	});
})(jQuery);