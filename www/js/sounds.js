var sound = {

    preload : function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.pageAlignHorizontally = true;
		game.load.image("yes","img/so.png");
		game.load.image("no","img/sf.png");
        game.load.image("bak","img/backBB.png");
		game.load.audio("bgMusic","audio/bgMusic.wav");
        
    },

    create: function () {
    game.add.image(0, 0, 'bg');
	
	yes = game.add.button(220,300,"yes",play);
	no = game.add.button(520,300,"no",nope);
	bak = game.add.button(10,10,"bak",balik);
  
    game.add.text((w/2)-170,h/2-50,'Enable Sounds?',{fill:"white",font:"40px Berlin Sans FB Demi"});

    
	}

};
function play(){
	bgMusicplay();
	audioLoop();
}
function bgMusicplay(){
	bgMusic = game.add.audio("bgMusic",true);
		bgMusic.loop=true;
		bgMusic.process(1500);
		bgMusic.play();
}
function audioLoop(time){
	 		setInterval(function(){
	 			bgMusic.play();
	 	},100000);
}
function nope(){
}
function balik(){
		game.state.add("Game" ,Game, true);
		console.log("x");
		
	}
game.state.add("sound" ,sound, false);