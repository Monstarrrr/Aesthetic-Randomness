let x = 0;
let y = 0;

function setup() {
    createCanvas(1000, 1000);
    background(0);
}

function draw() {
    noFill();
    strokeWeight(1);
    stroke(150);

    let ran1 = random(0, 1000);
    let ran2 = random(0, 1000);
    let ran3 = random(0, 1000);
    let ran4 = random(0, 1000);
    let ran5 = random(0, 1000);
    let ran6 = random(0, 1000);
    let ran7 = random(0, 1000);
    let ran8 = random(0, 1000);

    quad(ran1, ran2, ran3, ran4, ran5, ran6, ran7, ran8);
}
