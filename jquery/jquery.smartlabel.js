/*!
 * Smart label jQuery plugin
 * (c) 2011 Florent Bonomo
 * http://github.com/flochtililoch
 */
(function(jQuery)
{
	jQuery.fn.extend(
	{
		smartlabel : function(options)
		{
			var defaults =
			{
				focus : 						// event name - must be a real javacsript even string
				{
					label : 'prev',				// jquery method to find label relatively from selected element
					method : 'fadeOut',			// method to apply when event is triggered
					attr1 : 150,				// argument 1 passed to the previous method (optional)
					attr2 : null,				// argument 2 passed to the previous method (optional)
					attr3 : null				// argument 3 passed to the previous method (optional)
				},
				blur : 							// event name - must be a real javacsript even string
				{
					label : 'prev',				// jquery method to find label relatively from selected element
					value: '',					// value to be matched to validate the event action
					method : 'fadeIn',			// method to apply when event is triggered
					attr1 : 150,				// argument 1 passed to the previous method (optional)
					attr2 : null,				// argument 2 passed to the previous method (optional)
					attr3 : null				// argument 3 passed to the previous method (optional)
				}
			};

			// merge default options & user options
			options =  jQuery.extend(defaults, options);

			return this.each(
				function()
				{
					var elt = jQuery(this);
					
					// for each element matching the selection
					jQuery.each(options, function(e, o)
					{
						// for each event specified in options
						elt.bind(e, function()
						{
							// condition to pass to trigger the action
							if(typeof o.value !== 'undefined' && this.value !== o.value)
							{
								return false;
							}
							
							// action call
							elt[o.label]()[o.method](o.attr1, o.attr2, o.attr3);

						// Trigger events at page load for proper initialization
						})[e]();
					});
				}
			);
		}
	});
})(jQuery);