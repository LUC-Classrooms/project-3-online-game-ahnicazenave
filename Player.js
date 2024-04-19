function Player(tempX, tempY) {
  // properties
  this.x = tempX;
  this.y = tempY;
  this.s = .4
  this.diam = 50;
  this.angle = 0;

  this.display = function () {
    beginShape();
    //floor
    push(); //create new layer
    translate(this.x, this.y); //move origin point
    rotate(this.r); 
    scale(this.s);
    fill(234, 221, 202); // beige dog color
    //tail
    triangle(65, -20, 45, 45, 20, 35);//resting tail when mouse NOT pressed 
    //back legs
    quad(-95, 75, -40, 45, -50, 90, -80, 105); //left dog back leg
    quad(40, 45, 95, 75, 80, 105, 50, 90); //right dog back leg
    //body
    quad(-30, -15, 30, -15, 60, 95, -60, 95); //dog body background
    fill(240) //white belly color
    ellipse(0, 45, 50, 60) //belly 
    strokeWeight(.75); //front legs stroke
    line(-40, 40, -50, 90); //left line of front left leg
    line(-50, 90, -20, 90); //bottom line of front left leg
    line(-20, 90, -15, 40); //right line of front left leg
    line(15, 40, 20, 90); //left line of front right leg
    line(20, 90, 50, 90); //bottom line of front left leg
    line(50, 90, 40, 40); //right line of front right leg
    //ears
    strokeWeight(.5); //stroke weight for everything besides front legs
    fill(234, 221, 202); // beige dog color
    ellipse(-25, -135, 25, 50); //left dog ear
    ellipse(25, -135, 25, 50); //right dog ear
    fill(243, 207, 198); //inner ear pink color 
    ellipse(-25, -130, 15, 35); //left inner dog ear
    ellipse(25, -130, 15, 35); //right inner dog ear
    //head
    fill(234, 221, 202); // beige dog color
    quad(-35, -115, 35, -115, 60, -15, -60, -15); //dog head
    fill(0); // eyes and nose black color
    ellipse(-20, -85, 15); //left eye iris
    ellipse(20, -85, 15); //right eye iris
    ellipse(0, -45, 30, 20); //nose
    fill(255); // eyes white color 
    ellipse(-20, -87, 9); //left eye pupil
    ellipse(20, -87, 9); //right eye pupil
    pop(); //dispose of layer

    endShape();
  
  }


  this.move = function () {
//folow the mouse for now
    this.x = mouseX;
    this.y = mouseY;

  }
}
