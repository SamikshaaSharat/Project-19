var ball,img,paddle;
function preload() {
  ballImage = loadImage("ball.png" );
  paddleImage = loadImage("paddle.png");
}
function setup() {
  createCanvas(400, 400);
   ball = createSprite(30,100,20,20);
  ball.addImage("ball" , ballImage);
  ball.velocityX = 9;
  
  
  paddle = createSprite(380,100,20,20);
  paddle.addImage("paddle" , paddleImage);
  
  

}

function draw() {
  background(205,153,0);
  edges=createEdgeSprites();
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle , randomVelocity);
  
  
  if(keyDown(UP_ARROW))
  {
     paddle.y = paddle.y - 5;
  }
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y = paddle.y + 5;
  }
  drawSprites();
  
}

function randomVelocity()
{
  
  ball.velocityY = random(1 , 4);
}

