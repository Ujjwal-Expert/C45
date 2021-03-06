/*var database;
var numberOfRooms;
var playerCount;
var roomNumber;
var menu,player,game*/

var verticalImg, perpendicularImg, turnImg;
var orientation1 = 'right';

function preload(){
    verticalImg = loadImage('images/horizontalWall.png');
    perpendicularImg = loadImage('images/perpendicularWall.png');
    turnImg = loadImage('images/wallTurn.png');
    plr_right = loadImage('images/plr_right.png');
    plr_left = loadImage('images/plr_left.png');
    plr_up = loadImage('images/plr_up.png');
    plr_down = loadImage('images/plr_down.png');
    plr_upRight = loadImage('images/upRight.png');
}

function setup(){
    createCanvas(600,600);
    player = createSprite(200,400,10,10);
    player.addImage(plr_right);
    player.scale = 0.2;
    
    wall1 = new Wall(100,250,20,300);
    
    wall2 = new Wall(150,500,300,20);
    
    wall3 = new Wall(200,200,200,30);


}

function draw(){
    background(169,132,79);
    imageMode(CENTER);
    angleMode(DEGREES);
    
    movement();
    createBullet();

    drawSprites();
    /*all1.display();
    wall2.display();
    wall3.display();*/

    console.log('45 degrree, up down bullet, mazeimahes, set maze , zombie ')
}



function movement(){
    if(keyDown(LEFT_ARROW)){
        player.x -= 5;
        player.addImage(plr_left);
        orientation1 = 'left';
    }
    if(keyDown(RIGHT_ARROW)){
        player.x += 5;
        player.addImage(plr_right);
        orientation1 = 'right';
    }
    if(keyDown(UP_ARROW)){
        player.y -= 5;
        player.addImage(plr_up);
        orientation1 = 'up';
    }
    if(keyDown(DOWN_ARROW)){
        player.y += 5;
        player.addImage(plr_down);
    }
    if(keyDown(UP_ARROW)&&keyDown(RIGHT_ARROW)){
        player.addImage(plr_upRight);
        orientation1 = 'down';
    }
    console.log(orientation1);
}

function createBullet(){
    if(keyDown('space')){
        var positionX;
        var positionY;
        var velocity;
        for(var i=0;i<25;i+=5){
            if(orientation1==='right'){
                velocity = 5;
                positionX = player.x+25;
                positionY = player.y+7;
            }
            if(orientation1 === 'left'){
                velocity = -5;
                positionX = player.x -25;
                positionY = player.y-7;
            }
            var bullet = createSprite(positionX,positionY,5,5);
            bullet.velocityX = velocity
            
            bullet.lifetime = 50;
        }
    }
}