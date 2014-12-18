goog.provide('zoo.Map');

goog.require('lime.Sprite');

/**
* Map elements
* 
* @param {} gameObj
*/

var tileObj = {
      grass_tile: 'assets/maps/Untitled-1.png',
      road_tile: 'assets/maps/Untitled-2.png'
   }

zoo.Map = function(gameObj, playerObj) {
   goog.base(this);
   this.setAnchorPoint(0, 0);
   this.setSize(gameObj.tile_size,gameObj.tile_size);

   switch (gameObj.tile_type) {

   	case 0:
   		this.setFill(tileObj.grass_tile);
   		break;

   	case 1:
	   	this.setFill(tileObj.road_tile);
	   	break;
   }
   
}

goog.inherits(zoo.Map,lime.Sprite);