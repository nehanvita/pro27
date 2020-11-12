
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint;

var rope,bob1,roof

function setup() {
	createCanvas(900, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bob1 = new Bob(200,150,40)
	roof = new Roof(450,100,750,20)

    rope = new Rope(roof.body,bob1.body)
  

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  bob1.display();
  roof.display();
  rope.display();
  
  drawSprites();
 
}



