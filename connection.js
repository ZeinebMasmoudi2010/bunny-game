class Connection{
    constructor(a,b){
    var lastrope=a.body.bodies.length-2
    this.connection=Constraint.create({
    bodyA:a.body.bodies[lastrope],
    bodyB:b,
    length:-10,
    stiffness:0.01

    })
    World.add(world,this.connection)
    }
    detach(){
        World.remove(world,this.connection)
    }
}