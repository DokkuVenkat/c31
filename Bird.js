class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    //empty array to store bird position
    this.trajectory=[]
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    
    //get the bird position only when x velocity >10 and x position >200,to reduce the smoke
  if(this.body.velocity.x>10 &&this.body.position.x>200){
    // get the bird position and store it in trajectory=[[x1,y1],[x2,y2]] = array inside the array
    // array stores many values in a single variable
    var position=[this.body.position.x,this.body.position.y]
    this.trajectory.push(position)
  }
  
//display the smoke image on x and y position of the bird
for(var i =0;i<this.trajectory.length;i=i+1){
image(this.smokeImage,this.trajectory[i][0],this.trajectory[i][1])
}
  }
}
