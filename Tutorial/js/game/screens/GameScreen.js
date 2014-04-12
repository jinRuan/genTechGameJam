
GameScreen = function()
{
    GameScreen.superclass.constructor.apply(this,arguments);
    this.backgroundColor = "#039AFF";

	
	
	
	//Sprite
   this.rocketSprite = this.addChild(new TGE.Sprite().setup({
        image : "rocket",
        x : 250,
        y : 350,
    }));
    
   
   
   
  
    //SpriteSheetAnimation
    this.catAnimation = this.addChild(new TGE.SpriteSheetAnimation().setup({
        image :"runningCat",
        columns : 2,
        rows : 4,
        totalFrames : 5,
        fps : 5,
        x : 680,
        y : 340,
    }));
    this.catAnimation.play();
	
		



//Winter soldier sample sprite animations
/*
this.winterSoldier = this.addChild(new TGE.SpriteSheetAnimation().setup({
    image: "WinterSoldier",
    x:280,
    y:340,

}));
*/

}



extend(GameScreen,TGE.Window);