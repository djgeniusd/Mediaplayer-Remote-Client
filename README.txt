This code is written by Dick van der Leeden (aka DjGeniusD)

free to use:

https://github.com/djgeniusd
https://stackoverflow.com/users/7806844/djgeniusd

A scaleable html 3 column page.

section {
	height: 85vh;
	background:#000;
	float: left;
	width: 30%;  <-- Change the percentage width of the sections (CSS) to add or delete sections from the page.
			 (don't forget to create a new section on the HTMl)
}



LINK BUTTON TO IMAGE:
  
Give the image a className == data-functionval of the button


<div id="container"><img class="hidden x1" src="image/1.png" alt=""/></div>    
  
<a class="button button_orange" data-functionval="x1" onmouseenter="show(this)" onmouseleave="hide(this)">1</a>

ADD OR DELETE BUTTONS
Buttons wil be set to a second row, when beneath a certain percentage.

ONMOUSEENTER / ONMOUSELEAVE
can be changed to onclick

NO AUTO HIDE?
If you delete the hide function from the button, image will be shown continuously.

Enjoy
DJ



     