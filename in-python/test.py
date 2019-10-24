import unittest
from bowling import Game


class BowlingTest(unittest.TestCase):

	def test_gutter_game(self):
		g = Game()
		for roll in range(20):
			g.roll(0)
		self.assertEqual(g.score(), 0)

if __name__ == "__main__":
	unittest.main()