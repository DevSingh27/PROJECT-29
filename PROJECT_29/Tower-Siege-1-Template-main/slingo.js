class sling{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            lenght: 1,
            stiffness: 0.05
        }

        this.slingo = Constraint.create(options);
        this.pointB = pointB;
        World.add(world,this.slingo);
    }

    fly(){
        this.slingo.bodyA = null;
    }
    
    display(){
      if(this.slingo.bodyA){
          var pointA = this.slingo.bodyA.position;
          var pointB = this.pointB;

          strokeWeight(4);
          stroke("cyan");
          line(pointA.x, pointA.y, pointB.x, pointB.y);
      }
  }
}