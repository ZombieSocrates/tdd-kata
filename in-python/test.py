import unittest
from bowling import Game


class BowlingTest(unittest.TestCase):

    def test_gutter_game(self):
        self.__setup()
        self.__roll_many(n = 20, pins = 0)
        self.assertEqual(self.g.score(), 0)

    def test_all_ones(self):
        self.__setup()
        self.__roll_many(n = 20, pins = 1)
        self.assertEqual(self.g.score(), 20)

    def test_one_spare(self):
        self.__setup()
        self.__roll_spare()
        self.g.roll(3)
        self.__roll_many(n = 17, pins = 0)
        self.assertEqual(self.g.score(), 16)

    def test_one_strike(self):
        self.__setup()
        self.__roll_strike()
        self.g.roll(3)
        self.g.roll(4)
        self.__roll_many(n = 16, pins = 0)
        self.assertEqual(self.g.score(), 24)

    def test_perfect_game(self):
        self.__setup()
        self.__roll_many(n = 12, pins = 10)
        self.assertEqual(self.g.score(), 300)

    def __setup(self):
        self.g = Game()

    def __roll_many(self, n, pins):
        for i in range(n):
            self.g.roll(pins)

    def __roll_spare(self):
        self.g.roll(5)
        self.g.roll(5)

    def __roll_strike(self):
        self.g.roll(10)


if __name__ == "__main__":
    unittest.main()