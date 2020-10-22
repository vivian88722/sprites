const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 600;
const BG_COLOR = [45, 106, 125];
let mermaid;
let mermaidAnim;

function preload() {
  const mermaidSpritesheet = loadSpriteSheet("img/mermaid.png", 32, 32, 5);
  mermaidAnim = loadAnimation(mermaidSpritesheet);
  mermaid = createSprite(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2, 32, 32);
  mermaid.moveSpeed = 2;
  mermaid.scale = (2);
  
}

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  mermaid.addAnimation("move", mermaidAnim);
  mermaid.addImage("still", loadImage("img/mermaid_still.png"));
  mermaid.setDefaultCollider();
}

function update(object) {


  if (keyDown("up") || keyDown("down") || keyDown("left") || keyDown("right")) {
    if (keyDown("up")) {
      object.addSpeed(2, 270);
    }
    if (keyDown("down")) {
      object.addSpeed(2, 90);
    }
    if (keyDown("left")) {
      object.addSpeed(2, 180);
      object.mirrorX(-1);
    }
    if (keyDown("right")) {
      object.addSpeed(2, 0);
      object.mirrorX(1);
    }
  } else {
    object.setSpeed(0);
  }
  drawObject(object);
}

function drawObject(object) {
  if (object.getSpeed() > 0.0001) {
    object.changeAnimation("move");
  } else {
    object.changeImage("still");
  }
  mermaid.limitSpeed(mermaid.moveSpeed);
  drawSprite(object);
}

function draw() {
  background(BG_COLOR);
  update(mermaid);
}
