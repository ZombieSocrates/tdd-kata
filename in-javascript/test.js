import BowlingGame from "./bowling.js";

let currGame;

describe("Bowling Scorer", () => {

    beforeEach( () => {
        currGame = new BowlingGame();
    })

    test("it should score a gutterball game as zero", () => {
        currGame.rollMany({pins:0, times:20});
        let gutterScore = 0;
        expect(currGame.scoreGame()).toEqual(gutterScore);
      
    })

    test("it should score all ones game as 20", () => {
        currGame.rollMany({pins:1, times:20});
        let allOnesScore = 20;
        expect(currGame.scoreGame()).toEqual(allOnesScore);
    })

    test("it should score a spare properly", () => {
        currGame.rollSpare();
        currGame.roll(3);
        currGame.rollMany({pins:0, times:17});
        let spareGameScore = 16;
        expect(currGame.scoreGame()).toEqual(spareGameScore);
    })

    test("it should score a strike properly", () => {
        currGame.roll(10);
        currGame.roll(3);
        currGame.roll(4);
        currGame.rollMany({pins:0, times:16});
        let strikeGameScore = 24;
        expect(currGame.scoreGame()).toEqual(strikeGameScore);
    })

    test("it should score a perfect game as 300", () => {
        currGame.rollMany({pins:10, times:12});
        let perfectScore = 300;
        expect(currGame.scoreGame()).toEqual(perfectScore);
    })
})