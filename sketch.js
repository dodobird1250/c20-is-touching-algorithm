var rect1fixed,rect2movable;

function setup() {
  createCanvas(800,400);
  rect1fixed=createSprite(400, 200, 50, 50);
  rect2movable=createSprite(200, 200, 80, 80);
  rect1fixed.shapeColor = "green";
rect2movable.shapeColor = "green";
}

function draw() {
  background ("black");
  
  rect2movable.x = World.mouseX;
  rect2movable.y = World.mouseY;

  if (rect2movable.x-rect1fixed.x<rect2movable.width/2+rect1fixed.width/2&&
   rect1fixed.x-rect2movable.x<rect1fixed.width/2+rect2movable.width/2&&
   rect2movable.y-rect1fixed.y<rect2movable.height/2+rect1fixed.height/2&&
   rect1fixed.y-rect2movable.y<rect1fixed.height/2+rect2movable.height/2){
  rect1fixed.shapeColor = "blue";
  rect2movable.shapeColor = "blue";
  
  }else{
    rect1fixed.shapeColor = "green";
  rect2movable.shapeColor = "green";
  }s
  drawSprites();
}