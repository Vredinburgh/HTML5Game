
ZooHunter.MainMenu = function (game) {

	this.bg;
	this.startButton;
	this.loadButton;
	this.mainAudio;

};

ZooHunter.MainMenu.prototype = {

	create: function () {

		this.mainAudio = this.add.audio('gameAudio');
		this.mainAudio.play();

		this.bg = this.add.tileSprite(0, 0, this.game.width, this.game.height, 'startScreen');

		this.startButton = this.add.sprite(this.world.centerX, this.world.centerY, 'startButton');
		this.startButton.anchor.set(0.5);
		this.startButton.inputEnabled = true;
		
		this.startButton.events.onInputDown.add(this.startGame, this);

	},

	update: function () {

		//	Main menu effects.

	},

	resize: function (width, height) {

		//	If the game container is resized this function will be called automatically.
		//	You can use it to align sprites that should be fixed in place and other responsive display things.

		this.bg.width = width;
		this.bg.height = height;

	    this.startButton.x = this.game.world.centerX;
	    this.startButton.y = this.game.world.centerY;

	},

	startGame: function(pointer) {

		this.mainAudio.stop();

		this.state.start('Game');
	}

};
