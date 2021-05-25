import pgn, { PgnParsedGames } from 'pgn-parser';

import { PgnJson } from './pgn';

type Field =
| 'site'
| 'date'
| 'white'
| 'black'
| 'result'
| 'currentposition'
| 'eco'
| 'ecourl'
| 'whiteelo'
| 'blackelo'
| 'starttime'
| 'endtime'
| 'link';
const fields = [
  'site',
  'date',
  'white',
  'black',
  'result',
  'currentposition',
  'eco',
  'ecourl',
  'whiteelo',
  'blackelo',
  'starttime',
  'endtime',
  'link',
];

function valuesRow(chessComId: number, game: PgnParsedGames): PgnJson {
  const ret: Partial<PgnJson> = {
    chessComId,
  };
  for (const header of game.headers) {
    const field = header.name.toLowerCase();
    const value = header.value;

    if (fields.includes(field)) {
      ret[field as Field] = value;
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

  return ret as PgnJson;
}
const pgnToJson = (pgnFile: string): PgnJson[] => {
  const jsonFile: PgnJson[] = [];
  let games: PgnParsedGames[] = [];
  try {
    games = pgn.parse(pgnFile);
  } catch (err) {
    // errors out on crazyhouse files
  }

  for (const game of games) {
    const link = game.headers[20] ? game.headers[20].value : '';
    const reg = /[^/]*$/.exec(link);
    const chessComId = reg ? parseInt(reg[0].replace('\'', '\\\''), 10) : undefined;
    if (!chessComId) {
      break;
    }

    jsonFile.push(valuesRow(chessComId, game));
  }

  return jsonFile;
};

export {
  pgnToJson,
};
