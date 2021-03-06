class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        //add to existing scene
        scene.add.existing(this);
        //store points value per ship
        this.points = pointValue;
        //pixels per frame
        this.moveSpeed = game.settings.spaceshipSpeed;
    }
    update() {
        //move ships left
        this.x -= this.moveSpeed;
        //wrap around screen
        if (this.x <= 0 - this.width) {
            this.reset();
        }
    }
    reset() {
        this.x = game.config.width;
    }
}