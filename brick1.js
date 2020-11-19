class Brick1 {
    constructor( width, height) {
      
          '
      this.body = Bodies.rectangle( width, height);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push();
      translate(pos.x, pos.y);
      
      rectMode(CENTER);
     
      rect(, this.width, this.height);
      pop();
    }
  };
  