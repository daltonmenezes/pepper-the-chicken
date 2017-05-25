let canvas, context, WIDTH = window.innerWidth, HEIGHT = window.innerHeight,
    maxJump = 3, initial_speed = 8, speed = initial_speed, currentState, rank, img, soundEnabled = true,

    states = {
        start: 0,
        playing: 1,
        lost: 2
    }

if (WIDTH >= 600) {
    WIDTH = 600;
    HEIGHT = 550;
}
