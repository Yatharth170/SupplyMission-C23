class Package{
    constructor(x,y,width,height){
        var property={
            isStatic:true
        }
      this.body=Bodies.rectangle(x,y,width,height,property);
      this.width=width;
      this.height=height;
      World.add(world,this.body);
      
    }
    display(){
        rectMode(CENTER);
        fill("red");
        rect(this.body.position.x,this.body.position.y,this.width,this.height);
    }

}

