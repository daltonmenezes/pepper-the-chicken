function main() {
    context = canvasCreator;
    context.id = 'main';
    context = context.create();

    groundContext = canvasCreator;
    groundContext.id = 'ground';
    groundContext = groundContext.create();

    backgroundContext = canvasCreator;
    backgroundContext.id = 'background';
    backgroundContext = backgroundContext.create();

    document.addEventListener("mousedown", click);
    document.addEventListener("keydown", keyDown);
    document.addEventListener("touchstart", touch, false);

    currentState = states.start;
    rank = localStorage.getItem("rank");

    if (rank == null) {
        rank = 0;
    }
    if (soundEnabled) {
        sounds.openingTheme(true);
        sounds.mainTheme();
    }
    run();
}
