goog.provide('zoo.Game');

goog.require('lime.Director');
goog.require('lime.Layer');
goog.require('lime.Scene');

zoo.Game = function(mode) {
	lime.Sprite.call(this);

	var mode = mode,
		WIDTH = 1280,
		HEIGHT = 720,
		posX = 0,
		posY = 0,
		anchX = 0,
		anchY = 0;

	switch (mode) {
		case 1:
			var newSprites = Array();
			newSprites[0] = new lime.Sprite().setSize(WIDTH,HEIGHT).setFill('assets/maps/map.png').setPosition(posX, posY).setAnchorPoint(anchX,anchY);
			newSprites[1] = new lime.Sprite().setSize(60,100).setFill('assets/sprites/illuminati.png').setPosition(200,200);
			newSprites[2] = new lime.Sprite().setSize(60,100).setFill('assets/sprites/monster.png').setPosition(400,500);
			break;
		case 2:
			posX = 0; 
			posY = 0; 
			anchX = 0; 
			anchY = 0;
			break;	
	}


	


    return newSprites;
    

}
goog.inherits(zoo.Game, lime.Sprite);
