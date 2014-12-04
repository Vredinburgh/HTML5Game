//namespace
goog.provide('zoo.Sprite');


//dependencies
goog.require('lime.Director');
goog.require('lime.Layer');
goog.require('lime.Scene');
goog.require('zoo');
goog.require('zoo.Game');

zoo.Sprite = function(map, sprite) {

		var map = map,
			sprite = sprite;

      /*hero.life = 20;
        hero.money = 100;
        hero.attack = 5;*/

  	var move = goog.events.listen(map, ['mousedown','touchstart'], function(e) {
        var movement = new lime.animation.MoveTo(e.position.x,e.position.y).setDuration(.8); hero.runAction(movement);
    });
}