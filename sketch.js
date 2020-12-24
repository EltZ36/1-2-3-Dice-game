//This version of the 4-5-6 game is without a banker.
//requires p5.dom.js library
//for first die set.
var z = 0;
var x = 0;
var y = 0;
var p1bet;
//for 2nd die set.
var t = 0;
var a = 0;
var z2 = 0;
var p2bet;

function setup() {
  createCanvas(500, 500);
  button = createButton("Player 1 button");
  button.position(127, 220);
  p1bet = createInput('');
  p1bet.position(127, 270);
  p1bet.size(70);
  button.mousePressed(check_odd);
  button = createButton("Player 2 button");
  button.position(280, 220);
  button.mousePressed(check_odd2);
  p2bet = createInput('');
  p2bet.position(280, 270);
  p2bet.size(70);
  //player 1 input for betting
  button = createButton('Enter');
  button.position(200,270);
  button.mousePressed(bet1);
  button = createButton('Enter');
  button.position(200,270);
  button.mousePressed(bet1);
  //player 2 input for betting
  button = createButton('Enter');
  button.position(350,270);
  button.mousePressed(bet2);
  button = createButton('Enter');
  button.position(350,270);
  button.mousePressed(bet2);
}
function draw() {
  background(190);
  fill(0);
  textSize(20);
  bet1();
  bet2();
  if_statements();
  rectangles();
}
function rectangles(){
  text(z, 10, 80, 200, 200);
  text(x, 60, 80, 200, 200);
  text(y, 110, 80, 200, 200);
  text(t, 170, 80, 200, 200);
  text(a, 220, 80, 200, 200);
  text(z2, 270, 80, 200, 200);
  noFill();
  rect(0, 75, 30, 30);
  rect(50, 75, 30, 30);
  rect(100, 75, 30, 30);
  rect(160, 75, 30, 30);
  rect(210, 75, 30, 30);
  rect(260, 75, 30, 30);
}
function if_statements(){
  choices = ["Player 1 loses.", "Player 1 has a trip.", "Player 1 wins!","Player 2 loses.","Player 2 has a trip.", "Player 2 wins!","Draw."];
  switch(true){
    //1st die set 
    case z == 1 && x == 2 && y == 3:
      text(choices[0], 0, 150, 80, 200);
      break;
    case z == 1 && x == 1 && y == 1:
    case z == 2 && x == 2 && y == 2:
    case z == 3 && x == 3 && y == 3:
    case z == 4 && x == 4 && y == 4:
    case z == 5 && x == 5 && y == 5:
    case z == 6 && x == 6 && y == 6:
      text(choices[1], 0, 150, 80, 200);
      break;
    case z == 4 && x == 5 && y == 6:
      text(choices[2], 0, 150, 80, 200);
      break;
    //2nd die set
    case t == 1 && a == 2 && z2== 3:
      text(choices[4], 420, 150, 80, 200);
      break;
    case t == 1 && a == 1 && z2 == 1:
    case t == 2 && a == 2 && z2 == 2:
    case t == 3 && a == 3 && z2 == 3:
    case t == 4 && a == 4 && z2 == 4:
    case t == 5 && a == 5 && z2 == 5:
    case t == 6 && a == 6 && z2 == 6:
      text(choices[5], 420, 150, 80, 200);
      break;
    case t == 4 && a == 5 && z2 == 6:
      text(choices[6], 420, 150, 80, 200);
      break;
    case t == 4 && x == 5 && y == 6 && t == 4 && a == 5 && z2 == 6:
      text(choices[7], 420, 150, 80, 200);
      break;
  }
}
function check_odd() {
  z = round(random(0.5, 6.4));
  x = round(random(0.5, 6.4));
  y = round(random(0.5, 6.4));
  redraw();
}
function check_odd2() {
  t = round(random(0.5, 6.4));
  a = round(random(0.5, 6.4));
  z2 = round(random(0.5, 6.4));
  redraw();
}
function bet1(){
  p1bet = createInput('');
  p1bet.position(127, 270);
  p1bet.size(70);
  pbet1 = p1bet.value();
  text("Player 1 bets" + pbet1+ "dollar(s).",127,310,80,200);
  p1bet.value('');
}
}
function bet2(){
  p2bet = createInput('');
  p2bet.position(280, 270);
  p2bet.size(70);
  pbet2 = p2bet.value();
  text("Player 2 bets"+pbet2+"dollar(s).",280,310,80,200);
  p2bet.value('');
}
