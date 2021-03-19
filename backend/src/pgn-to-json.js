const pgn = require('pgn-parser');
const fs = require('fs');

const fields = ['site', 'date', 'white', 'black', 'result']

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

  const gameArray = [];
  if (game.moves) {
    const moves = game.moves.map(m => m.move);
    gameArray.push(moves.join(' '))
  }
  const gameStr = gameArray.join(', ');
  ret.moves = game.moves ? game.moves.length : 0;
  ret.game = gameStr;
  return ret
}

const main = async () => {
  if (process.argv.length != 3) {
    console.log('Usage: python pgn-to-sql.py input.pgn > out.sql');
    process.exit();
  }

  const jsonFile = [];
  const pgnFile = await fs.readFileSync(process.argv[2]).toString();
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
  const newFileLoc = process.argv[2].replace('pgn', 'json');
  await fs.writeFileSync(newFileLoc, data);
}

main();