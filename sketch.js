
function setup(){
createCanvas(400,400);
background("green");
var box=createSprite(200,200,100,100);
}
function draw() {
 
  
    if (keyIsDown(RIGHT_ARROW)) 
  {
    box.velocityX=5;
    background("white");
   
  }

    if (keyIsDown(LEFT_ARROW)) 
  {
    box.velocityX=-5;
    background("orange");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.velocityY=-5;
    background("blue");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.velocity=5;
    background("black");
    
  }

  createEdgeSprites();
  drawSprites();
  
}




