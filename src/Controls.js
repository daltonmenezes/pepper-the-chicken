function jump(event) {
  if (currentState == states.start) {
      currentState = states.playing;
      sounds.start.play();
      sounds.opening(false);
      sounds.music.play();
  }
  else if (currentState == states.playing) {
      chicken.jump();
      sounds.jump.play();
  }
  else if (currentState == states.lost && chicken.y >= 2 * HEIGHT) {
      currentState = states.start;
      obstacles.clean();
      chicken.reset();
  }
}

function keyDown(event) {
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
