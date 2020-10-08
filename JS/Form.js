class Form{
    constructor(){
        this.input= createInput("Name")
        this.button=createButton('play')
    }
    display(){
       
        this.input.position(displayWidth/2-100,100)
        var title=createElement('h1','Car Racing Game')
        title.position(displayWidth/2-100,0)
       
        this.button.position(displayWidth/2-50,150)
        this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
        title.hide()
        player.name=this.input.value()
        playerCount=playerCount+1
        player.index=playerCount
        player.updateCount(playerCount)
        player.update()
        var greeting=createElement('h4','Hello'+player.name)
        greeting.position(displayWidth/2-100,200)    
    })
    }
}