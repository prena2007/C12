var garden,rabbit;
var gardenImg,rabbitImg;
var apples, leaves, appleImg, leavesImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg= loadImage("apple.png");
  leavesImg= loadImage("orangeLeaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  rabbit.x=World.mouseX;

  drawSprites();
  spawnApples();
  spawnLeaves();
  
}
function spawnApples(){
  if(frameCount%80==0){
    apples= createSprite(100,10,40,20);
    apples.x=Math.round(random(0,200));
    apples.velocityY=2;
    apples.addImage(appleImg);
    apples.scale=0.07; 
    apples.depth=rabbit.depth; 
    rabbit.depth=rabbit.depth+1;  
  }
}
function spawnLeaves(){
  if(frameCount%100==0){
    leaves= createSprite(300,10,40,20);
    leaves.x=Math.round(random(201,400));
    leaves.velocityY=2;
    leaves.addImage(leavesImg);
    leaves.scale=0.07;
    leaves.depth=rabbit.depth;
    rabbit.depth=rabbit.depth+1;
  }
}