var jsTrek.main = window.jstTrek.main || {};

var star2 = { 
	chance: 08,
	types: ['active'],
	display: '*'
};

var base2 = {
	chance: 01,
	types: ['research','supply','friendly','enemy'],
	display: '@'
	
};

var planet2 = {
	chance: 01,
	types: ['O','M','K','Z'],
	display: '$'
};

var choices = [star2,base2,planet2];

var nearStarField = [[]];

var populateNearStarField = function() {
	var chosen = [];
	for (var i = 0; i < 10; i++) {
		for (var j = 0; j < 10; j++) {
			for (var k = 0; nearStarField[j,i] == undefined && k < choices.length; k++) {
				if (getRandomArbitrary(1,100) <= choices[k].chance && !containsObject(choices[k], chosen)) {
					nearStarField[j,i] = choices[k];
					if (choices[k] != star2) {
						chosen.push(choices[k]);
					}
					console.log(choices[k].display);
					break;
				}
			}	
		}	
	}
	for (var i = 0; i < 10; i++) {
		var line = '';
		for (var j = 0; j < 10; j++) {
			if (nearStarField[j,i] == undefined) {
				line += ".";
			}
			else {
				line += nearStarField[j,i].display;
			}
		}
		console.log(line);
	}
	console.dir(nearStarField);
	
};
var containsObject = function(obj, list) {
	var i;
	for (i = 0; i < list.length; i++) {
		if (list[i] === obj) {
			return true;
		}
	}
	return false;
}

var getRandomArbitrary = function(min,max) {
	return Math.floor(Math.random() * (max-min + 1)) + min;
};