const pgn = require('pgn-parser');

const fields = ['site', 'date', 'white', 'black', 'result', 'currentposition', 'eco', 'ecourl', 'whiteelo', 'blackelo', 'starttime', 'endtime', 'link'];

function values_row(id, game) {
  const ret = {};
  ret.id = id;
  for (const header of game.headers) {
    const field = header.name.toLowerCase();
    const value = header.value;

    if (fields.includes(field)) {
      ret[field] = value;
    }
  }

  const gameMoves = [];
  let currMove = 0;
  for (const move of game.moves) {
    if (currMove !== move.move_number) {
      currMove = move.move_number;
      gameMoves.push(`${currMove}.`);
    }
    gameMoves.push(move.move);
  }

  ret.moves = gameMoves.join(' ');
  return ret
}
const pgnToJson = (pgnFile) => {
  const jsonFile = [];
  const games = pgn.parse(pgnFile);

  for (const game of games) {
    const link = game.headers[20] ? game.headers[20].value : '';
    const id = /[^/]*$/.exec(link)[0].replace('\'', '\\\'');
    if (!id) {
      break;
    }

    jsonFile.push(values_row(id, game));
  }
  const data = JSON.stringify(jsonFile);
  return data;
}

module.exports = pgnToJson;
