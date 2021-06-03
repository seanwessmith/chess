import add from 'date-fns/add';
import format from 'date-fns/format';
import isBefore from 'date-fns/isBefore';
import startOfMonth from 'date-fns/startOfMonth';
import sub from 'date-fns/sub';

import { PgnJson } from '../shared/pgn';
import { pgnToJson } from '../shared/pgn-to-json';

interface Props {
  username: string;
}

const getChessComGames = async (props: Props): Promise<PgnJson[]> => {
  let startDate = sub(startOfMonth(new Date()), { years: 1 });
  const endDate = new Date();

  let jsonGames: PgnJson[] = [];
  while (isBefore(startDate, endDate)) {
    const year = format(startDate, 'yyyy');
    const month = format(startDate, 'MM');
    const pgnGames = await fetch(
      `https://api.chess.com/pub/player/${props.username}/games/${year}/${month}/pgn`
    ).then(r => r.text());

    jsonGames = [...jsonGames, ...pgnToJson(pgnGames)];

    startDate = add(startDate, { months: 1 });
  }

  return jsonGames;
};

export default getChessComGames;
