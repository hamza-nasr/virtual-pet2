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
  foodObj=new Food();
  database=firebase.database();
  dog=createSprite(250,270,40,40)
  dog.addImage(dogImage);
  dog.scale=0.15;
  foodStock=database.ref("food");
  foodStock.on("value", readStock);
  textSize(20);
  feed=createButton("feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);
  addFood=createButton("Add Food")
  addFood.position(800,95);
  addFood.mousePressed(addFoods)
  
}

function draw() {  
background(46,139,87);
foodObj.display();
fedTime=database.ref("feedTime")
fedTime.on("value", function(data){
  lastFed=data.val();
})
  drawSprites();
  fill("white");
  textSize(15);
  if(lastFed>=12){
 text("lastFed:"+lastFed%12+"PM", 350, 30)
 }else{
  text("lastFed:"+lastFed+"AM", 350, 30)
 }
  

}
function readStock(data){
  foodS=data.val();
  foodObj.updateFoodStock(foodS)
}
function feedDog(){
  dog.addImage(dogImage1);
  if(foodObj.getFoodStock()<=0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0)
  }else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1)
  }
  database.ref("/").update({
    food:foodObj.getFoodStock(),
    feedTime:hour()
  })
}
function addFoods(){
  foodS++
  database.ref('/').update({
    food:foodS
  })
}
