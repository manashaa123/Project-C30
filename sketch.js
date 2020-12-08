const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var a;
var circles=[];

function setup() {
  createCanvas(800,800);
  stroke(255)

  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(700,400,800,100);

  //level two
  block8 = new Box(330, 235, 30, 40);
  block9 = new Box(360, 235, 30, 40);
  blok10 = new Box(390, 235, 30, 40);
  block11 = new Box(420, 235, 30, 40);
  block12 = new Box(450, 235, 30, 40);
  //level three
  block13 = new Box(360, 195, 30, 40);
  block14 = new Box(390, 195, 30, 40);
  block15 = new Box(420, 195, 30, 40);
  //top
  block16 = new Box(390, 155, 30, 40);

  //polygon
  polygon = Bodies.circle(50,200,20);
  World.add(world, polygon);

  slingshot = new SlingShot(this.polygon,{x:100,y:200});
 
  a=height;
  circles.push(width/2)
}

function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  

  ground.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();

  block16.display();

  slingshot.display();  
  
  a=a-1;
  
 
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 
 drawSprites();
}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW){
     slingshot.attach(bird.body);
  }
} 

function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}