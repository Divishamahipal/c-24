var ground, ball, UP_ARROW=85, oside, tside, thside;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	ground = createSprite(500, 350, 1000, 20)	
	ground.shapeColor = "yellow"

	ball = createSprite(200, 325, 30, 30)	
	ball.shapeColor = "red"

	oside = createSprite(600, 300, 20, 80)	
	oside.shapeColor = "orange"
	
	tside = createSprite(700, 330, 200, 20)	
	tside.shapeColor = "orange"
	
	thside = createSprite(800, 300, 20, 80)	
	thside.shapeColor = "orange"

}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
	Matter.Body.applyforce(paperObject.body, paperObjet.body.position,{x:85, y:85})
	}
}



