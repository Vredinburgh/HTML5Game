//namespace
goog.provide('zoo');


//dependencies
goog.require('lime.Director');
goog.require('lime.GlossyButton');
goog.require('lime.Layer');
goog.require('lime.Scene');
goog.require('zoo.Game')

//entry point
zoo.start = function() {
	zoo.director = new lime.Director(document.body,1280,720);
	var scene = new lime.Scene(),
		layer = new lime.Layer();

	var btn = new lime.GlossyButton('PLAY').setSize(200, 80).setPosition(640, 360);
		goog.events.listen(btn, 'click', function() {
			zoo.newgame(1);
	});
	layer.appendChild(btn);

	scene.appendChild(layer);

	zoo.director.makeMobileWebAppCapable();

	zoo.director.replaceScene(scene);
}

zoo.newgame = function(mode) {
	var scene = new lime.Scene(),
		layer = new lime.Layer();

	scene.appendChild(layer);

	var game = new zoo.Game(mode);
	layer.appendChild(game);
	

	zoo.director.replaceScene(scene);
};