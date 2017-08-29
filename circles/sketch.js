function setup() {
  createCanvas(640, 480);
  drops = [];
  colorMode(HSB, 255, 255, 255);
  strokeWeight(2);
}

function draw() {
    noFill();
    clear();
    if(mouseIsPressed) {
        newDrop();
    }
    for(i = 0; i < drops.length; i++) {
        droplet(drops[i][0], drops[i][1], drops[i][2], drops[i][3]);
    }
    waveSimple(80, 80, 50);
    if (frameCount % 20 == 0) {
        addWave();
    }
    popOld();
}

function popOld() {
    while(drops.length != 0 && frameCount - drops[0][2] > 256) {
        drops.shift()
    }
}

function newDrop() {
    c = random(0, 255);
    shiftX = random(-4,4);
    shiftY = random(-4,4);
    drops.push([mouseX+shiftX, mouseY+shiftY, frameCount, c]);
}

function addWave() {
    x = random(0, 640);
    y = random(0, 480);
    c = random(0, 255);
    drops.push([x,y,frameCount, c]);
}

function droplet(x,y,start, color) {
    stroke(color, 255 + start - frameCount, 255);
    waveSimple(x,y,frameCount-start)
}

function waveSimple(x,y,r) {
    ellipse(x,y,r);
}