class Log extends BaseClass{
  constructor(x,y,height,angle){
    super(x,y,20,height,angle);
   // his.image = loadImage("sprites/wood2.png");t
    Matter.Body.setAngle(this.body, angle);
  }
}