const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
const World=Matter.World;

var engine,world;
var airplane,box1,box2,box3;
var package;

function setup() {
 var canvas= createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  
  package= new Package(400,100,10,10);
  airplane= new Airplane(400,100,50,50);
  box1= new Box(400,395,100,10);
  box2= new Box(350,375,10,50);
  box3= new Box(450,375,10,50);
  
}
function draw() {
  background("black");
  Engine.update(engine);
  package.display();
   airplane.display();
   box1.display();
   box2.display();
   box3.display();
}
function keyPressed(){
  if(keyCode=DOWN_ARROW){
    Matter.Body.setStatic(package.body,false);
}
}