class Game(object):

    def __init__(self):
        self.__score = 0

    def roll(self, pins:int):
        self.__score += pins

    def score(self):
        return self.__score