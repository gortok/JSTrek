var Q = Quintus()                          // Create a new engine instance
    .include("Sprites, Scenes, Input, 2D, Touch, UI") // Load any needed modules
    .setup()                           // Add a canvas element onto the page
    .controls()                        // Add in default controls (keyboard, buttons)
    .touch();                          // Add in touch support (for the UI)

Q.scene("initial", function(stage) {
    stage.collisionLayer
})