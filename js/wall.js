class Wall{
    constructor(x,y,width,height){
        this.sprite = createSprite(x,y,width,height);
        //this.sprite.addImage('wall',verticalImg);
        this.x = x;
        this.y = y;
        this.width = width;
        this.height =height;
    }
    display(){
        image(verticalImg,this.x,this.y,this.width,this.height);
    }
}