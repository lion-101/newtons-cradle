class chain{
constructor(body1,body2,offsetX,offsetY){
    this.offsetX=offsetX
    this.offsetY=offsetY
    

var options={
    bodyA:body1,
    bodyB:body2,

    pointB:{x:this.offsetX,y:this.offsetY},
    stiffness:0.04
    
}
this.chain=Constraint.create(options)
world.add(Constraint)
world.this,chain
}

display(){
    var pointA=this.chain.bodyA.position
    var pointB=this.chain.bodyB.position
    strokeweight(4)
    line(pointA.n,pointA.x,pointB.x,pointA.y,pointB.y)

}
}
