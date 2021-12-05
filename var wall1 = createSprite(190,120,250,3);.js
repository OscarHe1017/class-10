var wall1 = createSprite(190,120,250,3);
  var wall2 = createSprite(190,260,250,3);
  var wall3 = createSprite(67,145,3,50);
  var wall4 = createSprite(67,235,3,50);
  var wall5 = createSprite(313,145,3,50);
  var wall6 = createSprite(313,235,3,50);
  var wall7 = createSprite(41,170,50,3);
  var wall8 = createSprite(41,210,50,3);
  var wall9 = createSprite(337,210,50,3);
  var wall10 = createSprite(337,170,50,3);
  var wall11 = createSprite(18,190,3,40);
  var wall12 = createSprite(361,190,3,40);
  
  var ding = createSprite(40,190,13,13);
  ding.shapeColor="white";
  
  var dong1 = createSprite(65,130,10,10);
  dong1.shapeColor = "black";
  var dong2 = createSprite(101,250,10,10);
  dong2.shapeColor = "black";
  var dong3 = createSprite(137,130,10,10);
  dong3.shapeColor = "black";
  var dong4 = createSprite(173,250,10,10);
  dong4.shapeColor = "black";
  var lava = createSprite(209,200,250,10);
  lava.shapeColor="red";
   var dong5 = createSprite(245,250,10,10);
  dong5.shapeColor = "black";
  var dong6 = createSprite(281,130,10,10);
  dong6.shapeColor = "black";
  
  dong1.velocityY = 8;
  dong2.velocityY = -8;
  dong3.velocityY = 8;
  dong4.velocityY = -8;
  dong5.velocityY = 8;
  dong6.velocityY = -8;
  
  
  lava.velocityY= 1;
  var count = 0;
  


function draw() {
  background("orange");
  createEdgeSprites();
  text("Deaths: " + count,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(18,170,52,40);
  rect(308,170,52,40);
  
  dong1.bounceOff(wall1);
  dong1.bounceOff(wall2);
  dong2.bounceOff(wall1);
  dong2.bounceOff(wall2);
  dong3.bounceOff(wall1);
  dong3.bounceOff(wall2);
  dong4.bounceOff(wall1);
  dong4.bounceOff(wall2);
  dong5.bounceOff(wall1);
  dong5.bounceOff(wall2);
  dong6.bounceOff(wall1);
  dong6.bounceOff(wall2);

  ding.bounceOff(wall1);
  ding.bounceOff(wall2);
  ding.bounceOff(wall3);
  ding.bounceOff(wall4);
  ding.bounceOff(wall5);
  ding.bounceOff(wall6);
  ding.bounceOff(wall7);
  ding.bounceOff(wall8);
 ding.bounceOff(wall9);
 ding.bounceOff(wall10);
 ding.bounceOff(wall11);
 ding.bounceOff(wall12);
 lava.bounceOff(edges);
  if(keyDown("right")){
    ding.x = ding.x + 2;
  }
  if(keyDown("left")){
    ding.x = ding.x - 2;
  }
  if(keyDown("up")){
    ding.y=ding.y -2;
  }
  if(keyDown("down")){
    ding.y=ding.y +2;
  }
  if(ding.isTouching(wall11)||
     ding.isTouching(dong1)||
     ding.isTouching(dong2)||
     ding.isTouching(dong3)||
     ding.isTouching(dong4)||
     ding.isTouching(dong5)||
      ding.isTouching(dong6)||
     ding.isTouching(lava))
  {
     ding.x = 40;
     ding.y = 190;
     count = count + 1;
  }
  if(ding.isTouching(wall12))
  {
    ding.x=40;
    ding.y=190;
    text("Congratulations, you won the hardest game :D");
  }
 drawSprites();
}

