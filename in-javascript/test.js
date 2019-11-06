// AAAAAAAAAAARRRRRRGGGGGGGHHH
// ES6-import still busted ... I probably need to use babel
// import {BowlingGame} from "./bowling";
let games = require('./bowling.js');
let BowlingGame = games.Game;


describe("Bowling Scorer", () => {
	test("it should score a gutterball game as zero", () => {
        let g = new BowlingGame();
        for (let i = 0; i < 20; i++) {
        	g.roll(0)
        }
        let gutterScore = 0;
        expect(g.scoreGame()).toEqual(gutterScore);
      
	})

	test("it should score all ones game as 20", () => {
		let g = new BowlingGame();
		for (let i = 0; i < 20; i++) {
			g.roll(1)
		}
		let allOnesScore = 20;
		expect(g.scoreGame()).toEqual(allOnesScore);
	})
})