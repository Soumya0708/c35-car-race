class Game{
    constructor(){

    }
 getGameState(){
    var gameStateref=database.ref('GameState')  
    gameStateref.on("value",function(data){
        gamestate=data.val()
    }
    
    )  
} 

updateGameState(state){
    var databaseref=database.ref('/')
    databaseref.update({
        'GameState':state
    })
}

start(){
    if (gamestate==0){
        player=new Player();
        player.getCount();
        form=new Form();
        form.display();
    }
}

}
