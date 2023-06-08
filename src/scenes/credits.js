class Credits extends Phaser.Scene {
    constructor() {
        super('Credits')
    }

    preload(){
        this.load.image("background", "src/assets/titleMenu/menuBackground.png");
    }

    create() {
        this.cameras.main.fadeIn(2000);


        let background = this.add.image(0, 0, 'background').setOrigin(0,0).setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.cameras.main.fadeOut(1000);
        });


        var style = { font: "Bold 132px Arial", fill: '0x000000', boundsAlignH: 'center', boundsAlignV: 'middle'};
        var style2 = { font: "Bold 42px Arial", fill: '0x000000', boundsAlignH: 'center', boundsAlignV: 'middle'};
        let title = this.add.text(960, 500, "[insert credits]", style).setOrigin(.5,.5);
        let subtitle = this.add.text(960, 700, "press any button to return to the main menu", style2).setOrigin(.5,.5);

        this.cameras.main.on('camerafadeoutcomplete', () => {
            this.scene.start('Title');
        });
    }
}