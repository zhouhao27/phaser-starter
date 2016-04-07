var Game = (function () {
    function Game() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, "content", { preload: this.preload, create: this.create });
    }
    Game.prototype.preload = function () {
        this.game.load.image("logo", "assets/logo.png");
    };
    Game.prototype.create = function () {
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, "logo");
        logo.anchor.setTo(0.5, 0.5);
    };
    return Game;
}());
window.onload = function () {
    var game = new Game();
};
//# sourceMappingURL=app.js.map