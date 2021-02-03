
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var bananaGroup, obstacleGroup;
var score;
var survivalTime;

function preload(){
  
  
  monkey_running=loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
}

function setup() {
  
createCanvas(600,300);
  
  
monkey= createSprite(50,267,20,20) ; 
ground= createSprite(150,280,600,10) ; 
  
  //ground.velocityX = -6
  
   monkey.addAnimation("monkey",monkey_running);
  monkey.scale=0.1;
 
  score=0;
  survivalTime=0;
  
   bananaGroup = new Group();
  obstacleGroup = new Group();

 // camera.x=monkey.x;
 
  
}


function draw() {
  
  background(0,255,0);
   if (ground.x < 100){
      ground.x = ground.width/2;
    }
    camera.y=monkey.y-65;
    camera.x=monkey.x+100;
  monkey.collide(ground);
  
  if(keyDown("space") && monkey.y >= 200) {
      monkey.velocityY = -17;
    }
  monkey.velocityY = monkey.velocityY + 1.1
  
 textSize(28);
  fill("black");
  survivalTime=World.seconds;
  text("Survival Time: "+survivalTime,100,50);
  
   if (monkey.isTouching(bananaGroup)){
    score=score+10;
    bananaGroup.destroyEach();
  }

  if (monkey.x<10){
    camera.x=150;
    camera.y=150;
    survivalTime=0;
    score=0;

    textSize(45);
    fill("red");
    stroke("black")
    strokeWeight(2);
    text( "GAME OVER",60,150);
      obstacleGroup.setVelocityXEach(0);
      bananaGroup.setVelocityXEach(0);
      bananaGroup.destroyEach();
      obstacleGroup.destroyEach();
      monkey.destroy();
  }
 textSize(20);
 fill("black");
   text( "Score "+score,100,70);
  
  monkey.collide(obstacleGroup);
  
  
  obstacles();
  food();

  drawSprites();
  
}

function obstacles(){
  
   if (frameCount % 100 === 0) {
    var obstacle = createSprite(650,240,15,15);
    obstacle.addImage(obstaceImage);
    obstacle.velocityX = -6;
     obstacle.scale=0.25
     obstacle.lifetime=170;
   obstacleGroup.add(obstacle);
    
  }
}

function food(){
  
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,100,10,10);
     banana.y = Math.round(random(70,180));
    banana.addImage(bananaImage);
    banana.velocityX = -10;
    banana.scale=0.09;
      banana.lifetime=170;
    
   bananaGroup.add(banana);
}

}







