function difficulty() {
    if (speed == 8 && chicken.score == 20) {
        speed = 12;
        sounds.difficulty.play();
    }

    if (speed == 12 && chicken.score == 40) {
        speed = 16;
        sounds.difficulty.play();
    }

    if (speed == 16 && chicken.score == 80) {
        speed = 19;
        sounds.difficulty.play();
    }

    if (speed == 19 && chicken.score == 100) {
        speed = 24;
        sounds.difficulty.play();
    }
}
