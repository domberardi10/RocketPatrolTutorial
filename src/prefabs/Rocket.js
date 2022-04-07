class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        //adds object to existing scene
        scene.add.existing(this);
        //firing status of rocket
        this.isFiring = false;
        //pixels per frame
        this.moveSpeed = 2;
        //rocket sfx
        this.sfxRocket = scene.sound.add('sfx_rocket');
    }
    update() {
        //horizontal movement
        //can only move while not firing
        if (!this.isFiring) {
            if (keyLEFT.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed;
            }
            else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
                this.x += this.moveSpeed;
            }
        }
        //firing button
        if (Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) {
            this.isFiring = true;
            //play sfx
            this.sfxRocket.play();
        }
        //moving up after fire action
        if (this.isFiring && this.y >= borderUISize * 3 + borderPadding) {
            this.y -= this.moveSpeed;
        }
        //reset if missed target
        if (this.y <= borderUISize * 3 + borderPadding) {
            this.reset();
        }
    }
    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize - borderPadding;
    }
}