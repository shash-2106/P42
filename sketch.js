
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hr,mn,sc;

var scAngle, mnAngle, hrAngle;



function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  ;
  

  Engine.run(engine);
}

function draw() {

  background(0,0,0);
  translate(200,200);
  rotate(-90); 
  angleMode(DEGREES);

  hr = hour()%12;
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr, 0, 12, 0, 360);
  
 // console.log(hr);
  
  push();
  rotate(scAngle);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
   strokeWeight(10);
  stroke(255,0,0);
  fill("black");
  arc(0,0,300,300,0,scAngle);
  pop();

  push();
  rotate(mnAngle);
  stroke(0, 255, 0);
  strokeWeight(7);  
  line(0,0,100,0);
  strokeWeight(10);
  stroke(0,255,0); 
  fill("black");
  arc(0,0,280,280,0,mnAngle); 
  pop();

  push();
  rotate(hrAngle);
  stroke(0, 0, 255);
  strokeWeight(7);  
  line(0,0,100,0);
  stroke(0,0,255);
  strokeWeight(10);
  fill("black");
  arc(0,0,260,260,0,hrAngle);
  pop();
  
  drawSprites();
}