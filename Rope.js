class Rope {

constructor(a,b){
var options = {
bodyA: a,
pointB: b,
stiffness: 1.2,
length:250
}
this.rope = Constraint.create(options)
World.add(world,this.rope)
this.pointB = b;

}
display(){
var pointA = this.rope.bodyA.position;
stroke("darkpink")
strokeWeight(3)
line(pointA.x, pointA.y, this.pointB.x, this.pointB.y )


}





}