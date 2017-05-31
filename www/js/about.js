var about = {

    preload : function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.scale.pageAlignHorizontally = true;
        game.load.image("bak","img/backBB.png");
        game.load.image("kevz","img/kevz.png");
        game.load.image("kit","img/kit.png");
        
    },

    create: function () {
    game.add.image(0, 0, 'bg');
	bak = game.add.button(10,10,"bak",balik);
	kevz = game.add.image(100,80,"kevz");
	kevz.scale.x = .5;
	kevz.scale.y = .5;
	kit = game.add.image(480,130,"kit");
	kit.scale.x = .5;
	kit.scale.y = .5;    

    game.add.text(60,350,'Kevin U. Garcia\nIII-BS IT\nStudent From:\nPangasinan State University\nlingayen Campus',{fill:"black",font:"20px Berlin Sans FB Demi"});

	game.add.text(460,350,'Keith Ysrael P. Solis\nIII-BS IT\nStudent From:\nPangasinan State University\nlingayen Campus',{fill:"black",font:"20px Berlin Sans FB Demi"});

		}
	
	
        // Change the state to the actual game.
        //game.state.start('playGame');

    
	

};
function back(){
		game.state.add("Game" ,Game, true);
		
	}
game.state.add("about" ,about, false);