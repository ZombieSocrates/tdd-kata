// AAAAAAAAAAARRRRRRGGGGGGGHHH
// import {BowlingGame} from "bowling.js";

class BowlingGame {
	constructor() {
		console.log("New Game")
	};

	roll(pins) {};

	score() {};
}

describe("Bowling Scorer", () => {
	test("it should score a gutterball game as zero", () => {
        let g = new BowlingGame();
        for (let i = 0; i < 20; i ++) {
        	g.roll(0)
        }
        let gutterScore = 0;
        expect(g.score()).toEqual(gutterScore)
      
	})
})