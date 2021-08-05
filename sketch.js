var man
var runner
var path
var road

function preload(){
        //pre-load images
        road = loadImage("path.png")
        man = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
        createCanvas(400,400);
        //create sprites here
        path = createSprite(200,200, 50, 50) 
        path.addImage(road)
        runner = createSprite(200, 300, 50, 50)
        runner.addAnimation("running", man)
        runner.scale = 0.08
        path.velocityY=10
}

function draw() {
        background(0);
        if(path.y>400){
          path.y = path.width/2
        }
        drawSprites()

}
