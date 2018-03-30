let cs = {      // Canvas Size
    x: 500,
    y: 600
}
let nq = 1000;  // Total Quads
let ps = 50;   // Time between each printing (ms)

function setup() {
    createCanvas(cs.x, cs.y);
    background(50);
}

function draw() {
    noFill();
    strokeWeight(0);
    stroke(150);

    // Define x-axe randomness corresponding to canvas WIDTH
    ranx = function(){
        result = random(0,cs.x);
        return result;
    }
    // Define y-axe randomness corresponding to canvas HEIGHT
    rany = function(){
        result = random(0,cs.y);
        return result;
    }

    function drawQuads(){

        let x = 0;

        //Every x miliseconds
        setTimeout(function(){
            
            // Draw Quad
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

            // How many quads
            x++;
            if(x<=nq){
                drawQuads();
            }

        },ps)
    }
    drawQuads();
    noLoop();
}
