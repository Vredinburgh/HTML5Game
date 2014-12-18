//namespace
goog.provide('zoo');


//dependencies
goog.require('lime.Director');
goog.require('lime.GlossyButton');
goog.require('lime.Layer');
goog.require('lime.Scene');
goog.require('lime.audio.Audio');
goog.require('zoo.Game');
goog.require('zoo.Sprite');

//entry point
zoo.start = function() {
	zoo.director = new lime.Director(document.body,1280,720);
	var scene = new lime.Scene(),
		layer = new lime.Layer();
		

	var btn = new lime.GlossyButton('PLAY').setSize(200, 80).setPosition(640, 260);
		goog.events.listen(btn, 'click', function() {
			zoo.newgame(1);
	});
	layer.appendChild(btn);

	var btn = new lime.GlossyButton('LOAD').setSize(200, 80).setPosition(640, 460);
		goog.events.listen(btn, 'click', function() {
			zoo.newgame(2);
	});
	layer.appendChild(btn);

	scene.appendChild(layer);

	zoo.director.makeMobileWebAppCapable();
	zoo.director.setDisplayFPS(false);
	zoo.director.replaceScene(scene);

	var sound = new lime.audio.Audio('assets/audio/test.mp3');
	zoo.sound.play();
}

zoo.newgame = function(mode) {
	var scene = new lime.Scene(),
		layer = new lime.Layer();

	scene.appendChild(layer);

	var game = new zoo.Game(mode);
	var map = game[0];
	var sprite = game[1];
	var monster = game[2];
	
	
	layer.appendChild(map);
	layer.appendChild(sprite);
	layer.appendChild(monster);

	zoo.director.replaceScene(scene);

	//initiate controls
	var move = new zoo.Sprite(map, sprite);
	
};