class Game(object):

    def __init__(self):
        self.__score = 0
        self.__rolls = []
        self.__current_roll = 0

    def roll(self, pins:int):
        # self.__score += pins
        self.__rolls.append(pins)
        self.__current_roll += 1

    def score(self):
        for i, roll in enumerate(self.__rolls):
            self.__score += roll
            end_frame = (i % 2 == 1)
            is_spare = (roll + self.__rolls[i - 1] == 10)
            if end_frame and is_spare:
                self.__score += self.__rolls[i + 1] 
        return self.__score