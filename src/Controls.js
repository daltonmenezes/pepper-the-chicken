function jump(event) {
  if (currentState == states.start) {
      currentState = states.playing;
      sounds.start.play();
  }
  else if (currentState == states.lost && block.y >= 2 * HEIGHT) {
      currentState = states.start;
      obstacles.clean();
      block.reset();
  }
  block.jump();
  sounds.jump.play();
}

function keyUp(event) {
  if (event.keyCode == 38 || event.keyCode == 32 || event.keyCode == 87) {
      jump();
  }
}

function click(event) {
  jump();
}

function touch(event) {
  jump();
}
