window.addEventListener("load", function() {
      // Now set up your game (most games will load a separate .js file)
      var Q = Quintus({development: true)                          // Create a new engine instance
              .include("Sprites, Scenes, Input, 2D") // Load any needed modules
              .setup({
				width:1440,
				height: 900,
				upsampleWidth: 420,
				upsampleHeight: 320,
				
				downsampleWidth: 1024,
				downsampleHeight: 768
				
			})                           // Add a canvas element onto the page
              .controls()                        // Add in default controls (keyboard, buttons)
              .touch();  
	Q.gravityX = 0;
	Q.gravityY = 0;
	
	var SPRITE_PLAYER = 1;
	var SPRITE_EMPTY = 2;
	var SPRITE_STAR = 4;
	var SPRITE_PLANET =8;
	var SPRITE_ENEMY = 16;
	var SPRITE_STARBASE = 32;
    Q.input.keyboardControls();
	Q.input.joypadControls();
    Q.scene("board", function(stage) {
		Q.load("assets/sprites/empty_grid_tile.png", "sprites.json");
		Q.stageScene("board");
	});
	Q.Sprite.extend("Empty_Grid_Tile", {
		init: function(p) {
			this._super(p, {
				x:1,
				y:1
			});
		}
	});
	
	for(var i = 1; i <=10; i++) {
		for (var j = 1; j <=10; j++ {
			var b = new Q.Empty_Grid_Tile({ x: i*100, y: j*100, scale: 2 });
		}
	}	
	
}