let obstacles = {
    _obs: [],
    widths: [108, 70, 86, 124, 131, 145],
    heights: [111, 45, 96, 73, 74, 88],
    timeToInsert: 0,

    insert: function () {
        this._obs.push({
            x: WIDTH,
            number: Math.floor(6 * Math.random()),
            width: this.widths[this.number],
            height: this.heights[this.number]
        });
        this.timeToInsert = 50 + Math.floor(91 * Math.random());
    },

    update: function () {
        if (this.timeToInsert == 0)
            this.insert();
        else
            this.timeToInsert--;

        for (let i = 0, size = this._obs.length; i < size; i++) {
            let obs = this._obs[i];
            obs.x -= speed;
            // Collision
            if (chicken.x < obs.x + this.widths[obs.number] && chicken.x + chicken.width >=
                obs.x && chicken.y + chicken.height >= ground.y - this.heights[obs.number]) {
                currentState = states.lost;
                if (soundEnabled) {
                    sounds.lostSound();
                }
                chicken.collided();
            }
            else if (obs.x <= -obs.x + -250) {
                // Score increment
                if (soundEnabled) {
                    sounds.scoreSound();
                }
                chicken.score++;
                // Remove obstacle from canvas
                this._obs.splice(i, 1);
                size--;
                i--;
            }
        }
    },

    clean: function () {
        this._obs = [];
    },

    draw: function () {
        for (let i = 0, size = this._obs.length; i < size; i++) {
            let obs = this._obs[i];
            collider[obs.number].draw(context, obs.x, ground.y - this.heights[obs.number]);
        }
    }
}
