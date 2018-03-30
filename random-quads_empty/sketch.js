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
    strokeWeight(1);
    stroke(150);

    ranx = function(){
        result = random(0,cs.x);
        return result;
    }
    rany = function(){
        result = random(0,cs.y);
        return result;
    }

    quad(ranx() ,rany() ,ranx() ,rany() ,ranx() ,rany() ,ranx() ,rany());
}
