// ==UserScript== 
// // @name Moo Pie
// // @namespace http://archive.voodoowarez.com/moopie
// // @description Allow old MooTools sites to run while allowing the web to advance.
// // @include http://www.yourstupidoldsite.com/* 
// // ==/UserScript==

// via https://github.com/mootools/mootools-core/blob/master/Source/Types/Array.js
Array.prototype.flatten = function(){
	var array = [];
	for (var i = 0, l = this.length; i < l; i++){
		var type = typeOf(this[i]);
		if (type == 'null') continue;
		array = array.concat((type == 'array' || type == 'collection' || type == 'arguments' || instanceOf(this[i], Array)) ? Array.flatten(this[i]) : this[i]);
	}
	return array;
}
