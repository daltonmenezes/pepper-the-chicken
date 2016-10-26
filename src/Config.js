let canvas, context, WIDTH = window.innerWidth, HEIGHT = window.innerHeight,
maxJump = 3, speed = 8, currentState, rank, img,

states = {
  start: 0,
  playing: 1,
  lost: 2
}
