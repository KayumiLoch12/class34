class Ball {

    constructor(x,y,r){
    var options = {
     restitution: 0.8,   
    frictionAir: 0.005,
    density: 0.06
    }
     this.body = Bodies.circle(x,y,r,options); 
     World.add(world, this.body);
     this.width = r
     this.height = r
    
    
    }
    display(){
    var angle = this.body.angle
    var pos = this.body.position 
    push();
    translate(pos.x,pos.y)
    rotate(angle)
    strokeWeight(4);
    stroke("pink")
    fill("lightpink")
    ellipseMode(CENTER);
    ellipse(0,0,this.width,this.height)
    pop();
    }
    
    
    
    
    
    }