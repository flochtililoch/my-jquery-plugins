# jquery.plugins

## jquery.ellipsis.js

Truncate text with dots

Requirements :

* text truncated will fit in just one line
* following css properties must be declared to the html block
    
	    {
	      display:block;
	      overflow:hidden;
	      white-space:nowrap;
	      text-overflow:ellipsis; /* IE only */
	    }

### Available options

* `_class` *(string)*
  
  default : `'ellipsis'`
  
  class present on target html element, to be removed when truncating is done
* `block` *(string)* 

  default : `'span'`

  html element to be used to wrap truncated text into

* `ellipsis` *(string)*

  default : `'...'`

  text to be concatenated to truncated text

* `save_to_attr` *(mixed)*

  default : `false`

  if defined (as a string), will save the original text as an attribute

### Usage

    jQuery('.ellipsis').ellipsis();
    jQuery('.ellipsis').ellipsis({ save_to_attr : 'title' });


## jquery.niceinput.js

Decorate existing html blocks with custom / predefined markup

Usefull in drupal, especially when theming forms

### Available options

* `attr` *(string)*
  
  default : `'niceinput'`
  
  attribute to be added when processing is done, to filter out already processed elements

* `notin` *(array)*

  default : `[]`

  list of jquery selector

  indicate to the plugin which elements childs of resulting elements to not include

* `wrap` *(string)*

  default : `<span class="niceinput"><strong/></span>`

  html element to wrap targeted element into


* `insert` *(object)*

  default : `{ parent : null, before : '<span/>' }`

  list of jquery methods to apply to targeted element after the wrapping


### Usage

    // Decorate links with 'buttons' class
    jQuery('a.buttons').niceinput();

    // Decorate submit buttons except childs of #search-block-form
    jQuery('input[type=submit]').niceinput({
		notin : ['#search-block-form']
	});	

    // Decorate file fields and bind event to populate a div containing input's value
	jQuery('input[type=file]').niceinput({
		insert : { before : '<span class="filepath form-text"/><span class="niceinput"><span/><strong>Browse...</strong></span>' },
		wrap : '<div class="niceinputfile"></div>'
	}).change(function(){
		jQuery(this).siblings('.filepath').html(this.value.replace(/C:\\fakepath\\(.*)/, '$1'));
	}).change();


## jquery.smartlabel.js

Handle hiding / showing of overlayed input labels

### Available options

option must be an object containing pairs of keys / values, keys being events name and values being objects containing following keys : 

* `label` *(string)*

  jQuery method to call to target label element; in most cases, `'prev'` would work

* `method` *(string)*

  jQuery method to call when event is triggered

* `attr1` *(mixed)*

  1st argument to pass to previously defined method

* `attr2` *(mixed)*

  2nd argument to pass to previously defined method

* `attr3` *(mixed)*

  3rd argument to pass to previously defined method

### Default options

    focus :
	{
		label : 'prev',
		method : 'fadeOut',
		attr1 : 150,
		attr2 : null,
		attr3 : null
	},
	blur :
	{
		label : 'prev',
		value: '',
		method : 'fadeIn',
		attr1 : 150,
		attr2 : null,
		attr3 : null
	}
	
### Usage

    jQuery('#header #block-search-0 input[type=text], .newsletter input[type=text]').smartlabel();