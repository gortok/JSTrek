var jsTrek.main = window.jstTrek.main || {};

var star = { 
	chance: 08,
	types: ['active'],
	display: '*'
};

var starBase = {
	chance: 01,
	types: ['research','supply','friendly','enemy'],
	display: '@'
	
};

var planet = {
	chance: 01,
	types: ['O','M','K','Z'],
	display: '$'
};

var empty = {
	display: '.'
};

var choices = [star,starBase,planet];

var starField = [];
var createStarField = function() {
	for (var k = 1; k <= 64; k++) {
		var choice = determineObject(choices);
		if (choice !== undefined) {
			starField[k] = choice;
		}
		else {
			starField[k] = empty.display;
		}
	}
};
var determineObject = function(arr) {
	console.dir(arr);
	var chosenObject = undefined;
	for (var i = 0; i < arr.length; i++) {
		if (chosenObject !== undefined) { break; }
		if (getRandomArbitrary(1,64) <= arr[i].chance) {
			chosenObject = arr[i].display;
		}
	}
	return chosenObject;
};

var getRandomArbitrary = function(min,max) {
	return Math.floor(Math.random() * (max-min + 1)) + min;
};

var paintStarField = function(starField) {
	var field = "";
	console.dir(starField);
	for(var i = 1; i < starField.length; i++) {
		field += starField[i];
		if (i % 8 == 0) {
			field += "\n";
		}
	}
	return field;
}