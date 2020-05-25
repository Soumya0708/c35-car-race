class Player{
    constructor(){
    }
    getCount(){
        var playerCountref=database.ref('PlayerCount')  
        playerCountref.on("value",function(data){
            playercount=data.val()
        }
        
        )        
    }

    updateCount(count){
        var databaseref=database.ref('/')
        databaseref.update({
            'PlayerCount':count
        })    
    }

    updateName(name){
     var Playerindex="player"+playercount
     database.ref(Playerindex).set({
         'name':name
     })  
    }
}