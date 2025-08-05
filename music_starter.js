
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)

//variables
angleMode (DEGREES);
let midX = canvasWidth/2
let midY = canvasWidth/2

//MAPS
let ellipsePos = map(drum,0,100,200,450)
let vocalPos = map(vocal,0,100,200,450)

stroke(50,70,5);
strokeWeight(10);
fill(0,50,0);
ellipse(vocalPos,midY/2,50,50);
ellipse(vocalPos+400,midY/2,50,50);
ellipse(vocalPos+800,midY/2,50,50);

stroke(100,150,60);
strokeWeight(10);
fill(200,345,60)
ellipse(ellipsePos+200,midY/8,50,50);
ellipse(ellipsePos+200,midY,50,50);
ellipse(ellipsePos+200,midY/2,50,50);

   stroke(100,150,60);
   strokeWeight(5);
   fill(50,50,240);
   textFont('Verdana'); // please use CSS safe fonts
   rectMode(CENTER)
   textSize(24);
  
//    let bar_spacing = height / 10;
//    let bar_height = width / 12;
//    let bar_pos_x = width / 2;
 
// // changes 
//    // vocal bar is red
//    fill(200, 0, 0);
//    rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
//    fill(0);
//    text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
//    // drum bar is green
//    fill(0, 200, 0);
//    rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
//    fill(0);
//    text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
//    // bass bar is blue
//    fill(50, 50, 240);
//    rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
//    fill(0);
//    text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
//    // other bar is white
//    fill(200, 200, 200);
//    rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
//    fill(0);
//    text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
//    fill(255, 255, 0);
 
//    // display "words"
    textAlign(CENTER);
    textSize(vocal);
    text(words, midX, midY/2);
}