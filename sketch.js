var canvas;
var music;
var movingRect;
var box1, box2, box3, box4;
var Edges

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    movingRect = createSprite(200,200,20,20);
    movingRect.shapeColor = "white";
    box1 = createSprite(80,550,150,20);
    box1.shapeColor = "blue";
    box2 = createSprite(280,550,150,20);
    box2.shapeColor = "orange";
    box3 = createSprite(480,550,150,20);
    box3.shapeColor = "magenta";
    box4 = createSprite(680,550,150,20);
    box4.shapeColor = "green";
    movingRect.velocityY = 8;
    movingRect.velocityX = 8;
   


}

function draw() {
    background("gray");

    if(movingRect.isTouching(box1)){
        movingRect.shapeColor = "blue";
    }
    
    if(movingRect.isTouching(box2)){
        movingRect.shapeColor = "orange";
    }

    if(movingRect.isTouching(box3)){
        movingRect.shapeColor = "magenta";
    }

    if(movingRect.isTouching(box4)){
        movingRect.shapeColor = "green";
    }
    Edges = createEdgeSprites();
    movingRect.bounceOff(Edges);
    movingRect.bounceOff(box1);
    movingRect.bounceOff(box2);
    movingRect.bounceOff(box3);
    movingRect.bounceOff(box4);
    drawSprites();
}