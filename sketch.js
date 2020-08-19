const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bob1, bob2, bob3, bob4, bob5
var ground6;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	var bob1=createSprite(200,300,20,20)
	var bob2=createSprite(240,300,20,20)
	var bob3=createSprite(280,300,20,20)
	var bob4=createSprite(320,300,20,20)
	var ground=new ground(260,400,120,20)
	push ()
	pop()


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
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body.ball.body.position,{x:130,y:-145});
		Matter.Body.applyForce(ball.body.ball.body.position,{x:-130,y:145});
	}


}