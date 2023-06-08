
class Title extends Phaser.Scene {
    constructor() {
        super('Title')
    }

    preload(){
        this.load.image("background", "src/assets/titleMenu/menuBackground.png");
        this.load.image("playButtonBack", "src/assets/titleMenu/PlayButtonBack.png");
        this.load.image("playButtonText", "src/assets/titleMenu/PlayButtonFront.png");
    }

    create() {
        this.game.sound.stopAll();
        this.cameras.main.fadeIn(2000);


        let background = this.add.image(0, 0, 'background').setOrigin(0,0).setInteractive();


        var style = { font: "Bold 132px Arial", fill: '0x000000', boundsAlignH: 'center', boundsAlignV: 'middle'};
        var style2 = { font: "Bold 42px Arial", fill: '0x000000', boundsAlignH: 'center', boundsAlignV: 'middle'};
        let text1 = this.add.text(1920/2, 1080/3, "[GAME TITLE]", style).setOrigin(.5,.5);

        let playButtonBack = this.add.image(1920/2, 1080/1.8, 'playButtonBack').setScale(1.5).setInteractive().on('pointerover', () => {
            playButtonText.setScale(1);
        });;
        let playButtonText = this.add.image(1920/2, 1080/1.8, 'playButtonText').setScale(1.5).setInteractive().on('pointerover', () => {
            playButtonText.setScale(1);
        });

        let text2 = this.add.text(1920/2, 1080/1.3, "[other stuff]", style2).setOrigin(.5,.5);
        
        background.on('pointerover', () => {
            playButtonText.setScale(1.5);
        });

        this.cameras.main.on('camerafadeincomplete', () => {
            
        });
    }
}