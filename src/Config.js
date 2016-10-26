let canvas, context, WIDTH = window.innerWidth, HEIGHT = window.innerHeight,
maxJump = 3, initial_speed = 8, speed = initial_speed, currentState, rank, img,

states = {
  start: 0,
  playing: 1,
  lost: 2
}
