goog.provide('zoo.Game');

goog.require('lime.Director');
goog.require('lime.GlossyButton');
goog.require('lime.Layer');
goog.require('lime.Scene');
goog.require('lime.audio.Audio');

zoo.Game = function(mode) {
	lime.Sprite.call(this);

	var mode = mode,
		WIDTH = 1280,
		HEIGHT = 720;

	switch (mode) {
		case 1:
			var posX = 0,
				posY = 0,
				anchX = 0,
				anchY = 0;
			break;
		case 2:
			this.posX = 0;
			this.posY = 0;
			this.anchX = 0;
			this.anchY = 0;
			break;	
	}

	var layer = new lime.Layer().setPosition(posX,posY).setRenderer(lime.Renderer.CANVAS).setAnchorPoint(anchX, anchY),
    	map = new lime.Sprite().setSize(WIDTH,HEIGHT).setFill('assets/maps/map.png').setPosition(posX, posY).setAnchorPoint(anchX,anchY);

    return map;
    

}
goog.inherits(zoo.Game, lime.Sprite);
