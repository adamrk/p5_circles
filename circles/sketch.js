function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  drops = [];
  colorMode(HSB, 255, max_size(), 255);
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
    if (frameCount % 20 == 0) {
        addWave();
    }
    popOld();
}

function popOld() {
    while(drops.length != 0 && frameCount - drops[0][2] > max_size()) {
        drops.shift();
    }
}

function newDrop() {
    c = random(0, 255);
    shiftX = random(-4,4);
    shiftY = random(-4,4);
    drops.push([mouseX+shiftX, mouseY+shiftY, frameCount, c]);
}

function addWave() {
    x = random(0, width);
    y = random(0, height);
    c = random(0, 255);
    drops.push([x,y,frameCount, c]);
}

function droplet(x,y,start, color) {
    stroke(color, max_size() + start - frameCount, 255);
    waveSimple(x,y,frameCount-start);
}

function waveSimple(x,y,r) {
    ellipse(x,y,r);
}

function max_size() {
    return pow(width * height, 0.5) / 5 ;
}