function Box(_x, _y){
  this.x = _x;
  this.y = _y;

  this.xSpeed = 0;
  this.ySpeed = random(1, 2); // 1 - 2 (falling)
  this.rSpeed = random(-.02, .02); // rotation speed

  this.angle = 0;

  /* choose a color scheme at random */
  //if(random(100) > 50){ // 50-50 chance
    this.boxColor = color(random(100, 255), 0, 0); // red
    this.ribbonColor = color(0, random(100, 255), 0); // green
 // } else {
    this.boxColor = color(0, random(100, 255), 0); // green
    this.ribbonColor = color(random(100, 255), 0, 0); // red
 // }

  this.display = function(){

    push();
    translate(this.x, this.y);
    rotate(this.angle);

    ellipseMode(CENTER);
    fill(250);
    noStroke();
    ellipse(0, 0, 20); //make dog bone

    pop();

  }

  this.move = function() {
    this.y += this.ySpeed; // spin
  }

  this.spin = function() {
    this.angle += this.rSpeed; // spin
  }



}