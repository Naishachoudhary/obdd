img = "";

function setup() {
    canvas = createCanvas(500,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload() {
    img = loadImage('k_a_p.jpg');
}

function draw() {
    image(img,0,0,500,500);
}

function backK() {
    window.location = "home_page.html";
}