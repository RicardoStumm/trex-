var path, pathImage;
var leftEdge, rightEdge;
var runner, runnerAnimation;
var coin,coinImg,bomb,bombImg,energyDrink,edImg;





function preload(){
  //imagens pré-carregadas
  pathImage = loadImage("path.png");
  runnerAnimation = loadAnimation("Runner-1.png","runner-1.png","runner-2.png", "Runner-2.png");
  coinImg = loadImage ("coin.png");
  bombImg = loadImage ("bomb.png");
  edImg = loadImage ("energyDrink.png");
}

function setup(){
  createCanvas(400,400);
  

  //crie sprite aqui
  path = createSprite(200,200,500,400);
  path.addImage("path",pathImage);
  path.velocityY = 2;
  
  runner = createSprite(200,300,10,10);
  runner.addAnimation("running",runnerAnimation);
  runner.scale = 0.05;




  

}

  


function draw() {
  background(0);


  leftEdge = createSprite(40,200,10,400);
  leftEdge.visible = false;
  rightEdge = createSprite(360,200,10,400);
  rightEdge.visible = false;

  runner.collide(leftEdge);
  runner.collide(rightEdge);


  if(path.y > 400){
    path.y =path.width/2;
  }
  if(keyIsDown(LEFT_ARROW)){
    runner.x = runner.x - 4;
  }
  if(keyIsDown(RIGHT_ARROW)){
    runner.x = runner.x + 4;
  }

  if(runner.collide(coin)){


  }




  coinSpawn();
  drawSprites();
}


function coinSpawn(){
   
  if(frameCount%60 === 0){
    coin = createSprite(200,0);
    coin.velocityY = 4;
    coin.addImage(coinImg);
    coin.scale = 0.3;
    coin.x = Math.round (random(100,300));

    bomb = createSprite(200,0);
    bomb.velocityY = 6;
    bomb.addImage(bombImg);
    bomb.scale = 0.1;
    bomb.x = Math.round (random(100,300));
  }
}