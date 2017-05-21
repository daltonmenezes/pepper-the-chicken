function Sprite(x, y, width, height, path) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = new Image();
    this.path = path;

    this.draw = function (context, xCanvas, yCanvas) {
        this.image.src = this.path;
        context.drawImage(this.image, this.x, this.y, this.width, this.height, xCanvas, yCanvas, this.width, this.height);
    }
}

let background_sprite = new Sprite(0, 0, 667, 500, "src/sprites/background.png"), chicken_sprite = [], collider = [],
    menu_sprite = new Sprite(0, 0, 601, 498, "src/sprites/main-menu.png"),
    sand = new Sprite(0, 0, 600, 128, "src/sprites/ground.png");

collider[0] = new Sprite(0, 0, 108, 111, "src/sprites/cactus.png");
collider[1] = new Sprite(0, 0, 70, 45, "src/sprites/cactus2.png");
collider[2] = new Sprite(0, 0, 86, 96, "src/sprites/cactus3.png");
collider[3] = new Sprite(0, 0, 124, 73, "src/sprites/stone.png");
collider[4] = new Sprite(0, 0, 131, 74, "src/sprites/bush.png");
collider[5] = new Sprite(0, 0, 145, 88, "src/sprites/tree.png");

chicken_sprite[0] = new Sprite(0, 0, 60, 47, "src/sprites/chicken.png");
chicken_sprite[1] = new Sprite(0, 0, 60, 47, "src/sprites/chicken2.png");
chicken_sprite[2] = new Sprite(0, 0, 60, 47, "src/sprites/chicken-hit.png");
