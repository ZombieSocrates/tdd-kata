// AAAAAAAAAAARRRRRRGGGGGGGHHH
// ES6-import still busted ... I probably need to use babel
// import {BowlingGame} from "./bowling";
let games = require('./bowling.js');
let BowlingGame = games.Game;
let currGame;

beforeEach( () => {
	currGame = new BowlingGame();
})

describe("Bowling Scorer", () => {
	test("it should score a gutterball game as zero", () => {
        currGame.rollMany(pins = 0, times = 20);
        let gutterScore = 0;
        expect(currGame.scoreGame()).toEqual(gutterScore);
      
	})

	test("it should score all ones game as 20", () => {
		currGame.rollMany(pins = 1, times = 20);
		let allOnesScore = 20;
		expect(currGame.scoreGame()).toEqual(allOnesScore);
	})

	test("it should score a spare properly", () => {
		currGame.rollSpare();
		currGame.roll(3);
		currGame.rollMany(pins =0, times = 17);
		let spareGameScore = 16;
		expect(currGame.scoreGame()).toEqual(spareGameScore);
	})
})