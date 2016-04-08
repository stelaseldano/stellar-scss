## stellar-scss: a sass tool for easy and fast webapp scaffolding

**It is good at:**

* vertical align;
* and..centering things;
* arranging in rows (for wide screens) and columns (for small screens);
and of course
* responsive design with just a few lines of code.

**And easy because:**

there is a **parent** (element) and it has **children** (elements)..and the parent says how his children are arranged in terms of x-axis and y-axis.



## How to use:


* *First, let's see what the parent can do to children.*


Use ``@include row();`` or ``@include column();`` on a parent element to arrange its children in a row or a column.

Inside the brackets you can use ``$x: value`` and ``$y: value`` to specify how the children are positioned on the corresponding axis.

The values for the x-axis are: ``$left``, ``$center``, ``$right`` or ``$spread``.

The values for the y-axis are: ``$top``, ``$center``, ``$bottom`` or ``$spread``.

**Syntax**
		
``@include row($x: $center, $y: $bottom);``
or ``@include row($center, $bottom);``

``@include column($x: $center, $y: $bottom);`` or ``@include column($center, $bottom);``

Using ``$x:`` or ``$y:`` is optional.

**Default values:**

``@include row($x: $left, $y: $top;);``

``@include column($x: $left, $y: $top;);``


If using a default value, the property and its corresponding value can be skipped (e.g. ``@include row();`` or ``@include column();`` ) 	

**Sample:**

Тhis: ``@include row($x: $center, $y: $top);`` is the same like ``@include row($x: $center);`` and ``@include row($center)``.
However, if only ``$y`` needs to be changed from the default, use ``null`` in the place of ``$x:`` (e.g. ``@include row(null, $bottom);``). 


* *And now, what children can do despite their parent's say.*


A child can get a different positioning than the rest of the children.

Use ``@include rowed($y: value);`` when all the children are arranged in a row.
(values are the same: ``$top``, ``$center``, ``$bottom``).

Use ``@include columned($x: value);`` when the children are arranged in a column.
(values: ``@left``, ``@center``, ``@right``).


**Default naughty child values:**

``@include rowed($y: $top);``

``@include columned($x: $left);``



## Sample


**HTML code**

	<div class="parent">
		<div class="child"></div>
		<div class="child"></div>
		<div class="child naughty"></div>
		<div class="child"></div>
	</div>


**LESS code**

	.parent {
		@include row(@center, @top);
		height: 100vh;
		width: 960px;
		.child {
			height: 100px;
			margin: 20px;
			width: 100px;
		}	
		.naughty {
			@include rowed($y: $center);
		}
	}



## Browser Support

* Chrome **21+**
* Firefox **22+**
* IE **11**
* Edge
* Opera **12.10+**
* Safari **6.1+**

#### Issues

IE 11 does not position the children elements along y-axis correctly if the parent has ``min-height``. If you need to set ``min-height`` to the parent element, use ``height`` as well.


