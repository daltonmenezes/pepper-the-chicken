ground = {
  x: 0,
  y: 500,
  height: 50,

  update: function() {
    this.x -= speed;
    if (this.x <= -128) {
        this.x = 0;
    }
  },

  draw: function() {
    for (let count = 0, size = 5; count <= size; count++) {
        sand.draw(this.x + sand.width * count, this.y);
    }
  }
}