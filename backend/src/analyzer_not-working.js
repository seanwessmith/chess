const june2020 = require('../games/seanwessmith/06_2020.pgn');
const july2020 = require('../games/seanwesssmith/07_2020.pgn');
const august2020 = require('../games/seanwesssmith/08_2020.pgn');
const september2020 = require('../games/seanwesssmith/09_2020.pgn');
const october2020 = require('../games/seanwesssmith/10_2020.pgn');
const november2020 = require('../games/seanwesssmith/11_2020.pgn');
const december2020 = require('../games/seanwesssmith/12_2020.pgn');

// const games = [
//   ...june2020,
//   ...july2020,
//   ...august2020,
//   ...september2020,
//   ...october2020,
//   ...november2020,
//   ...december2020,
// ];

const schema = [{
  name: 'games',
  model: {
    'id': {},
    'date:string': {},
    'site:string': {},
    'white:string': {},
    'black:string': {},
    'result:string': {},
    'moves:int': {},
    'game:string': {}
  },
  indexes: {}
}];

function isWin(game) {
  if (
    (game.white === 'seanwessmith' && game.result === '1-0') ||
    (game.black === 'seanwessmith' && game.result === '0-1')
  ) {
    return true;
  }
  return false;
}

function getGameSubStr(color, game, currMove) {
  const gameStr = game.split(' ').slice(0, currMove).join(' ');
  return `${color} ${gameStr}`;
}

// Persistent Database
const analyzer = async () => {
  const gameStrs = games.map(r => ({
    color: r.white === 'seanwessmith' ? 'w' : 'b',
    win: isWin(r),
    game: r.game,
    moves: r.moves,
  }));
  const sortedGameStrs = gameStrs.sort((a, b) => a.game.length < b.game.length);
  const nonWinningGames = sortedGameStrs.filter(g => !g.win);
  const winningGames = sortedGameStrs.filter(g => g.win);

  // Get longest game length
  let maxMove = 0;
  for (const { moves } of nonWinningGames) {
    if (moves > maxMove) {
      maxMove = moves;
    }
  }

  

  // count how common certain starts are
  const similarStarts = {};
  for (let currMove = 1; currMove <= maxMove; currMove++) {
    for (const { color, moves, game } of nonWinningGames) {
      if (moves < currMove) {
        continue;
      }

      const gameSubStr = getGameSubStr(color, game, currMove);
      if (!similarStarts[gameSubStr]) {
        similarStarts[gameSubStr] = 1;
      } else {
        similarStarts[gameSubStr]++;
      }
    }
  }

  for (const start of Object.keys(similarStarts)) {
    const loseCount = similarStarts[start];
    if (loseCount > 2) {
      let winCount = 0;
      for (const { game } of winningGames) {
        if (game.includes(start.slice(2, start.length))) {
          winCount++;
        }
      }
      console.log('start: ', { [start]: `${loseCount} ${winCount}` });
    }
  }
}
analyzer();