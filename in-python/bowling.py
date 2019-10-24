class Game(object):

    def __init__(self):
        self.__score = 0
        self.__rolls = []

    def __is_spare(self, frame_index:int):
        end_frame = (frame_index % 2) == 1
        ten_pins = (self.__rolls[frame_index] + 
            self.__rolls[frame_index - 1]) == 10
        return end_frame and ten_pins

    def __is_strike(self, roll:int):
        return roll == 10 

    def roll(self, pins:int):
        self.__rolls.append(pins)

    def score(self):
        for frame_index, roll in enumerate(self.__rolls):
            self.__score += roll
            if self.__is_spare(frame_index):
                next_roll = self.__rolls[frame_index + 1]
                self.__score += next_roll
            if self.__is_strike(roll):
                next_two = self.__rolls[frame_index + 1:frame_index + 3]
                self.__score += sum(next_two) 
        return self.__score