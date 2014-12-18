//namespace
goog.provide('zoo.Sprite');


//dependencies
goog.require('lime.Director');
goog.require('lime.Layer');
goog.require('lime.Scene');
goog.require('zoo');
goog.require('zoo.Game');

zoo.Sprite = function(map, sprite) {

		

      /*hero.life = 20;
        hero.money = 100;
        hero.attack = 5;*/

  	var move = goog.events.listen(map, ['mousedown','touchstart'], function(e) {
        var movement = new lime.animation.MoveTo(e.position.x,e.position.y).setDuration(.8); sprite.runAction(movement);
    });


}
goog.inherits(zoo.Sprite, lime.Sprite);


	var gameOverScene = new lime.Scene().setRenderer();

    var gameOverLayer = new lime.Layer().setPosition(0,0).setRenderer(lime.Renderer.CANVAS).setAnchorPoint(0,0);
    
    var sky_gradient = new lime.fill.LinearGradient().setDirection(0,0,1,1)
                        .addColorStop(0,'#B2DFEE').addColorStop(1,'#0000CD');

    var sky = new lime.Sprite().setSize(352,128).setPosition(0,0).setAnchorPoint(0,0).setFill(sky_gradient);

    var grass = new lime.Sprite().setSize(352,128).setPosition(0,128).setAnchorPoint(0,0).setFill('rgb(0,125,0)');

    gameOverLayer.appendChild(sky);
    gameOverLayer.appendChild(grass);

    gameOverScene.appendChild(fightLayer);
    

    director.replaceScene(mapScene);

    hero.inGameOverScene = false;

    lime.scheduleManager.schedule(function(dt) {
        if(!this.inGameOverScene) {
            if(goog.math.Box.intersects(this.getBoundingBox(),monster.getBoundingBox())) {
                director.replaceScene(fightScene);
                gameOverLayer.setDirty(255);
                sprite.inGameOverScene = true;
            }
        }
    }, hero);


    