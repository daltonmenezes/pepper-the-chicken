function draw() {
  background.draw();

  if (currentState == states.start) {
      speed = initial_speed;
      menu_sprite.draw(context, 0, 0);
  }

  if (currentState == states.playing) {
      obstacles.draw();
  }

  drawScore();
  ground.clean();
  ground.draw();

  if (currentState != states.start) {
      chicken.draw();
  }
}
