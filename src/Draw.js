function draw() {
  //background
  background.draw(context, 0, 0);

  //score
  context.fillStyle = "#242424";
  context.font = "50px Arial";

  if (currentState == states.playing)
      context.fillText(block.score, 15, 48);

  if (currentState == states.start) {
      context.fillText("Play", Math.floor(WIDTH / 2 - 50), Math.floor(HEIGHT / 2 - 70));
  }
  else if (currentState == states.lost) {
      context.fillStyle = "#e74c3c";
      context.fillRect(Math.floor(WIDTH / 2 - 50), Math.floor(HEIGHT / 2 - 80), 100, 100);
      context.save();
      context.translate(Math.floor(WIDTH / 2), Math.floor(HEIGHT / 2 - 30));
      context.fillStyle = "#fff";

      if (block.score > rank) {
          context.fillText("New Record!", -145, -65);
      }
      else if (rank < 10) {
          context.fillText("Best score " + rank, -135, -65);
      }
      else if (rank >= 10 && rank < 100) {
          context.fillText("Best score " + rank, -150, -65);
      } else {
          context.fillText("Best score " + rank, -165, -65);
      }

      if (block.score < 10) {
          context.fillText(block.score, -13, 19);
      }
      else if (block.score >=10 && block.score < 100) {
          context.fillText(block.score, -26, 19);
      }
      else {
          context.fillText(block.score, -39, 19);
      }
      context.restore();
  }
  else if (currentState == states.playing) {
      obstacles.draw();
  }
  ground.clean();
  ground.draw();
  block.draw();
}
