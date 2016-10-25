function main() {
  HEIGHT = window.innerHeight;
  WIDTH = window.innerWidth;

  if (WIDTH >= 600) {
      WIDTH = 600;
      HEIGHT = 550;
  }

  canvas = document.createElement("canvas");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  
  context = canvas.getContext("2d");
  document.body.appendChild(canvas);
  document.addEventListener("mousedown", click);
  document.addEventListener("keyup", keyUp);
  document.addEventListener("touchstart", touch, false);

  currentState = states.start;
  rank = localStorage.getItem("rank");

  if (rank == null) {
      rank = 0;
  }
  sounds.music.loop = true;
  sounds.music.play();
  run();
}
