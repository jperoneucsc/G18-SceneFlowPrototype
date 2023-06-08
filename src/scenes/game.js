class Game extends Phaser.Scene {
    constructor() {
        super('Game')
    }

    init(data){
        this.highscore = data.data;
    }

    preload(){
        this.load.image("background", "src/assets/titleMenu/menuBackground.png");
        this.load.image("playButtonBack", "src/assets/titleMenu/PlayButtonBack.png");
    }

    create() {
        this.cameras.main.fadeIn(1000);
        this.scene.run('Title');    // Run title screen to update high score
        this.currentCount = 0;     // keep track of count


        let background = this.add.image(1920/2, 1080/2, 'background').setScale(1.1).setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
            this.cameras.main.fadeOut(1000);
        });


        var style = { font: "Bold 132px Arial", fill: '0x000000', boundsAlignH: 'center', boundsAlignV: 'middle'};
        var style2 = { font: "Bold 42px Arial", fill: '0x000000', boundsAlignH: 'center', boundsAlignV: 'middle'};
        let title = this.add.text(960, 500, "[insert gameplay here]", style).setOrigin(.5,.5);
        let subtitle = this.add.text(960, 700, "click anywhere to return to the main menu", style2).setOrigin(.5,.5);
        this.currentScore = this.add.text(960, 400, "current score: " + this.currentCount, style2).setOrigin(.5,.5);
        this.add.text(960, 200, "click this box to increase your score", style2).setOrigin(.5,.5);


        // everytime button is pushed score increases 1
        let playButtonBack = this.add.image(960, 300, 'playButtonBack').setScale(1.6).setInteractive().on('pointerdown', () => {
            this.currentCount = this.currentCount + 1;
        });

        this.cameras.main.on('camerafadeoutcomplete', () => {
            // If the score is new highscore, set it to highscore
            if(this.currentCount > this.highscore){
                this.newScore = this.currentCount;
            }else this.newScore = this.highscore;
            this.scene.start('Title', {data: this.newScore});
        });
    }
    
    update(){
        this.currentScore.text = "current score: " + this.currentCount;
    }
}