var seaImage, Mar, MarInvisible;
var BarcoMove, Barco;
function preload(){

  SeaImage = loadImage("sea.png");
  BarcoMove = loadAnimation("ship-1.png,  ship-2.png, ship-3.png, ship-4.png");


}

function setup(){
  createCanvas(400,400);
  
  Barco = createSprites(50, 160, 75, 100);
  Barco.addAnimation("movimiento", BarcoMove);

  Mar = createSprites(200, 100, 400, 20);
  Mar.addImage("Mar", SeaImage );
 if(Mar.x <0){
  Mar.x = Mar.width / 2;
}
  

  
}

function draw() {
  background("blue");

  if(keydown(up)){
    Barco.velocityY = -10
  }

  if(keydown(down)){
    Barco.velocityY = +10
  }
 
  drawSprites();

}