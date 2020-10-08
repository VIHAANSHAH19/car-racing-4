class Game{
    constructor(){

    }
    getState(){
        database.ref('gameState').on("value",function(data){
            gameState=data.val()
        })
    }
    updateState(state){
        database.ref('/').update({
            gameState:state
        })
    }
    start(){
        if (gameState===0){
        player=new Player()
        player.getCount()
        form=new Form()
        form.display()
        }
        car1=createSprite(100,200)
        car2=createSprite(300,200)
        car3=createSprite(500,200)
        car4=createSprite(700,200)
        cars=[car1,car2,car3,car4]
        car1.addImage(car1image)
        car2.addImage(car2image)
        car3.addImage(car3image)
        car4.addImage(car4image)

    }
    play(){
        player.getPlayerInfo()
       
        //console.log(allPlayers)
        if(allPlayers!==undefined){
            background(groundimage)
            image(trackimage,0,-displayHeight*4,displayWidth,displayHeight*5)
            var index=0
            var x=0
            var y=0
            for(var plr in allPlayers){
                index=index+1
                x=x+200
                y= displayHeight-allPlayers[plr].distance
                cars[index-1].x=x
                cars[index-1].y=y
                if(index===player.index){
                    cars[index-1].shapeColor="red"
                }
            }
            
        }
        drawSprites();
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance=player.distance+10
            player.update()
        }
        
    }
}