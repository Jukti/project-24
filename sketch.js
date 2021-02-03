
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   
  Engine.run(engine);
  
  hammer = new Hammer(400,350,100,20);

  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  hammer.display();

  drawSprites();
 
}



