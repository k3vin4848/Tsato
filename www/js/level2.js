var level2 ={

	preload:function() {

    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.load.image("background","img/background.png");
    game.load.image("sand","img/sand.png");
    game.load.image("platform","img/platform.png");
    game.load.image("back","img/backk.png");
    game.load.image("retry","img/restartBB.png");
    game.load.image("bullet","img/stickk.png");
    game.load.image("next","img/next.png",process.s1);
	game.load.image("atback","img/dulo.png");
	game.load.image("two","img/l2.png");
	game.load.image("button","img/buttonn.png");
    game.load.image("bak","img/backBB.png");
    game.load.spritesheet("player","img/playboy.png",200,250);
	game.load.spritesheet("aii","img/aii.png",148,268);
	game.load.image("button3","img/pausej.png",100,100);
    game.load.image("bg1","img/w1-back.png");
 	game.load.image("bg2","img/w2-mid.png");
	game.load.image("bg3","img/w3-mid2.png");
	game.load.image("bg7","img/cloud.png");
	},

    create:function() {
    	game.world.setBounds(0,0,500,0);
    	game.camera.follow(player, Phaser.Camera.FOLLOW_TOPDOWN);
    	game.physics.startSystem(Phaser.Physics.ARCADE);
    	platform1 = game.add.sprite(690,60,"platform");
		game.physics.arcade.enable(platform1);
		platform1.body.immovable = true;

		platform = game.add.sprite(690,125,"platform");
		game.physics.arcade.enable(platform);
		platform.body.immovable = true;

		atback = game.add.sprite(800,10,"atback");
		game.physics.arcade.enable(atback);
		atback.body.collideWorldBounds = true;
		atback.body.immovable = true;

		game.add.image(0,0,"background");

		sand = game.add.image(10,220,"sand");
		sand.scale.x = 1.3;
		sand.scale.y = .9;

		game.add.image(350,550,"two");

		bullets = game.add.group();
        bullets.enableBody = true;
        bullets.physicsBodyType = Phaser.Physics.ARCADE;
        bullets.createMultiple(1, "bullet");
        

        bg3 = game.add.tileSprite(0,
    		(game.height - game.cache.getImage("bg3").height)-460,
    		800,
    		game.cache.getImage("bg3").height,
    		'bg3');

    	bg2 = game.add.tileSprite(0,
    		(game.height - game.cache.getImage("bg2").height)-430,
    		800,
    		game.cache.getImage("bg2").height,
    		"bg2");

    	bg1 = game.add.tileSprite(0,
    		(game.height - game.cache.getImage("bg1").height)-390,
    		800,
    		game.cache.getImage("bg1").height,
    		"bg1");

		bg7 = game.add.tileSprite(0,
    		(game.height - game.cache.getImage("bg7").height)-540,
    		800,
    		game.cache.getImage("bg7").height,
    		"bg7");


		player = game.add.sprite(0,240,"player");
		game.physics.arcade.enable(player);
		player.body.collideWorldBounds = true;
		player.scale.x = .8;
		player.scale.y = .8;

		aii = game.add.sprite(700,100,"aii");
		game.physics.arcade.enable(aii);
		aii.body.collideWorldBounds = true;
		aii.scale.x = .7;
		aii.scale.y = .7;
		aii.body.velocity.y = 200;
		aii.body.gravity.y = 30;
		aii.body.bounce.y = 1;

		this.button3 = game.add.button(150,530,'button3');
   		this.button3.scale.x = .7;
    	this.button3.scale.y = .7;
    	this.button3.inputEnabled = true;
    	this.button3.fixedToCamera = true;

        this.button3.events.onInputUp.add(function(){
    	this.game.paused = true;
    	this.button3.tint = 16711680;
    	},this);
        
   	 	this.game.input.onDown.add(function(){
    	if (this.game.paused) 
    	this.game.paused = false;
    	this.button3.tint = 16777215;
    	},this);

		bak = game.add.button(10,10,"bak",balik);

		clickbutton = game.add.button(10,500,"button",b);
		clickbutton.scale.x = 0.2;
		clickbutton.scale.y = 0.2;

		alert = game.add.text((w/2)-205,h/2-50,'',{fill:"white",font:"40px Berlin Sans FB Demi"});
	},

    update:function() {
    	game.physics.arcade.collide(bg1,aii);
    	game.physics.arcade.collide(bg2,aii);
    	game.physics.arcade.collide(bg3,aii);
    	game.physics.arcade.collide(bg7,aii);
    	game.physics.arcade.collide(platform,aii);
    	game.physics.arcade.overlap(bullets,atback,s1);
		game.physics.arcade.overlap(bullets,back,tama1);

    	bg1.tilePosition.x += 0.7;
    	bg2.tilePosition.x += 0.5;
    	bg3.tilePosition.x += 1;
    	bg7.tilePosition.x += 0.9;

		},

    };
	function b(){
		fireBullet();
		k();
	}


	function playpause(){
 	 {button3.frame=1}  
	setTimeout(function(){
    
	button3.frame=0;
	game._paused=false;
	},5000);
	game._paused=true;
	}

	function fireBullet()
{

                    bullet.reset(player.position.x + 70, player.position.y + 200);
                    bullet.body.velocity.x = 400;
                    bullet.scale.x = 0.2;
                    bullet.scale.y = 0.2;
           
			player.frame =2;
			likod();
			aii.body.velocity.y = 0;
			aii.body.gravity.y = 0;
			aii.body.bounce.y = 0;
			aii.body.immovable = true;
        }

        function s1(bullets,atback)
{
	alert.text = "MOVE TO NEXT LEVEL\n 	OR RESTART!!";
	next = game.add.button(250,350,"retry",retry1);

		}

		function tama1(back,bullets)
{
	bullets.kill();
	next = game.add.button(450,350,"next",process.start1);
    
        }
		function retry1()
{
	game.state.add("level2" ,level2, true);
  
        }
	
	game.state.add("level2" ,level2, false);