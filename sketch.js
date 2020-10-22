
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var dustbin1,dustbin2,dustbin3;



function setup() {
	createCanvas(1600, 700);

      
	engine = Engine.create();
	world = engine.world;
	
	//Create the Bodies Here.
	paper = new Paper(200,450,40);
	ground=new Ground(width/2,670,width,20);
	
    box1 = new Dustbin(1200,650,200,20);
	box2 = new Dustbin(1100,610,20,100);
	box3 = new Dustbin(1310,610,20,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine)
  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  //keyPressed();
  //drawSprites();
 
}
function keyPressed() { 
  if (keyCode === UP_ARROW) { 
    Matter.Body.applyForce(paper.body,paper.body.position,{x:90,y:-90}); } 
  }
   


