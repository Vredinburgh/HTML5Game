
ZooHunter.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

ZooHunter.Preloader.prototype = {

	preload: function () {

		//These are the assets that have been loaded in Boot.js

		this.preloadBar = this.add.sprite(this.world.centerX - 150, this.world.centerY, 'preloadBar');
		this.preloadBar.anchor.set(0);

		//This sets the preloadBar sprite as a loader sprite.
		//What that does is automatically crop the sprite from 0 to full-width
		//as the files below are loaded in.

		this.load.setPreloadSprite(this.preloadBar);

	    var assets = {
	    	tilemap: {
	    		map: 			['assets/maps/orthographic/tilemap.json', null, Phaser.Tilemap.TILED_JSON]
	    	},
			spritesheet: {
				billy: 			['assets/sprites/Billy_animate.png', 191, 248.5],
				dude: 			['assets/sprites/Billy 32px.png', 41, 65]
			},
			image: {
				tileset: 		["assets/maps/orthographic/tiles-32x32.png"],
				startButton: 	['assets/sprites/Start.png'],
				elephant: 		['assets/sprites/olifant.png'],
				penguin: 		['assets/sprites/penguin.png'],
				starfield: 		['assets/sprites/deep-space.jpg'],
				key: 			['assets/sprites/key.png'],
				startScreen: 	['assets/sprites/Title_Screen.png']
			},
			audio: {
				audio: 			['assets/audio/music.ogg'],
				mainmenuAudio: 	['assets/audio/x-files.mp3'],
				gameAudio: 		['assets/audio/mortal_kombat.mp3'],
				keySound: 		['assets/audio/Locked door.mp3'],
				walkSound: 		['assets/audio/footstep_record.mp3']
			}
		};

		//Loads all files targeted with the assets object. It loops through every secondary key nested in the primary key.
		var that = this;
		Object.keys(assets).forEach(function(type) {
	    	Object.keys(assets[type]).forEach(function(id) {
	       		that.load[type].apply(that.load, [id].concat(assets[type][id]));
	    		});
		});

	},

	create: function () {
		this.preloadBar.cropEnabled = false;
		//this.state.start('MainMenu');

	},

	update: function () {

		//	You don't actually need to do this, but I find it gives a much smoother game experience.
		//	Basically it will wait for our audio file to be decoded before proceeding to the MainMenu.
		//	You can jump right into the menu if you want and still play the music, but you'll have a few
		//	seconds of delay while the mp3 decodes - so if you need your music to be in-sync with your menu
		//	it's best to wait for it to decode here first, then carry on.

		//	If you don't have any music in your game then put the game.state.start line into the create function and delete
		//	the update function completely.

		if (this.cache.isSoundDecoded('gameAudio') && this.ready == false)
		{
			this.ready = true;
			this.state.start('MainMenu');
		}

	}

};
