var ZooHunter = {};

ZooHunter.Boot = function (game) {

};

ZooHunter.Boot.prototype = {

    init: function () {

        //Only increase this if multi-touch support gets added.
        this.input.maxPointers = 1;

        //Phaser will automatically pause if the browser tab the game is in loses focus. You can disable that here:
        this.stage.disableVisibilityChange = true;

        //this tells the game to resize the renderer to match the game dimensions (i.e. 100% browser width / height)
        //this.scale.scaleMode = Phaser.ScaleManager.RESIZE;

        this.time.advancedTiming = true;
        
    },

    preload: function () {

        //  Load the assets required for the preloader
        this.load.image('logo', 'assets/sprites/phaser_logo.png');
        this.load.image('preloadBar', 'assets/sprites/loader.png');

    },

    create: function () {

        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        //  Start preloading.
        this.state.start('Preloader');

    }

};
