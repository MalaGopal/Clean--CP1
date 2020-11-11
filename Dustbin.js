class Dustbin{
    constructor(x,y){
        this.x = x;
        this.y = y
        this.dustbinWidth = 200;
        this.dustbinHeight = 100;
        this.dustbinWallThickness = 20;
        this.angle = 0;

        this.bottomBody = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.dustbinWallThickness,{isStatic:true});
        this.leftWallBody = Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2+10,this.dustbinWallThickness,this.dustbinHeight,{isStatic:true});
        Matter.Body.setAngle(this.leftWallBody,this.angle);

        this.rightWallBody = Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinWidth/2+60,this.dustbinWidth,this.dustbinHeight,{isStatic:true});
        Matter.Body.setAngle(this.rightWallBody,(-1)*this.angle);

        World.add(world,this.bottomBody);
        World.add(world,this.leftWallBody);
        World.add(world,this.rightWallBody);
    }
    display(){
        var posBottom = this.bottomBody.position;
        var posLeft = this.leftWallBody.position;
        var posRight = this.rightWallBody.position;

        push();
        translate(posLeft.x,posLeft.y);
        rotate(this.angle);
        angleMode(RADIANS);
        rectMode(CENTER);
        fill(255);
        stroke(255);
        rect(0,0,this.dustbinWallThickness,this.dustbinHeight);
        pop();

        push();
        translate(posRight.x,posRight.y);
        rotate((-1)*this.angle);
        angleMode(RADIANS);
        rectMode(CENTER);
        fill(255);
        stroke(255);
        rect(0,0,this.dustbinWallThickness,this.dustbinHeight);
        pop();

        push();
        translate(posBottom.x,posBottom.y);
        angleMode(RADIANS);
        rectMode(CENTER);
        fill(255);
        stroke(255);
        rect(0,0,this.dustbinWidth,this.dustbinWallThickness);
        pop();


    }
}