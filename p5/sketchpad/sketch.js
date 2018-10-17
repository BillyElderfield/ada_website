var paint = "green";
var brush = "ellipse";
var rubber = false;
let size = 20;
function setup() {
  createCanvas(600, 600)
  background(0, 0, 0)
}

function draw() {
  if(keyIsPressed) {
    if (key == 'r') {
      paint = "red";
    }
    else if(key == 'g') {
      paint = "green";
    }
    else if(key == "b"){
      paint = "blue";
    }
    else if(key == "l"){
      size += 5;
    }
    else if(key == "k"){
      size -= 5;
    }
    else if(key == "t"){
      brush = "triangle";
    }
    else if(key == "e"){
      brush = "ellipse";
    }
    else if(key == "s"){
      brush = "square";
    }
    else if(key == "i"){
      rubber = false;
    }
    else if(key == "o"){
      rubber = true;
    }
  }
  if(mouseIsPressed){
    if(rubber){
      fill(0);
      stroke(0);
    }
    else{
      fill(paint);
      stroke(paint);
    }
    if(brush == "ellipse"){
      ellipse(mouseX, mouseY, size, size);
    }
    else if(brush == "triangle"){
      triangle(mouseX+size, mouseY+size, mouseX-size, mouseY+size, mouseX, mouseY-size);
    }
    else if(brush == "square"){
      rect(mouseX-(size/2), mouseY-(size/2), size, size)
    }
  }
}
