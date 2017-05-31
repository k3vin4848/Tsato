var Game = {
 preload: function() {
 
            game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            game.load.image("bg", 'img/background.png');
            game.load.image("start",'img/playBB.png');
            game.load.image("sound",'img/soundBB.png');
            game.load.image("about",'img/aboutBB.png');
            game.load.image("exit",'img/backBB.png');
     

},
 create: function() {
            game.physics.startSystem(Phaser.Physics.ARCADE);
            game.add.image(0, 0, 'bg'); 
             game.add.button(350, 40, 'start', this.startGame);
              sounds = game.add.button(350,130,"sound",process.sound);
              about = game.add.button(350,220,"about",process.about);
              exit= game.add.button(350,330,"exit",uwi);
        },

startGame: function () {
  game.state.start('playGame');
    }
}; 

function uwi(){
	window.location.href=window.location.href;
}