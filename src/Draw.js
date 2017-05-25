function draw() {
    facebook = document.getElementById('facebook');

    collider[0].draw(context, 0, 0);
    collider[1].draw(context, 0, 0);
    collider[2].draw(context, 0, 0);
    collider[3].draw(context, 0, 0);
    collider[4].draw(context, 0, 0);
    collider[5].draw(context, 0, 0);

    chicken_sprite[0].draw(context, 0, 0);
    chicken_sprite[1].draw(context, 0, 0);
    chicken_sprite[2].draw(context, 0, 0);

    context.clearRect(0, 0, WIDTH, HEIGHT);
    ground.clean();
    background.clean();

    background.draw();

    if (currentState == states.start) {
        facebook.style.display = "none";
        speed = initial_speed;
        menu_sprite.draw(backgroundContext, 0, 0);
    }

    if (currentState == states.playing) {
        obstacles.draw();
    }

    drawScore();
    drawSoundControl();
    ground.draw();

    if (currentState != states.start) {
        chicken.draw();
    }
}
