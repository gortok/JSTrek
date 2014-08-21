var jsTrek = window.jsTrek;
jsTrek.main = {};

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

var initialize = function(settings) {
	jsTrek.main.settings = settings;
	renderMainGameScreen();
}

var renderMainGameScreen = function() {
	var canvas = document.getElementById('jsTrekWindow');
	var ctx = canvas.getContext('2d');
	window.jsTrek.paintWindow(canvas);
	window.jsTrek.paintBorder(canvas);
	window.jsTrek.main.paintStarField(createStarField());
}


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
	return starField;
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
	var line1 = "  1 2 3 4 5 6 7 8\n1 ";
	var field = line1;
	console.dir(starField);
	var n = 2;
	for(var i = 1; i < starField.length; i++) {
		field += starField[i] + " ";
		if (i % 8 == 0) {
			field += "\n" + n + " ";
			n++;
		}
	}
	return field.substring(0, field.length - 3);
}

var doItAll = function() {
	createStarField();
	console.log(paintStarField(starField));
}

window.jsTrek.main = jsTrek.main;