var process = function() {
	   "use strict";
        return {

sound : function(){
    game.state.start("sound");
    },
about : function(){
    game.state.start("about");
    },

start : function(){
    game.state.start("level2");
    },
    
    start1 : function(){
    game.state.start("level3");
    },
	
}
}();