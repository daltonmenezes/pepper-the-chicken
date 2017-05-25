let background = {
    x: 0,
    y: 0,

    update: function () {
        this.x -= 3;
        if (this.x <= -667) {
            this.x = -1;
        }
    },

    clean: function () {
        backgroundContext.clearRect(this.x, this.y, WIDTH, HEIGHT);
    },

    draw: function () {
        for (let count = 0, size = 5; count <= size; count++) {
            background_sprite.draw(backgroundContext, this.x + background_sprite.width * count, this.y);
        }
    }
}
