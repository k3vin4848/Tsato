var Menu = {

    preload : function() {
        game.load.image('bg', 'img/background.png');
		game.load.image('cover', 'img/cover.png');
        game.load.image('start','img/playBB.png');
        //game.load.image('exit','img/exitBB.png');
        
        
    },

    create: function () {
    game.add.image(0, 0, 'bg');
	game.add.image(100, 150, 'cover');
             game.add.button(340,420, 'start', this.startGame, this);
    },

    startGame: function () {

        game.state.start('Game');

    }


};