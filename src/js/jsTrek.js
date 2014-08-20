var jsTrek = window.jsTrek || {};

var CURRENT_REV = "0.1";
var BACKGROUND_COLOR = "rgb(00,00,84)";
var BACKGROUND_BORDER = "rgb(252,252,252)";
var TITLE_TEXT_COLOR = BACKGROUND_BORDER;
var WINDOW_HEIGHT = 480;
var WINDOW_WIDTH = 640;

var gameText = [
	INSTRUCTION_QUESTION: {
		text: 'Do you require a briefing?'
		options: [
		{key: 'Y', event: launchInstructionScreen}, {key:'N',event: skip }]
		
	}];



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

var startGameLoop = function(canvas) {
	paintInstructionScreen(canvas);
}

var paintInstructionScreen(canvas) {
	clearGameScreen(canvas);
	paintInstructionQuestion(canvas);
}
var paintInstructionQuestion(canvas) {
	var c = canvas.getContext('2d');
	c.font = "normal 14px system";
	c.fillStyle = "rgb(0,0,0)";
	c.fillText(INSTRUCTION_QUESTION, 15, 200);

	$('#canvas-wrapper').append(INSTRUCTION_QUESTION.text);
}

var clearScreen = function(canvas) {
	paintWindow(canvas);
}

var mainText = function(canvas) { 
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
	
	
}  

jsTrek.initialize = function() { 
	var canvas = document.getElementById('jsTrekWindow');
	paintWindow(canvas);
	//paintBorder(canvas);
	mainText(canvas);
	startGameLoop();
}

window.jsTrek = jsTrek;