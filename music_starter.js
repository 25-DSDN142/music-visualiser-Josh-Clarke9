
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(10, 20, 30)

//variables
rectMode (CENTER);
angleMode (DEGREES);
let midX = canvasWidth/2
let midY = canvasWidth

//MAPS
let ellipsePos = map(drum,0,300,400,650)
let vocalPos = map(vocal,0,300,800,650)

//animation
stroke(154,205,50);
noFill();
translate(width / 2, height / 2)

for (var i = 0; i < 200; i++) {
  push()

  rotate(sin(frameCount + i * 4) * bass)

  rect(0, 0, 600 - i * 3, 600 - i * 3+vocal*2, 200 - i+vocal*2)

  pop()
}

//drawings
stroke(100,150,60);
strokeWeight(3);
fill(200,345,60);
ellipse(-400,midY/24+vocal*9,drum/8,drum/8);
ellipse(-500,midY/24+vocal*8,drum/4,drum/4);
ellipse(-600,midY/24+vocal*7,drum/2,drum/2);

stroke(100,150,60);
strokeWeight(3);
fill(200,345,60)
ellipse(ellipsePos-50,midY/24+vocal*9,drum/8,drum/8);
ellipse(ellipsePos+50,midY/24+vocal*8,drum/4,drum/4);
ellipse(ellipsePos+150,midY/24+vocal*7,drum/2,drum/2);

//text
stroke(255,255,255);
strokeWeight(3);
fill(10,20,30);
textFont('Impact'); // please use CSS safe fonts
rectMode(CENTER)
textSize(8);
textAlign(CENTER);
textSize(vocal/2);
text(words, 0, + 330);
}