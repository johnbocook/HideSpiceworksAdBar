// ==UserScript==
// @name        Remove Spiceworks Ticket Sidebar
// @namespace   http://helpdesk.ohiochristian.edu/tickets/
// @description Removes the sidebar and makes ticket views full width.
// @author      jbocook
// @copyright   2015
// @version     1.0.0
// @icon        https://raw.githubusercontent.com/johnbocook/HideSpiceworksAdBar/master/img/ticket.png
// @homepageURL https://github.com/johnbocook/HideSpiceworksAdBar
// @supportURL  https://github.com/johnbocook/HideSpiceworksAdBar/issues
// @include     *
// @grant       none
// ==/UserScript==

// You should change the @include to your spiceworks URL.

(function() {var css = [
	"section#content_wrapper {",
	"  padding-right: 0px !important;",
	"}",
	"section#content_wrapper div#sidebar {",
	"  display: none !important;",
	"}"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node); 
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();