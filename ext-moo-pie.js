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
