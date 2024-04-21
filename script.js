/**
 * Project 3 versions 0-4 - 2D Web Game
 * Name: Ahni Cazenave
 * 
 * Use this template to get started creating a simple 2D game for the web using P5.js. 
 */

var gameState = "splash";
var player1;
var gameTimer; //time for game play
var testBox; // a box to preview on the splash screen
var dropTimer; // regulate box drops
var presents = new Array(0); // an empty array called "presents"
var score = 0;

function setup() {
  createCanvas(600, 400);
  player1 = new Player(width/2, height * 6/8);
  gameTimer = new Timer(10000); // 10 seconds
  dropTimer = new Timer(1000);
  testBox = new Box(width/2, height/3);

}

function draw() {
  background(200);
  /* un-comment each line to see it work */
  //splash(); // call the splash screen function (below)
  //play(); // call the play screen function (below)
  //gameOver(); // call the gameOver screen function (below)
  switch (gameState)  {
    case "splash" :
      splash(); // go to the "splash" screen
      break;
    case "play" :
      play(); // go to the "play" screen
      break;
    case "gameOver" :
      gameOver(); // go to the "game over" screen
      break;
    default :
      console.log("no match found");
  
  }
}

function splash() {
  // this is what you would see when the game starts
  background(200);
  textAlign(CENTER);
  textSize(16);
  fill(0);
  text("Let's Play a Game!", width / 2, height / 2);
  textSize(12);
  text("(click the mouse to continue)", width / 2, height / 2 + 30);
  testBox.display();
  testBox.spin();
}

function play() {
  // this is what you see when the game is running 
  background(115, 194, 251);
  fill(250)
  player1.display(); 
  if(gameTimer.isFinished()){
    gameState = "gameOver";
  }
  if(dropTimer.isFinished()) {
    let p = new Box(random(width), -40);
    // new box, anywhere across the width of the canvas, but 40px above the canvas
    presents.push(p); // add object 'p' to the 'presents' Array
    dropTimer.start(); // restart timer for next drop
  }

  for(let i = 0; i < presents.length; i++) { 
    // for each present in the array, do the following:
    presents[i].display(); // show it on the canvas
    presents[i].move(); // make it fall
    presents[i].spin(); // make it spin
  
    if(presents[i].y > height) {
      // present went below the canvas
      presents.splice(i, 1); // remove from array
      score --; //lose point if missed
    }
    let d = dist(presents[i].x, presents[i].y, player1.x, player1.y);
    if (d < 50) {
      // if it's within 50 pixels, do something!
    }
    if (d < 50) {
      presents.splice(i, 1); // remove 1 item at index 'i'
      score ++; //gain point if touched
    }
  } //end of for loop

  textAlign(LEFT);
  textSize(16);
  text("Elapsed Time: " + gameTimer.elapsedTime, 20, 30);

  text("Score: " + score, 20, 50);

  }

function gameOver() {
  // this is what you see when the game ends
  background(0);
  fill(255, 0, 0)
  textAlign(CENTER);
  textSize(16);
  text("Game Over!", width / 2, height / 2);
  text("Your Final Score: " + score, width/2, height * 2/3);
}

function mousePressed() {
  
  console.log("click!");
  if(gameState == "splash") { 
    gameState = "play"; 
    gameTimer.start(); //start the timer
    dropTimer.start(); // start the drop timer for presents
    score = 0; //restart score
} else if(gameState == "play") { 
    //gameState = "gameOver"; 
} else if(gameState == "gameOver") { 
    gameState = "splash"; 
} 

}

function keyPressed () {
  switch(keyCode) {
    case UP_ARROW :
      player1.y -= 30;
      player1.angle = 0; 
      if(player1.y < 0) player1.y = height;
      break;
    case DOWN_ARROW :
      player1.y += 30;
      player1.angle = PI;
      if(player1.y > height) player1.y = 0;
      break;
    case LEFT_ARROW :
      player1.x -= 30;
      player1.angle = PI + PI/2;
      if(player1.x < 0) player1.x = width;
      break;
    case RIGHT_ARROW :
      player1.x += 30;
      player1.angle = PI/2;
      if(player1.x > width) player1.x = 0;
      break;
    default :
      console.log("use the arrow keys to move!");
  }

}