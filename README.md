# linkunderline
jQuery plugin to create an animated underline under the text links.

To create an animated underline on a link, you create a navigation with UL element and anchor elements, and invoke linkUnderlineAnim method with optional parameters 'speed' and 'color'.

<a href="http://www.vasil.cf/linkunderanim/demo1.html">DEMO 1</a>

Example 1 (creates the animated underlines with default values: speed = 0.3 seconds, color = #DB3340, thickness = 2 and distance = 0)

HTML

&lt;ul id="links"&gt;

&lt;li><a href=""&gt;First link&gt;/a&gt;

&lt;li><a href=""&gt;Second link&gt;/a&gt;

&lt;li><a href=""&gt;Third link&gt;/a&gt;

&lt;/ul&gt;


JS

$("links").linkUnderlineAnim();
