//This version of the 4-5-6 game is without a bank.
//for first die set.
//requires p5.dom.js library
var z1 = 0;
var x = 0;
var y = 0;
//for 2nd die set.
var z = 0;
var t = 0;
var a = 0;
var button;
function setup() {
  createCanvas(500, 500);
  z1 = 0;
  button = createButton("Player 1 button");
  button.position(127, 220);
  button.mousePressed(check_odd);
  button = createButton("Player 2 button");
  button.position(280, 220);
  button.mousePressed(check_odd2);
}
function draw() {
  background(255);
  fill(0);
  textSize(20);
  if_statements();
  rectangles();
} // end of draw function.
function rectangles(){
  text(z1, 10, 80, 200, 200);
  text(x, 60, 80, 200, 200);
  text(y, 110, 80, 200, 200);
  text(t, 170, 80, 200, 200);
  text(a, 220, 80, 200, 200);
  text(z, 270, 80, 200, 200);
  noFill();
  rect(0, 75, 30, 30);
  rect(50, 75, 30, 30);
  rect(100, 75, 30, 30);
  rect(160, 75, 30, 30);
  rect(210, 75, 30, 30);
  rect(260, 75, 30, 30);
}
function if_statements(){
  choices = ["Player 1 loses.", "Player 1 has a trip.", "Player 1 loses.","Player 1 wins!","Player 2 loses.","Player 2 has a trip.", "Player 2 wins!","Draw."]
  if (z1 == 1 && x == 2 && y == 3) {
    text(choices[0], 0, 150, 80, 200);
  }
  if (z1 == 1 && x == 1 && y == 1) {
    text(choices[1], 0, 150, 80, 200);
  }
  if (z1 == 2 && x == 2 && y == 2) {
    text(choices[1], 0, 150, 80, 200);
  }
  if (z1 == 3 && x == 3 && y == 3) {
    text(choices[1], 0, 150, 80, 200);
  }
  if (z1 == 4 && x == 4 && y == 4) {
    text(choices[1], 0, 150, 80, 200);
  }
  if (z1 == 5 && x == 5 && y == 5) {
    text(choices[1], 0, 150, 80, 200);
  }
  if (z1 == 6 && x == 6 && y == 6) {
    text(choices[1], 0, 150, 80, 200);
  }
  if (z1 == 4 && x == 5 && y == 6) {
    text(choices[3], 0, 150, 80, 200);
  }
  if (t == 1 && a == 2 && z == 3) {
    text(choices[4], 250, 420, 80, 200);
  }
  if (t == 1 && a == 1 && z == 1) {
    text(choices[5], 420, 150, 80, 200);
  }
  if (t == 2 && a == 2 && z == 2) {
    text(choices[5], 420, 150, 80, 200);
  }
  if (t == 3 && a == 3 && z == 3) {
    text(choices[5], 420, 150, 80, 200);
  }
  if (t == 4 && a == 4 && z == 4) {
    text(choices[5], 420, 150, 80, 200);
  }
  if (t == 5 && a == 5 && z == 5) {
    text(choices[5], 420, 150, 80, 200);
  }
  if (t == 6 && a == 6 && z == 6) {
    text(choices[5], 420, 150, 80, 200);
  }
  if (t == 4 && a == 5 && z == 6) {
    text(choices[6], 420, 150, 80, 200);
  }
  if (z1 == 1 && x == 2 && y == 3 && t == 4 && a == 5 && z == 6) {
    text(choices[7], 0, 150, 80, 200);
  }
}
function check_odd() {
  z1 = round(random(0.5, 6.4));
  x = round(random(0.5, 6.4));
  y = round(random(0.5, 6.4));
  redraw();
}
function check_odd2() {
  t = round(random(0.5, 6.4));
  a = round(random(0.5, 6.4));
  z = round(random(0.5, 6.4));
  redraw();
}
