const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var wall1,wall2,wall3,wall4;
var block




var wall5,wall6,wall7,wall8,wall9,wall10,wall11,wall12
function setup(){
  engine = Engine.create(800,800);
  world = engine.world;
  
block=new Box(20,20,20,20)



  wall1=new Ground(1,400,10,800);
  wall2=new Ground(400,1,10,800);
  wall3=new Ground(400,1,800,10);
  wall4=new Ground(1,400,800,10);
  wall5=new Ground(50,100,5,100)
  wall6=new Ground(100,50,100,5)
  wall7=new Ground(350,100,5,100)
 wall8=new Ground(300,50,100,5)
 wall9=new Ground(50,300,5,100)
  wall10=new Ground(100,350,100,5);

  wall11=new Ground(350,300,5,100)
  wall12=new Ground(300,350,100,5)
}
function draw(){
  background(0)
wall1.display();
wall2.display();
wall3.display();
wall4.display();
wall5.display();
wall6.display();
wall7.display();
wall8.display();
wall9.display();
wall10.display();
wall11.display();
wall12.display();
block.display();

}