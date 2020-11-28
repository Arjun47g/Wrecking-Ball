
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 450, 800, 20);

	block1 = new Block(600, 350, 50, 50);
	block2 = new Block(650, 350, 50, 50);
	block3 = new Block(700, 350, 50, 50);

	block4 = new Block(600, 300, 50, 50);
	block5 = new Block(650, 300, 50, 50);
	block6 = new Block(700, 300, 50, 50);

	block7 = new Block(600, 250, 50, 50);
	block8 = new Block(650, 250, 50, 50);
	block9 = new Block(700, 250, 50, 50);

	block10 = new Block(600, 200, 50, 50);
	block11 = new Block(650, 200, 50, 50);
	block12 = new Block(700, 200, 50, 50);

	block13 = new Block(600, 150, 50, 50);
	block14 = new Block(650, 150, 50, 50);
	block15 = new Block(700, 150, 50, 50);

	block16 = new Block(600, 100, 50, 50);
	block17 = new Block(650, 100, 50, 50);
	block18 = new Block(700, 100, 50, 50);

	block19 = new Block(600, 50, 50, 50);
	block20 = new Block(650, 50, 50, 50);
	block21 = new Block(700, 50, 50, 50);

	ball = new Ball(400, 200, 40);

	chain = new Chain(ball.body, {x:400, y:50});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(25, 150, 32);
  
  ground.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  ball.display();
  chain.display();

 
}

function mouseDragged () {
 Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});


}

