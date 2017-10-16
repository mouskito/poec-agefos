var game = new Phaser.Game(480, 320, Phaser.AUTO, null, {
    preload: preload,
    create: create,
    update: update
});

var ball;
var paddle;
var bricks;
var newBrick;
var brickInfo;
var scoreText;
var score = 0;
var lives = 3;
var livesText;
var lifeLostText;
var isPlaying = false;
var startButton;

function preload() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.pageAlignHorizontally = true;
    game.scale.pageAlignVertically = true;
    game.stage.backgroundColor = "#eee";
    game.load.image("ball", "img/ball.png");
    game.load.image("paddle", "img/paddle.png");
    game.load.image("brick", "img/brick.png");
    game.load.spritesheet("ball", "img/wobble.png", 20, 20);
    game.load.spritesheet("button", "img/button.png", 120, 40);
}

function create() {
    game.physics.startSystem(Phaser.Physics.ARCADE);
    game.physics.arcade.checkCollision.down = false;
    ball = game.add.sprite((game.world.width / 2), (game.world.height - 25), "ball");
    ball.animations.add("wobble", [0, 1, 0, 2, 0, 1, 0, 2, 0], 24);
    ball.anchor.set(0.5);
    game.physics.enable(ball, Phaser.Physics.ARCADE);
    ball.body.collideWorldBounds = true;
    ball.body.bounce.set(1.03);
    ball.checkWorldBounds = true;
    ball.events.onOutOfBounds.add(ballLeaveScreen, this);

    paddle = game.add.sprite((game.world.width / 2), (game.world.height - 5), "paddle");
    paddle.anchor.set(0.5, 1);
    game.physics.enable(paddle, Phaser.Physics.ARCADE);
    paddle.body.immovable = true;

    initBricks();

    textStyle = {
        font: "18px Arial",
        fill: "#0095DD"
    };
    scoreText = game.add.text(5, 5, "Points : " + score, textStyle);
    livesText = game.add.text((game.world.width - 5), 5, "Lives : " + lives, textStyle);
    livesText.anchor.set(1, 0);
    lifeLostText = game.add.text((game.world.width / 2), (game.world.height / 2), "Life lost, tap to continue", textStyle);
    lifeLostText.anchor.set(0.5);
    lifeLostText.visible = false;

    startButton = game.add.button((game.world.width / 2), (game.world.height / 2), "button", startGame, this, 1, 0, 2);
    startButton.anchor.set(0.5);
}

function update() {
    game.physics.arcade.collide(ball, paddle, ballHitPaddle);
    game.physics.arcade.collide(ball, bricks, ballHitBrick);
    if (isPlaying) {
        paddle.x = game.input.x;
    }
    if (!bricksAlive()) {
        alert("You won the game, congratulations !");
        location.reload();
    }
}

function initBricks() {
    brickInfo = {
        width: 50,
        height: 20,
        count: {
            col: 7,
            row: 3
        },
        offset: {
            top: 50,
            left: 60
        },
        padding: 10
    }
    bricks = game.add.group();
    for (var rowLoop = 0; rowLoop < brickInfo.count.row; rowLoop++) {
        for (var colLoop = 0; colLoop < brickInfo.count.col; colLoop++) {
            var brickX = ((colLoop * (brickInfo.width + brickInfo.padding)) + brickInfo.offset.left);
            var brickY = ((rowLoop * (brickInfo.height + brickInfo.padding)) + brickInfo.offset.top);
            newBrick = game.add.sprite(brickX, brickY, "brick");
            game.physics.enable(newBrick, Phaser.Physics.ARCADE);
            newBrick.body.immovable = true;
            newBrick.anchor.set(0.5);
            bricks.add(newBrick);
        }
    }
}

function ballHitBrick(ball, brick) {
    var killTween = game.add.tween(brick.scale);
    killTween.to({
        x: 0,
        y: 0
    }, 200, Phaser.Easing.Linear.None);
    killTween.onComplete.addOnce(function () {
        brick.kill();
    }, this);
    killTween.start();
    score += 10;
    scoreText.setText("Points : " + score);
}

function bricksAlive() {
    var brickAlive = false;
    for (var i = 0; i < bricks.children.length; i++) {
        if (bricks.children[i].alive) {
            brickAlive = true;
            break;
        }
    }
    return brickAlive;
}

function ballLeaveScreen() {
    lives--;
    if (lives) {
        isPlaying = false;
        livesText.setText("Lives : " + lives);
        lifeLostText.visible = true;
        ball.reset((game.world.width / 2), (game.world.height - 25));
        paddle.reset((game.world.width / 2), (game.world.height - 5));
        game.input.onDown.addOnce(function () {
            lifeLostText.visible = false;
            isPlaying = true;
            ball.body.velocity.set(150, -150);
        }, this);
    } else {
        alert("You lost, game over !");
        location.reload();
    }
}

function ballHitPaddle(ball, paddle) {
    ball.animations.play("wobble");
    ball.body.velocity.x = -7 * (paddle.x - ball.x);
}

function startGame() {
    startButton.destroy();
    ball.body.velocity.set(150, -150);
    isPlaying = true;
}
