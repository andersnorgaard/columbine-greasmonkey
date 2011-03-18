// ==UserScript==
// @name           columbine-userscript
// @namespace      dk.code3
// @description    Fix columbine in firefox/chromium
// @include        http://localhost:8080/mbservice/SessionServer.html
// @include        https://columbine.tdc.dk/komik/SessionServer?code=wsess&pseudonym=wxvis
// @include        https://columbine.tdc.dk/komik/SessionServer?code=wsess&pseudonym=wgdsp
// ==/UserScript==

document.title = "Columbine loaded and modified with userscript " + new Date()


function contentEval(source) {
	  // Check for function input.
	  if ('function' == typeof source) {
	    // Execute this function with no arguments, by adding parentheses.
	    // One set around the function, required for valid syntax, and a
	    // second empty set calls the surrounded function.
	    source = '(' + source + ')();'
	  }

	  // Create a script node holding this  source code.
	  var script = document.createElement('script');
	  script.setAttribute("type", "application/javascript");
	  script.textContent = source;

	  // Insert the script node into the page, so it will run, and immediately
	  // remove it to clean up.
	  document.body.appendChild(script);
	  document.body.removeChild(script);
	}

contentEval( function(){ 
	window['MAINFORM'] = function(key){		
		return document.forms[0].elements[key]
	}
	window['MAINFORM']['submit'] = function(){
		document.forms[0].submit();
	}
})

GM_log('Redefined functions');