let cs = {      // Canvas Size
    x: 500,
    y: 500
}

function setup() {
    createCanvas(cs.x, cs.y);
    background(0);
}

function draw() {
    noFill();
    strokeWeight(0);
    stroke(150);

    // Define randomness corresponding to canvas WIDTH
    ranx = function(){
        result = random(0,cs.x);
        return result;
    }
    // Define randomness corresponding to canvas HEIGHT
    rany = function(){
        result = random(0,cs.y);
        return result;
    }

    // Draw Quads
    if (random(3) < 1) {
        // Red one
        fill('rgba(255, 0, 0, 0.25)');
        quad(ranx() ,rany() ,ranx() ,rany() ,ranx() ,rany() ,ranx() ,rany());
    } else if (random(3) > 1 && random(3) < 2) {
        // Green one
        fill('rgba(0, 255, 0, 0.25)');
        quad(ranx() ,rany() ,ranx() ,rany() ,ranx() ,rany() ,ranx() ,rany());
    } else {
        // Blue one
        fill('rgba(0, 0, 255, 0.25)');
        quad(ranx() ,rany() ,ranx() ,rany() ,ranx() ,rany() ,ranx() ,rany());
    }
}
