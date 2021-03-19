import pgn
import sys

fields = ['site', 'date', 'white', 'black', 'result']

def values_row (game):
	ret = '('
	ret += ' \'' + getattr(game, 'link').rsplit('/', 1)[-1].replace('\'', '\\\'') + '\', '
	for field in fields:
		if hasattr(game, field):
			ret += ' \'' + getattr(game, field).replace('\'', '\\\'') + '\', '
		else:
			ret += ' \'\', '

	if hasattr(game, 'moves'):
		ret += str(len(game.moves)) + ', '
		ret += ' \'' + ' '.join(game.moves) + '\''
	else:
		ret += '0, \'\''

	ret += ')'
	return ret

if len(sys.argv) != 2:
	print 'Usage: python pgn-to-sql.py input.pgn > out.sql'

i = 0
for game in pgn.GameIterator(sys.argv[1]):
	if not(hasattr(game, 'result')):
		break;

	if (i % 500) == 0:
		print 'INSERT INTO parties (id, ' + ', '.join(fields) + ', moves, game) VALUES '

	print values_row(game)

	if (i % 500) == 499:
		print ';'
	else:
		print ','

	i += 1

print ';'