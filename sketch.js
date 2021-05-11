const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1,ground2,ground3,ground4;
var plinko1
var division=[];
var plinkos=[];
var particles=[];
var divisionHeight=300;
function setup() 
{
  var canvas = createCanvas(600,700);
  engine = Engine.create();
    world = engine.world;
  createEdgeSprites();



for(var k=0;k<=width;k=k+80){
  division.push(new divisions(k,height-divisionHeight/2,10,divisionHeight));
}



for(var j=40;j<=width;j=j+50){
  plinkos.push(new plinko(j,200))
  }

}

function draw() {
  background("black");  
  drawSprites();
 
  if(frameCount%60===0)
  {
    particles.push(new particle(random(width/2-10,width/2+10),10,10))
  }
 for(var i=0;i<particles.length;i++)
 {
   particles[i].display();
 }
  for(var k=0;k<division.length;k++)
{
  division[k].display();
}
for(var j=40;j<=plinkos.length;j=j++){
  plinkos[j].display()
  }
  //plinko1.display();
  //plinko2.display();
 
 
}
