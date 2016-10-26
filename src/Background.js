let background = {
  x: 0,
  y: 0,

  update: function() {
    this.x -=3;
    if (this.x <= -667) {
        this.x = -1;
    }
  },

  draw: function() {
    for (let count = 0, size = 5; count <= size; count++) {
        background_sprite.draw(context, this.x + background_sprite.width * count, this.y);
    }
  }
}
