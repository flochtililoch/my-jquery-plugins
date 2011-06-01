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

Equivalent de la propriété native d'IE *text-overflow:ellipsis*

### Available options
* _class (string) | default : 'ellipsis'  |  class present on target html element, to be removed when truncating is done
* block (string) | default : 'span'  |  html element to be used to wrap truncated text into
* ellipsis (string) | default : '...'  |  text to be concatenated to truncated text
* save_to_attr (mixed) | default : false  |  if defined (as a string), will save the original text as an attribute

### Usage
    jQuery('.ellipsis').ellipsis();
    jQuery('.ellipsis').ellipsis({ save_to_attr : 'title' });