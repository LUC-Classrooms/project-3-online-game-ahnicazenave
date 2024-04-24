function Box(_x, _y){
  this.x = _x;
  this.y = _y;


  this.xSpeed = 0;
  this.ySpeed = random(1, 2); // 1 - 2 (falling)
  this.rSpeed = random(-.02, .02); // rotation speed

  this.angle = 0;

 
  this.display = function(){

    push();
    translate(this.x, this.y);
    scale(.7);
  
    fill(250);
    noStroke();
    
    ellipse(-25, 10, 20); 
    ellipse(-25, 25, 20); 
    rect(-25, 10, 50, 15);
    ellipse(25, 10, 20); 
    ellipse(25, 25, 20); 

    pop();


  }

  this.move = function() {
    this.y += this.ySpeed; // spin
  }

  this.spin = function() {
    this.angle += this.rSpeed; // spin
  }



}