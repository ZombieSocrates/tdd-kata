class BowlingGame {
	constructor() {
		// console.log("Starting New Game!");
		this.score = 0;
	};

	roll(pins) {
		this.score += pins;
	};

	scoreGame() {
		return this.score;
	};
}


module.exports = {
	Game: BowlingGame
}
