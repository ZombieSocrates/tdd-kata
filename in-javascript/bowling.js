class BowlingGame {
	constructor() {
		this.ballRolls = [];
		this.score = 0;
		this.nFrames = 10;
		this.scoreIndex = 0;
	};

	roll(pins) {
		this.ballRolls.push(pins);
	};

	rollMany(pins, times) {
		for (let i = 0; i < times; i++) {
			this.roll(pins);
		}
	};

	rollSpare(){
		this.rollMany(pins = 5, times = 2);
	};

	scoreFrame() {
		let nextIndex = this.scoreIndex + 1;
		return this.ballRolls[this.scoreIndex] + this.ballRolls[nextIndex];
	};

	scoreGame() {
		for (let i = 0; i < this.nFrames; i++){
			this.score += this.scoreFrame()
            if (this.scoreFrame() == 10) {
            	this.score += this.ballRolls[this.scoreIndex + 2]
            }
            this.scoreIndex += 2
		}
		return this.score;
		return this.ballRolls.reduce((a,b) => a + b, this.score);
	};
}


module.exports = {
	Game: BowlingGame
}
