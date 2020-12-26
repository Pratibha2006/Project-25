
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,ball;
var dustbinImg,dustbin;

function preload(){
    dustbinImg = loadImage("Images/dustbingreen.png");
}
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,390,1200,20);
    paper = new Paper(100,315);

    dustbin = createSprite(964,300,20,20);
    dustbin.addImage(dustbinImg);
    dustbin.scale = 0.4;
    dustbin.depth = paper.depth;
    paper.depth = paper.depth + 1;

    dustbinPart1 = new Dustbin(902,315,10,120);
	dustbinPart2 = new Dustbin(962,375,130,10);
    dustbinPart3 = new Dustbin(1024,315,10,120);
}

function draw(){
    background("pink");
    Engine.update(engine);

    
    ground.display();
    dustbinPart1.display();
    dustbinPart2.display();
    dustbinPart3.display(); 
    paper.display();

    drawSprites();
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(paper.body,paper.body.position,{x:74,y:-75});
    }
}