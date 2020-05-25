var canvas,database;
var gamestate=0
var player,form;
var playercount


function setup(){
    canvas=createCanvas(400,400)
    database=firebase.database();
    game=new Game()
    game.getGameState()
    game.start()

}
function draw(){

}