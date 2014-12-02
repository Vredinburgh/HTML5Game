//namespace
goog.provide('zoo_hunter');


//dependencies
goog.require('lime.Director');
goog.require('lime.GlossyButton');
goog.require('lime.Layer');
goog.require('lime.Scene');

//entry point
zoo_hunter.start = function() {
	zoo_hunter.director = new lime.Director(document.body,1280,720);
	var scene = new lime.Scene(),
		layer = new lime.Layer();

	var btn = new lime.GlossyButton('PLAY').setSize(100, 40).setPosition(150, 100);
		goog.events.listen(btn, 'click', function() {
			zoo_hunter.newgame(1);
	});
	layer.appendChild(btn);

	scene.appendChild(layer);

	zoo_hunter.director.makeMobileWebAppCapable();

	zoo_hunter.director.replaceScene(scene);
}

zoo_hunter.newgame = function(mode) {
	var scene = new lime.Scene(),
	layer = new lime.Layer();

	scene.appendChild(layer);

	var game = new zoo_hunter.Game(mode);
	layer.appendChild(game);
	

	zoo_hunter.director.replaceScene(scene);
};