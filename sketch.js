// Variables for the ball and paddle
let xBall, yBall, diameter, xBallChange, yBallChange;
let xPaddle, yPaddle, paddleWidth, paddleHeight;
let score = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Initialize the ball and paddle variables
  xBall = Math.floor(Math.random() * 300) + 50;
  yBall = 50;
  diameter = 50;
  xBallChange = 5;
  yBallChange = 5;
  xPaddle = windowWidth / 2;
  yPaddle = windowHeight - 100;
  paddleWidth = 100;
  paddleHeight = 25;
}

function draw() {
  background(0);
  // Update the ball's position
  xBall += xBallChange;
  yBall += yBallChange;

  // Check for ball-wall collisions
  if (xBall < diameter/2 || xBall > windowWidth - 0.5*diameter) {
    xBallChange *= -1;
  }
  if (yBall < diameter/2 || yBall > windowHeight - 0.5*diameter) {
    yBallChange *= -1;
  }

  // Check for ball-paddle collisions
  if ((xBall > xPaddle && xBall < xPaddle + paddleWidth) && (yBall + (diameter/2) >= yPaddle)) {
    yBallChange *= -1;
    score++;
  }

  // Draw the ball and paddle
  fill(255, 0, 255);
  noStroke();
  ellipse(xBall, yBall, diameter, diameter);
  fill(0, 255, 255); // Change the fill color to cyan
  rect(xPaddle, yPaddle, paddleWidth, paddleHeight);

  // Display the score
  fill(0, 255, 255);
  textSize(24);
  text("Score: " + score, 10, 25);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    xPaddle -= 50;
  } else if (keyCode === RIGHT_ARROW) {
    xPaddle += 50;
  }
}