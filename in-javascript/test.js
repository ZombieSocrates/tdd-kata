// AAAAAAAAAAARRRRRRGGGGGGGHHH
// import {BowlingGame} from "bowling.js";

class BowlingGame {
	constructor() {
		this.score = 0;
	};

	roll(pins) {
        this.score += pins;

	};

	getScore() {
		return this.score;
	};
}

describe("Bowling Scorer", () => {
	test("it should score a gutterball game as zero", () => {
        let g = new BowlingGame();
        for (let i = 0; i < 20; i ++) {
        	g.roll(0)
        }
        let gutterScore = 0;
        expect(g.getScore()).toEqual(gutterScore)
      
	})
})