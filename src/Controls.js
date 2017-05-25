function jump(event) {
    if (currentState == states.start) {
        currentState = states.playing;
        if (soundEnabled) {
            sounds.start.play();
            sounds.openingTheme(false);
            sounds.mainTheme(true);
        }
    }
    else if (currentState == states.playing) {
        chicken.jump();

        if (soundEnabled) {
            sounds.jumpSound();
        }
    }
    else if (currentState == states.lost && chicken.y >= 2 * HEIGHT) {
        sounds.openingTheme(true);
        sounds.mainTheme(false);
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
    if ((event.clientX > 420 && event.clientX < 610) && event.clientY < 60) {
        sounds.toggleSounds();
    } else {
        jump();
    }


}

function touch() {
    jump();
}
