export default class BowlingGame {
    constructor() {
        this.ballRolls = [];
        this.score = 0;
        this.nFrames = 10;
        this.scoreIndex = 0;
    };


    roll(pins) {
        this.ballRolls.push(pins);
    };

    rollMany(pins , times) {
        for (let i = 0; i < times; i++) {
            this.roll(pins);
        }
    };

    rollSpare(){
        this.rollMany(5, 2);
    };

    scoreFrame() {
        if (this.isStrike()) {
            return this.ballRolls[this.scoreIndex]
        }
        let nextIndex = this.scoreIndex + 1;
        return this.ballRolls[this.scoreIndex] + this.ballRolls[nextIndex];
    };

    isStrike(){
        return this.ballRolls[this.scoreIndex] == 10;
    };

    strikeBonus(){
        let startRoll = this.scoreIndex + 1;
        let endRoll = startRoll + 2;
        let bonuses = this.ballRolls.slice(startRoll, endRoll);
        return bonuses.reduce((a,b) => a + b, 0);
    };

    isSpare(){
        return (!this.isStrike()) && (this.scoreFrame() == 10);
    };

    spareBonus(){
        return this.ballRolls[this.scoreIndex + 2];
    };

    incrementScoreIndex() {
        let incr = this.isStrike() ? 1 : 2;
        this.scoreIndex += incr;
    };

    scoreGame() {
        for (let i = 0; i < this.nFrames; i++){
            this.score += this.scoreFrame()
            if (this.isStrike()){
                this.score += this.strikeBonus();                           
            }
            if (this.isSpare()) {
                this.score += this.spareBonus();
            }
            this.incrementScoreIndex()
        }
        return this.score;
    };
};

