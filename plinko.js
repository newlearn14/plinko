class plinko{
    constructor(x,y){
     var option = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0,
        'isStatic':true
        }
        
        this.body=Bodies.circle(x,y,10,option)
        
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;

        push();
        translate(pos.x,pos.y);
        rotate(angle)
        
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,10,10);
        pop();
    }
}