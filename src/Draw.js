function draw() {
  collider[0].draw(context, 0, 0);
  collider[1].draw(context, 0, 0);
  collider[2].draw(context, 0, 0);
  collider[3].draw(context, 0, 0);
  collider[4].draw(context, 0, 0);
  collider[5].draw(context, 0, 0);

  chicken_sprite[0].draw(context, 0, 0);
  chicken_sprite[1].draw(context, 0, 0);
  chicken_sprite[2].draw(context, 0, 0);
    
  background.draw();

  if (currentState == states.start) {
      speed = initial_speed;
      menu_sprite.draw(context, 0, 0);
  }

  if (currentState == states.playing) {
      obstacles.draw();
  }

  drawScore();
  ground.clean();
  ground.draw();

  if (currentState != states.start) {
      chicken.draw();
  }
}
