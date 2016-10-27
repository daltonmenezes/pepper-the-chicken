function main() {
  if (WIDTH >= 600) {
      WIDTH = 600;
      HEIGHT = 550;
  }

  canvas = document.createElement("canvas");
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  canvas.id = "main";
  canvas.style.zIndex = "1";
  context = canvas.getContext("2d");
  document.body.appendChild(canvas);

  canvas2 = document.createElement("canvas");
  canvas2.width = WIDTH;
  canvas2.height = HEIGHT;
  canvas2.id = "ground";
  canvas2.style.zIndex = "-2";
  groundContext = canvas2.getContext("2d");
  document.body.appendChild(canvas2);

  document.addEventListener("mousedown", click);
  document.addEventListener("keyup", keyUp);
  document.addEventListener("touchstart", touch, false);

  currentState = states.start;
  rank = localStorage.getItem("rank");

  if (rank == null) {
      rank = 0;
  }
  sounds.opening(true);
  run();
}
