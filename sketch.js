var car, wall; 
var safeimg,lethalimg,averageimg,mainimg;
var speed, weight; 
var wall, thickness;
var bullet;

function preload(){

 mainimg=loadImage("main.jpg");
 safeimg=loadImage("safe.jpg");
 averageimg=loadImage("average.jpg");
 lethalimg=loadImage("lethal.jpg");

}

function setup() {

  createCanvas(1400,400);

  speed=random(30,100);
  weight=random(700,2500);
  
  car=createSprite(50, 200, 50,50);
  car.shapeColor="white";
  car.addImage(mainimg);
  car.scale=0.5;
  car.addAnimation("safe",safeimg);
  car.addAnimation("average",averageimg);
  car.addAnimation("lethal",lethalimg);
  car.velocityX=speed;

  wall=createSprite(1340, 200, 40, 200);
  wall.shapeColor="grey";
  speed = random(55,90);
  thickness = random(232,321);
  weight = random(30,52);
  bullet = createSprite(50,200,50,30);
  wall=createSprite(1500,200,thickness,height/2);
 
}
}

function draw() {
  background("black");

  if (car.x - wall.x < wall.width/2 + car.width/2
    && wall.x - car.x < wall.width/2 + car.width/2){
    car.velocityX=0;

    if(((0.5*weight*speed*speed)/22500)>180){
      car.changeAnimation("lethal",lethalimg);
    }else if(((0.5*weight*speed*speed)/22500)<80){
      car.changeAnimation("safe",safeimg);
    }else if(((0.5*weight*speed*speed)/22500)<180 && ((0.5*weight*speed*speed)/22500)>80){
      car.changeAnimation("average",averageimg);
    }

    bullet.velocityX = speed;
    if(wall.x-bullet.x < (bullet.width+wall.width)/2){
      bullet.velocityX=0;
      var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
      if(damage>10){
        wall.shapeColor=color(255,0,0);
      }
      if(damage<10){
        wall.shapeColor=color(0,255,0);
      }
    }
  }

  drawSprites();
}
