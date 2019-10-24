class Game(object):

    def __init__(self):
        self.__score = 0
        self.__rolls = []

    def __is_spare(self, roll_index:int):
        end_frame = (roll_index % 2) == 1
        ten_pins = (self.__rolls[roll_index] + 
            self.__rolls[roll_index - 1]) == 10
        return end_frame and ten_pins

    def __spare_bonus(self, roll_index:int):
        return self.__rolls[roll_index + 1]

    def __is_strike(self, roll_index:int):
        return self.__rolls[roll_index] == 10 

    def __strike_bonus(self, roll_index:int):
        return self.__rolls[roll_index + 1] + self.__rolls[roll_index + 2]

    def roll(self, pins:int):
        self.__rolls.append(pins)

    def score(self):
        for roll_index, roll in enumerate(self.__rolls):
            self.__score += roll
            if self.__is_spare(roll_index):
                self.__score += self.__spare_bonus(roll_index)
            if self.__is_strike(roll_index):
                self.__score += self.__strike_bonus(roll_index) 
        return self.__score