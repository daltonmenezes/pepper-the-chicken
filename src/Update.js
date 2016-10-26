function update() {
  if (currentState == states.playing) {
      obstacles.update();
      difficulty();
  }
  ground.update();
  chicken.update();
}
