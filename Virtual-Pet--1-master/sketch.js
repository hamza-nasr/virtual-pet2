//Create variables here
var dog, happyDog, dogImage, dogImage1;
var database, foodS, foodStock;
var foodObj, fedTime, lastFed;
var feed, addFood;
function preload()
{
	//load images here
  dogImage=loadImage("images/dogImg.png");
  dogImage1=loadImage("images/dogImg1.png")
}

function setup() {
	createCanvas(1000, 400);
  database=firebase.database();
  dog=createSprite(250,270,40,40)
  dog.addImage(dogImage);
  dog.scale=0.15;
  foodStock=database.ref("food");
  foodStock.on("value", readStock);
  textSize(20);
  foodObj=new Food();
  feed=createButton("feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);
}

function draw() {  
background(46,139,87);
  drawSprites();
  //add styles here
  stroke("black");
  fill("black");
  textSize(20);
  text(foodS,220,120);
  text("Press UP-ARROW to feed the dog",70,50);
  if(keyDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImage1);
  }
  

}
function feedDog(){
  dog.addImage(dogImage1);
  if(foodObj.getFoodStock<=0){
    
  }else{

  }
}