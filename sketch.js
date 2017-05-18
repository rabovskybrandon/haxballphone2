//Stanford empty project

// DEFINE variables here
var player;
var player2;
var wall1;
var wall2;
var wall3;
var wall4;
var wall22;
var goalpost1;
var goalpost2;
var wall44;
var goalpost3;
var goalpost4;
var ball;
var wall11;
var wall12;
var wall13;
var wall14;
var midcircle;
var midline;
var scorep1=0
var scorep2=0
var centercircle
var bluekickoff=false
var redkickoff=false
var gamelength=30

function setup() {
 createCanvas(800,600);
//INSTANTIATE variables here
player=createSprite(600,300,30,30);
player2=createSprite(200,300,30,30);
wall1=createSprite(0,-25,2400,50);
wall2=createSprite(800+50,0+650/2,100,650);
wall3=createSprite(0,625,2400,50);
wall4=createSprite(-25,0+650/2,50,1200);
wall22=createSprite(730,290,40,150);
goalpost1=createSprite(700,220,30,10);
goalpost2=createSprite(700,360,30,10);
wall44=createSprite(70,290,40,150);
goalpost3=createSprite(100,220,30,10);
goalpost4=createSprite(100,360,30,10);
ball=createSprite(400,300,20,7.5);
wall11=createSprite(400,45,600,10);
wall12=createSprite(700,460,10,182);
wall13=createSprite(400,555,600,10);
wall14=createSprite(100,460,10,182);
wall12top=createSprite(700,130,10,162);
wall14top=createSprite(100,130,10,162);
midcircle=createSprite(400,300,120,120);
centercircle=createSprite(400,300,120,120);
midline=createSprite(400,300,1.3,500);
//Made walls and goalposts and a the center circle immovable
wall1.immovable=true;
wall2.immovable=true;
wall3.immovable=true;
wall4.immovable=true;
goalpost1.immovable=true;
goalpost2.immovable=true;
goalpost3.immovable=true;
goalpost4.immovable=true;
wall11.immovable=true;
wall12.immovable=true;
wall13.immovable=true;
wall14.immovable=true;
wall12top.immovable=true;
wall14top.immovable=true;
centercircle.immovable=true;
midline.immovable=true;
//Made walls invisible and midline changed
wall11.shapeColor=color(0,0,0,0);
wall12.shapeColor=color(0,0,0,0);
wall13.shapeColor=color(0,0,0,0);
wall14.shapeColor=color(0,0,0,0);
wall12top.shapeColor=color(0,0,0,0);
wall14top.shapeColor=color(0,0,0,0);
wall22.shapeColor=color(0,0,0,0);
wall44.shapeColor=color(0,0,0,0);
midline.shapeColor=color(255,255,255);

//player.collider="circle"
//I made these specific variables into circ;es instead of the rectangles that they were
player.setCollider("circle",0,0,12.5,12.5)
player2.setCollider("circle",0,0,12.5,12.5)
goalpost1.setCollider("circle",0,0,10,10)
goalpost2.setCollider("circle",0,0,10,10)
goalpost3.setCollider("circle",0,0,10,10)
goalpost4.setCollider("circle",0,0,10,10)
ball.setCollider("circle",0,0,7.5,7.5)
midcircle.setCollider("circle",0,0,120,120)
centercircle.setCollider("circle",0,0,60,60)
//Adjusted player and ball fricition
player.friction=.955
player2.friction=.955
ball.friction=.975
}

function draw() {
// Background color
background(49,124,36);
//Made the arcs have no fill and instead be see through
noFill();
//created arcs and lines connecting the goalposts
arc(90, 325, 77, 77, HALF_PI ,PI);
arc(80, 250, 57, 57, PI, TWO_PI - QUARTER_PI);
arc(705, 262, 85, 85, -HALF_PI, 0);
arc(705, 320, 85, 85,0,PI/2);
line(747,320,747,262);
line(51,324,51,250);
//UPDATE variables here
fill(255,255,255)
drawSprites();
//Made player and ball bounce with the variables they needed to
player.bounce(wall1);
player2.bounce(wall1);
player.bounce(wall2);
player2.bounce(wall2);
player.bounce(wall3);
player2.bounce(wall3);
player.bounce(wall4);
player2.bounce(wall4);
player.bounce(goalpost1);
player2.bounce(goalpost1);
player.bounce(goalpost2);
player2.bounce(goalpost2);
player.bounce(goalpost3);
player2.bounce(goalpost3);
player.bounce(goalpost4);
player2.bounce(goalpost4);
player.bounce(ball,bluetouch);
player2.bounce(ball,redtouch);
ball.bounce(wall11);
ball.bounce(wall12);
ball.bounce(wall13);
ball.bounce(wall14);
ball.bounce(goalpost1);
ball.bounce(goalpost2);
ball.bounce(goalpost3);
ball.bounce(goalpost4);
ball.bounce(wall11);
ball.bounce(wall12);
ball.bounce(wall13);
ball.bounce(wall14);
ball.bounce(wall12top);
ball.bounce(wall14top);
//Created blue player score
fill(0);
strokeWeight(0);
textSize(20);
text("Score Blue:" +scorep1, 650,45);
//Created red player score
fill(0);
strokeWeight(0);
textSize(20);
text("Score Red:" +scorep2, 50,45);
//Made a rectangle to be the ball boundaries
noFill();
stroke(255);
strokeWeight(1.3);
rect(100,50,600,500);
//Created timer
text("Time: " + (gamelength - round(millis()/1000)),345,40)
//Added key bounce function
player.bounce(player2);
//Made the players and balls red and blue
player.draw = function() { fill(0,0,255); ellipse(0,0,25,25); }
player2.draw = function() { fill(255,0,0); ellipse(0,0,25,25); }
goalpost1.draw = function() { fill(0,0,255); ellipse(0,0,20,20); }
goalpost2.draw = function() {fill(0,0,255); ellipse(0,0,20,20); }
goalpost3.draw = function() { fill(255,0,0); ellipse(0,0,20,20); }
goalpost4.draw = function() { fill(255,0,0); ellipse(0,0,20,20); }
ball.draw = function() { ellipse(0,0,15,15) }
//Made the center circle see through
midcircle.draw = function() { stroke(255); strokeWeight(1.3);noFill(); ellipse(0,0,120,120);}
centercircle.draw = function() { stroke(255); strokeWeight(1.3);noFill(); ellipse(0,0,120,120);}
    if(rotationx<20{
//Put what you want to happen when left arrow key is pressed in here
player.addSpeed(.2,180);
}
//Created the reset function and an +1 to score when the ball goes in the red goal
if (ball.position.x<100){
  scorep1=scorep1+1;
  redkickoff=true
  ball.setSpeed(0,0);
ball.position.x=400;
ball.position.y=300;
player.position.x=600;
player.position.y=300;
player2.position.x=200;
player2.position.y=300;
  }
//Created the reset function and a +1 to score when the ball goes in the blue goal
if (ball.position.x>700){
  scorep2=scorep2+1;
  bluekickoff=true
  ball.setSpeed(0,0);
  ball.position.x=400;
  ball.position.y=300;
  player.position.x=600;
  player.position.y=300;
  player2.position.x=200;
  player2.position.y=300;
}
//Created all conditions for the reset function after a goal is scored on the blue goal
if(redkickoff==true){
  player.bounce(centercircle);
player.bounce(midline);
ball.setSpeed(0,0);
ball.position.x=400;
ball.position.y=300;
player.bounce(wall11);
player.bounce(wall12);
player.bounce(wall13);
player.bounce(wall14);
player.bounce(wall12top);
player.bounce(wall14top);
player2.bounce(wall11);
player2.bounce(wall12);
player2.bounce(wall13);
player2.bounce(wall14);
player2.bounce(wall12top);
player2.bounce(wall14top);
}
//Created all conditions for the reset function after a goal is scored on the red goal
if(bluekickoff==true){
  player2.bounce(centercircle);
player2.bounce(midline);
ball.setSpeed(0,0);
ball.position.x=400;
ball.position.y=300;
player.bounce(wall11);
player.bounce(wall12);
player.bounce(wall13);
player.bounce(wall14);
player.bounce(wall12top);
player.bounce(wall14top);
player2.bounce(wall11);
player2.bounce(wall12);
player2.bounce(wall13);
player2.bounce(wall14);
player2.bounce(wall12top);
player2.bounce(wall14top);
}

if(rotationX>20){
//Put what you want to happen when right arrow key is pressed in here
player.addSpeed(.2,0);
}
//Put what you want to happen when up arrow key is pressed in here
if (keyDown(38)) {
player.addSpeed(.2,270);
}
////Put what you want to happen when down arrow key is pressed in here
if (keyDown(40)){
  player.addSpeed(.2,90);
}
//Put what you want to happen when "a" key is pressed in here
    if(keyDown(65)){
player2.addSpeed(.2,180);
}
//Put what you want to happen when "d" key is pressed in here
if(keyDown(68)){
  player2.addSpeed(.2,0);
}
//Put what you want to happen when "w" key is pressed in here
if(keyDown(87)){
  player2.addSpeed(.2,270);
  }
  //Put what you want to happen when "s" key is pressed in here
  if(keyDown(83)){
    player2.addSpeed(.2,90);

}
//Player 1 kick button
if(keyDown(191)){
  Kick(player,ball);
}
//player 2 kick button
if(keyDown(192)){
  Kick2(player2,ball);
}
// if( ball.position.x < 95 ) {
//   scorep1 +=1;
// }
//Set conditions for gameover function
if(gamelength - millis()/1000 < 0){
  gameover();
}
//Added possible overtime
if(gamelength - millis()/1000>=0){
  //ALL player movement inside draw loop added here
}
   }
//Created kicking fucntion for player 1
function Kick(spriteA, spriteB){
if (dist(spriteA.position.x,spriteA.position.y,spriteB.position.x,spriteB.position.y)<32){
  bluekickoff=false;
  textSize(40);
  text("Kick!",400,300);
  spriteB.addSpeed(.5, atan2(spriteB.position.y-spriteA.position.y, spriteB.position.x-spriteA.position.x)*(180/3.14159265359))
}
}
//Created kicking fucntion for player 2
function Kick2(spriteA, spriteB){
if (dist(spriteA.position.x,spriteA.position.y,spriteB.position.x,spriteB.position.y)<32){
  redkickoff=false;
  textSize(40);
  text("Kick!",400,300);
  spriteB.addSpeed(.5, atan2(spriteB.position.y-spriteA.position.y, spriteB.position.x-spriteA.position.x)*(180/3.14159265359))
}
}
//Created a function so blue player cannot touch ball after scoring
function bluetouch(){
  bluekickoff=false;
}
//Created function so red player cannot touch ball after scoring
function redtouch(){
  redkickoff=false;
}
//Created game over function for when red player wins
function gameover(){
  if(scorep2>scorep1){
    textAlign(CENTER);
    text("red wins",400,200);
    textAlign(CENTER);
    text("refresh page to play again!",400,400);
    crash;                        //Game freezes and will reset when refreshes the page
  }
  //Created game over function for when blue player wins
  if(scorep1>scorep2){
    textAlign(CENTER);
    text("blue wins",400,200);
    textAlign(CENTER);
    text("refresh page to play again!",400,400);
    crash;
  }
  //Overtime to add 15 seconds
  if(scorep1==scorep2){
    gamelength = gamelength +15;
  }
  /*var xValue;
  var yValue;
  var zValue;
  function setup(){


  }

  function draw(){
  text("X: "+rotationX,100,100);
  text("Y: "+rotationY,100,200);
  text("Z: " +rotationZ,100,300);

  }
*/
}
