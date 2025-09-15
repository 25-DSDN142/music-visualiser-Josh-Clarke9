
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(10, 20, 30)

//variables
rectMode (CENTER);
angleMode (DEGREES);
let midX = canvasWidth/2
let midY = canvasWidth/2

//MAPS
let ellipsePos = map(drum,0,100,200,450)
let vocalPos = map(vocal,0,100,200,450)

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
{push()
rotate(sin(frameCount + i * 4) * 100)
stroke(100,150,60);
strokeWeight(5);
fill(200,345,60);
ellipse(vocalPos-800,midY/12,bass,bass);
ellipse(vocalPos-400,midY/12,bass,bass);
ellipse(vocalPos,midY/12,bass,bass);

stroke(100,150,60);
strokeWeight(5);
fill(200,345,60)
ellipse(ellipsePos-400,midY/24,drum,drum);
ellipse(ellipsePos-400,midY/12,drum,drum);
ellipse(ellipsePos-400,midY/6,drum,drum);
pop()}
   stroke(100,150,60);
   strokeWeight(3);
   fill(154,205,50);
   textFont('Impact'); // please use CSS safe fonts
   rectMode(CENTER)
   textSize(8);
    textAlign(CENTER);
    textSize(vocal/2);
    text(words, 0, + 330);
}