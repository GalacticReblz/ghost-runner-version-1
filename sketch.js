var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"


function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  tower = createSprite(width/2,height/2);
  tower.scale = 2.55
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  doorsGroup = new Group();
  climbersGroup = new Group();
}

function draw() {
  background(200);
  
  if(tower.y > 400){
      tower.y = 300
    }
    spawnDoors();
    drawSprites()
}

function spawnDoors(){
  if (frameCount % 150 === 0){
    door = createSprite(Math.round(random(60,width-69)),-50)
    door.addImage(doorImg)
    door.velocityY = 6.5
    door.scale = 1.2
    door.lifetime = height+50/door.velocityY
    doorsGroup.add(door)
    climber = createSprite(door.x,10)
    climber.addImage(climberImg)
    climber.velocityY = 6.5
    climber.scale  = 1.2
    climber.lifetime = height/climber.velocityY
    climbersGroup.add(climber)
  }
  
}
