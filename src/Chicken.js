let chicken = {
    x: 50,
    y: 0,
    height: chicken_sprite[0].height,
    width: chicken_sprite[0].width,
    gravity: 1.6,
    speed: 0,
    jumpForce: 23.6,
    numberJumps: 0,
    score: 0,
    anim: 0,
    count: 0,
    timeChange: 0,

    changeImage: function () {
        if (this.count <= 17) {
            if (this.count > 0) {
                this.anim = 0;
            }
            else {
                this.anim = 1;
            }
            this.count++;
        }
        else {
            this.anim = 0;
            this.count = 1;
        }
        this.timeChange = 4;
    },

    collided: function () {
        this.count = 18;
        this.anim = 2;
    },

    update: function () {
        this.speed += this.gravity;
        this.y += this.speed;

        if (this.y > ground.y - this.height && currentState != states.lost) {
            this.y = ground.y - this.height;
            this.numberJumps = 0;
            this.speed = 0;
            this.anim = 1;
        }

        if (this.timeChange == 0) {
            this.changeImage();
        }
        else {
            this.timeChange--;
        }
    },

    jump: function () {
        if (this.numberJumps < maxJump) {
            this.speed = -this.jumpForce;
            this.numberJumps++;
        }
    },

    reset: function () {
        this.speed = 0;
        this.y = 0;
        this.anim = 0;
        this.timeChange = 0;

        if (this.score > rank) {
            localStorage.setItem("rank", this.score);
            rank = this.score;
        }
        this.score = 0;
    },

    draw: function () {
        context.save();
        context.translate(Math.floor(this.x + this.width / 2), Math.floor(this.y + this.height / 4));
        chicken_sprite[this.anim].draw(context, -Math.floor(this.width / 2), -Math.floor(this.height / 2));
        context.restore();
    }
}
