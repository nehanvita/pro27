class Rope {
    constructor(body1,body2){
    
    var options = {
    body1 : body1,
    body2 : body2,
    stiffness:0.04,
    length:10
    
    }
    
    
    this.rope=Constraint.create(options)
    World.add(world,this.rope)
    
    }
    
    
    
    
    
    display(){
    var point1 =this.rope.body1.position
    var point2 =this.rope.body2.position


    line (point1.x,point1.y,point2.x,point2.y)
    
    
    }
    }