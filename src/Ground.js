let ground = {
  x: 0,
  y: 500,
  height: 50,

  update: function() {
    this.x -= speed;
    if (this.x <= -128) {
        this.x = 0;
    }
  },

  clean: function() {
    context.clearRect(this.x, this.y, WIDTH, HEIGHT);
    groundContext.clearRect(this.x, this.y, WIDTH, HEIGHT);
  },

  draw: function() {
    for (let count = 0, size = 5; count <= size; count++) {
        sand.draw(groundContext, this.x + sand.width * count, this.y);
    }
  }
}
