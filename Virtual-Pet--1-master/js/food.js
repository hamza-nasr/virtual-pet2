class Food{
    constructor(){
        this.image=loadImage("images/Milk.png");
        this.foodStock=0;
        this.lastFed;
    }
        getFoodStock(){
            return this.foodStock
        }
        updateFoodStock(foodStock){
            this.foodStock=foodStock
        }
        lastFedTime(lastFed){
            this.lastFed=lastFed;
        }
        deductFoodStock(){
            if(this.foodStock>0){
                this.foodStock=this.foodStock-1;
            }
        }
        display(){
            var x=80;
            var y=100;

            if(this.foodStock!=0){
                for(var count=0;count<this.foodStock;count=count+1){
                        if(count%10===0){
                            x=80;
                            y=y+50;
                        }
                        image (this.image,x,y,50,50)
                        x=x+30;

                }
            }
        }
}