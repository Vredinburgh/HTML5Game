
ZooHunter.Game = function (game) {

	//	When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;		//	a reference to the currently running game
    this.add;		//	used to add sprites, text, groups, etc
    this.camera;	//	a reference to the game camera
    this.cache;		//	the game cache
    this.input;		//	the global input manager (you can access this.input.keyboard, this.input.mouse, as well from it)
    this.load;		//	for preloading assets
    this.math;		//	lots of useful common math operations
    this.sound;		//	the sound manager - add a sound, play one, set-up markers, etc
    this.stage;		//	the game stage
    this.time;		//	the clock
    this.tweens;    //  the tween manager
    this.state;	    //	the state manager
    this.world;		//	the game world
    this.particles;	//	the particle manager
    this.physics;	//	the physics manager
    this.rnd;		//	the repeatable random number generator

    //	You can use any of these from any function within this State.
    //	But do consider them as being 'reserved words', i.e. don't create a property for your own game called "world" or you'll over-write the world reference.

    this.map;
    this.layer = {};
    this.gameAudio;
    this.keySound;
    this.walkSound;
    this.player;
    this.key;
    this.animal;
    this.hasKey = false;
    this.collectedAnimals = 0;
    this.cursors;
    this.scoreText;
    this.SPEED = 300;
    this.tick = 0;

};

ZooHunter.Game.prototype = {

	create: function () {
        
        // Start physics system.
        this.physics.startSystem(Phaser.Physics.ARCADE);

        this.stage.backgroundColor = '#787878';

        this.map = this.add.tilemap('map');

        //  The first parameter is the tileset name, as specified in the Tiled map editor (and in the tilemap json file)
        //  The second parameter maps this name to the Phaser.Cache key 'tiles'
        this.map.addTilesetImage('tiles-32x32', 'tileset');

        this.map.setCollisionBetween(0, 1600, true, 'Tile Layer 4');
        this.map.setCollisionBetween(0, 1600, true, 'Tile Layer 3');
        

        //  Add layers from the map data.
        this.layer.floor = this.map.createLayer('Tile Layer 1');
        this.layer.notCollidable = this.map.createLayer('Tile Layer 2');
        this.layer.collidable = this.map.createLayer('Tile Layer 3');
        this.layer.door = this.map.createLayer('Tile Layer 4');

         //  This resizes the game world to match the layer dimensions
        this.layer.floor.resizeWorld();

        this.scoreText = this.game.add.text(50, 50, 'score: 0', { fontSize: '32px', fill: 'white' });
        

        this.gameAudio = this.add.audio('gameAudio');
        this.keySound = this.add.audio('keySound');
        this.walkSound = this.add.audio('walkSound');
        this.gameAudio.play();

        this.cursors = this.game.input.keyboard.createCursorKeys();

        this.spawnPlayer();
        this.spawnKey();
        this.spawnAnimal();


	},

    spawnPlayer: function() {

        this.player = this.add.sprite(550, 550, 'dude');
        this.physics.arcade.enable(this.player);
        this.player.body.collideWorldBounds = true;

        /*this.player.animations.add('down', [0, 1, 2], 10, true);
        this.player.animations.add('left', [3, 4, 5], 10, true);
        this.player.animations.add('right', [6, 7, 8], 10, true);
        this.player.animations.add('up', [9, 10, 11], 10, true);*/

        this.camera.follow(this.player);

    },

    spawnKey: function() {

        this.key = this.add.sprite(900, 400, 'key');
        this.physics.arcade.enable(this.key);

    },

    spawnAnimal: function() {

        this.animal = this.add.sprite(500, 330, 'penguin');
        this.physics.arcade.enable(this.animal);

    },

	update: function () {
        this.tick++;

        this.player.body.velocity.y = 0;
        this.player.body.velocity.x = 0;

        if (this.tick % 100 === 0) {
            console.log(this.tick + " ticks");
        }
 
        if (this.cursors.left.isDown) {
            this.player.body.velocity.x -= this.SPEED;
            //this.player.animations.play('left');
            this.player.frame = 0;
        } else if (this.cursors.right.isDown) {
            this.player.body.velocity.x += this.SPEED;
            //this.player.animations.play('right');
            this.player.frame = 2;
        } else if (this.cursors.up.isDown) {
            this.player.body.velocity.y -= this.SPEED;
            //this.player.animations.play('up');
            this.player.frame = 3;
        } else if (this.cursors.down.isDown) {
            this.player.body.velocity.y += this.SPEED;
            //this.player.animations.play('down');
            this.player.frame = 1;
        }
        else {this.player.frame = 1;}
        

        this.game.physics.arcade.collide(this.player, this.layer.collidable);
        this.game.physics.arcade.overlap(this.player, this.key, this.collectKey, null, this);
        this.game.physics.arcade.overlap(this.player, this.animal, this.collectAnimal, null, this);

        if (!this.hasKey) {
            this.game.physics.arcade.collide(this.player, this.layer.door);
        } else { 
            this.game.physics.arcade.overlap(this.player, this.layer.door, this.openDoor, null, this);
        }
        
       
        

    },

    

    collectKey: function() {

        this.key.destroy();
        this.hasKey = true;

    },

    collectAnimal: function() {

        this.animal.destroy();
        this.collectedAnimals += 1;

        this.scoreText.text = 'Score: ' + this.collectedAnimals;

    },

    openDoor: function() {

        this.keySound.play();
        this.layer.door.kill();

    },

	quitGame: function (pointer) {

		//	Destroy all assets.

		//	Back to main menu.
		this.state.start('MainMenu');

	}

};
