import moment from 'moment';

import { PgnJson } from '../shared/pgn';
import { pgnToJson } from '../shared/pgn-to-json';

interface Props {
  username: string;
}

const getChessComGames = async (props: Props): Promise<PgnJson[]> => {
  const startDate = moment().startOf('month').subtract(1, 'year');
  const endDate = moment();

  let jsonGames: PgnJson[] = [];
  while (startDate.isSameOrBefore(endDate)) {
    const year = startDate.format('YYYY');
    const month = startDate.format('MM');
    const pgnGames = await fetch(
      `https://api.chess.com/pub/player/${props.username}/games/${year}/${month}/pgn`
    ).then(r => r.text());

    jsonGames = [...jsonGames, ...pgnToJson(pgnGames)];

    startDate.add(1, 'month');
  }

  return jsonGames;
};

export default getChessComGames;
