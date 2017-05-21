let ground = {
    x: 0,
    y: 500,
    height: 50,

    update: function () {
        this.x -= speed;
        if (this.x <= -600) {
            this.x = -1;
        }
    },

    clean: function () {
        groundContext.clearRect(this.x, this.y, WIDTH, HEIGHT);
    },

    draw: function () {
        for (let count = 0, size = 5; count <= size; count++) {
            sand.draw(groundContext, this.x + sand.width * count, this.y);
        }
    }
}
