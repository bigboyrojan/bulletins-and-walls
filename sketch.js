var bullet

var wall1


var speed,weight

var damage

var thickness

 

function setup() {

speed = random(223,321);

weight = random(30,52);

 

  createCanvas(1600,400);

 
  var speed = random(223,321);

  var weight = random(32,52);
  
   var thickness = random(22,83);
 

  var bullet = createSprite(50,200,50,10);

  bullet.velocityX = speed;

  bullet.shapeColor = "white";

 
 

  var wall1 = createSprite(1200,200,thickness, height/2);
  wall1.shapeColor = (230,230,230);

 

 
}

 

function draw() {

  background(255,40,90);

  if (hasCollided(bullet,wall)) {
    bullet.velocityX = 0;
      var damage = 0.5 * bulletweight * bulletspeed * bulletspeed/ (thickness * thickness * thickness);
   
    
      if (damage>10) {
        bullet.shapeColor = (150,75,0);
        wall.shapeColor = (255,0,0);
      }
      if (damage<10);{
      bullet.shapeColor = (255,165,0);
      wall.shapeColor = (0,0,255);
      }
    
  }


  drawSprites();

}
function hasCollided (lbullet, lwall) {

  bulletRightEdge = lbullet.x + lbullet.width;
  wall.leftEdge = lwall.x;
 {
   return true
 }
  {
    return false;
  }
}