class Game(object):

    def __init__(self):
        self.__score = 0
        self.__rolls = []

    def __is_spare(self, frame_index):
        end_frame = (frame_index % 2) == 1
        ten_pins = (self.__rolls[frame_index] + 
            self.__rolls[frame_index - 1]) == 10
        return end_frame and ten_pins 


    def roll(self, pins:int):
        self.__rolls.append(pins)

    def score(self):
        for frame_index, roll in enumerate(self.__rolls):
            self.__score += roll
            if self.__is_spare(frame_index):
                self.__score += self.__rolls[frame_index + 1] 
        return self.__score