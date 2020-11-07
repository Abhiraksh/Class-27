class sling {
    constructor(bodyA,bodyB){
     var options ={
         bodyA: bodyA,
         bodyB: bodyB,
         stiffness: 0.04,
         length: 20
     }
     this.chain = Matter.Constraint.create(options);
     World.add(world,this.chain);
    }
    show(){
     var connect1 = this.chain.bodyA.position;
     var connect2 = this.chain.bodyB.position;
     strokeWeight(5);
     line(connect1.x,connect1.y,connect2.x,connect2.y);
    }
}