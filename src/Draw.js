function draw() {
  background.draw(context, 0, 0);

  if (currentState == states.start) {
      speed = initial_speed;
      context.fillText("Play", Math.floor(WIDTH / 2 - 50), Math.floor(HEIGHT / 2 - 70));
  }

  if (currentState == states.playing) {
      obstacles.draw();
  }

  drawScore();
  ground.clean();
  ground.draw();
  chicken.draw();
}
