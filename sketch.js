const radius = 200;
let moon;
let img;
let vid
let theta = 0;
let goddess

function setup() {
  createCanvas(1600, 1000, WEBGL);
  //noStroke();
  fill(200);
  moon = loadModel('assets/moon.obj');
  goddess = loadModel('assets/12328_Statue_v1_L2.obj');
  img = loadImage('assets/download.jpg');
  vid = createVideo(['assets/lumenglitches.mp4']);
  vid.loop();
  vid.hide();
	    background(0);

  stroke(0, 0, 0, 15);

}

function draw() {

	randomChord();
  randomChord();

  push(); 
  //theta = radians(frames);
  noStroke();
 //rotateZ(theta*.4, [theta*-2]);
  rotateX(theta*.08);
  rotateY(theta*.8);
  rotateZ(theta*.08);
  texture(vid);
  scale(.2);
    translate(2.3*radius, -4.2*radius, 2*radius);
  model(moon);

     theta += .001;
  pop(); 

push(); 
  noStroke();
  translate(2.2 * radius, 300, 5);
rotateX(11000);
rotateY(10050);
rotateZ(theta*.5);
  texture(vid);
  scale(3);
  model(goddess);
      theta += 0.05;
  pop(); 

  push(); 
    noStroke();
  translate(-2.2 * radius, 300, 5);
rotateX(11000);
rotateY(10050);
rotateZ(theta*.5);
  texture(vid);
  scale(3);
  model(goddess);
      theta += 0.05;
  pop(); 

}

function randomChord() {
  // find a random point on a circle
  push();
  let angle1 = random(0, 2 * PI);
  let xpos1 = -1500 + -1500 * cos(angle1);
  let ypos1 = -1500 + -1500 * sin(angle1);

  // find another random point on the circle
  let angle2 = random(0, 2 * PI);
  let xpos2 = 500 + -800 * cos(angle2);
  let ypos2 = 500 + -800 * sin(angle2);
  stroke(color(random(255), random(255), random(255)));
  // draw a line between them
  line(xpos1, ypos1, xpos2, ypos2);
  pop();
}