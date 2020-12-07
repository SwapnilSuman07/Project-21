var wall,thickness;
var bullet,speed,weight;

function setup(){
  createCanvas(1600,400);
  bullet=createSprite(60,200,30,20);
  bullet.shapeColor="white";
  
  wall=createSprite(1200,200,thickness,height/2);
  thickness=random(22,83);
  speed=bullet.velocityX=random(223,321);
  weight=random(30,52);

}

function draw(){
  background("black");

  if (hasCollided(bullet,wall))
  {
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/
    (thickness*thickness*thickness);

    if(damage>10)
    {
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }

  }



bullet.collide(wall);
drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
    return false;
}