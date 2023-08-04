img = "";

function setup() {
    canvas = createCanvas(500,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload() {
    img = loadImage('water.jpg');
}

function draw() {
    image(img,0,0,500,500);
}

function backMouse() {
    window.location = "home_page.html";
}
