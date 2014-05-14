var jsTrek = window.jsTrek || {};

var CURRENT_REV = "0.1";
var BACKGROUND_COLOR = "rgb(00,00,84)";
var BACKGROUND_BORDER = "rgb(252,252,252)";
var TITLE_TEXT_COLOR = BACKGROUND_BORDER;
var WINDOW_HEIGHT = 480;
var WINDOW_WIDTH = 640;

var _instructionScreen = false;
var _splashScreen = true;
var _gameScreen = false;

var KC_ENTER = 13;
var KC_Y = 121;
var KC_N = 110;
var KC_Q = 113;

var ranks = [
	{
		level: 1,
		title: "Lt. Cmdr"
	},
	{
		level: 2,
		title: "Cmdr."
	},
	{
		level: 3,
		title: "Captain"
	},
	{	
		level: 4,
		title: "Commodore"
	},
	{
		leve: 5,
		title: "Admiral"
	}
];

var gameSettings = {
	name: "",
	rank: 1,
	destruct: ""
};

var paintWindow = function(canvas) { 
		var ctx = canvas.getContext('2d');
		ctx.fillStyle = BACKGROUND_COLOR;
		ctx.fillRect(0,0, WINDOW_WIDTH, WINDOW_HEIGHT);
	}
	
var paintBorder = function(canvas) { 
	var ctx = canvas.getContext('2d');
	//ctx.fillRect(0,0, WINDOW_WIDTH, WINDOW_HEIGHT);
	ctx.strokeStyle = BACKGROUND_BORDER;
	ctx.strokeRect(2,2,WINDOW_WIDTH - 4, WINDOW_HEIGHT - 4);
	
}

var paintMainWindow = function(canvas, callback) { 
	_splashScreen = true;
	var ctx = canvas.getContext('2d');
    //title
	ctx.fillStyle = TITLE_TEXT_COLOR;
	ctx.font = "normal 72px Times New Roman";
	ctx.fillText("JS Trek", 200, 90);
    //title shadow
	ctx.font = "normal 72px Times New Roman";
	ctx.fillStyle = "rgb(0,0,0)";
	ctx.fillText("JS Trek", 199, 89);

	ctx.font = "normal 72px Times New Roman";
	ctx.fillStyle = "rgb(230,230,230)";
	ctx.fillText("JS Trek", 198, 88);

	//top border
	ctx.fillStyle = "rgb(0,170,170)";
	ctx.fillRect(0,0, WINDOW_WIDTH, 15);

	//revision text
	ctx.fillStyle = "white";
	ctx.font = "bold 10px system";
	ctx.fillText("Revision " + CURRENT_REV, 15,12);
	
	//enterprise ship
	ctx.fillStyle = "white";
	ctx.fillRect(150, 150, 60, 8);
	ctx.fillStyle = '#ccddff';
	
	//bottom part of connecting section
	ctx.beginPath();
	ctx.moveTo(196,158);
	ctx.lineTo(225, 170);
	ctx.strokeStyle = 'rgb(241,241,241)';
	ctx.lineWidth = 2;
	ctx.stroke();
	ctx.closePath();
	//top part of connection saucer
	ctx.beginPath();
	ctx.moveTo(189,200);
	ctx.lineTo(199,200);
	ctx.strokeStyle = 'rgb(241,241,241)';
	ctx.lineWidth = 2;
	ctx.stroke();
	ctx.closePath();
	callback();
}
  

jsTrek.initialize = function() { 
	var canvas = document.getElementById('jsTrekWindow');
	paintWindow(canvas);
	//paintBorder(canvas);
	paintMainWindow(canvas, function() { 
		document.onkeypress = zx; 
		function zx(evt) {
			paintInstructionScreen(canvas, function() {
				document.onkeypress = ev;
				function ev(e){
					keyPressInstructionScreen(e, instructions, gameloop);
				};
			});
		};
	});
};
	
var gameloop = function() { 
	window.jsTrek.main.initialize(gameSettings);
};

var instructions = function() {
	window.alert("Instructions display here!");
};

var paintShipNameLogo = function(canvas) { 
	var ctx = canvas.getContext('2d');
    ctx.fillStyle = TITLE_TEXT_COLOR;
	ctx.font = "normal 32px Times New Roman";
	ctx.fillText("U.S.S. Hood", 200, 90);
	
}

var paintInstructionScreen = function(canvas, callback) {
	paintWindow(canvas);
	paintShipNameLogo(canvas);
	callback();
}

var keyPressInstructionScreen = function(e, yesCallback, noCallback) {
	window.alert("HAI");
	var keyCode = (e||event).keyCode;
	if (keyCode == KC_Y || keyCode == KC_ENTER) {
		yesCallback();
	}
	if (keyCode == KC_N) {
		noCallback();
	}
	if (keyCode == KC_Q) {
		jsTrek.prototype.quit();
	}
}

window.jsTrek = jsTrek;