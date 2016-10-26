function draw() {
  //background
  background.draw(context, 0, 0);

  drawScore();

  if (currentState == states.start) {
      context.fillText("Play", Math.floor(WIDTH / 2 - 50), Math.floor(HEIGHT / 2 - 70));
  }

  if (currentState == states.playing) {
      obstacles.draw();
  }

  ground.clean();
  ground.draw();
  chicken.draw();
}
