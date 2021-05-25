import { useContext } from 'react';

import ChessBoard from '../../components/chess-board/container';
import {
  getPgnFromOpening,
  ShortOpening,
  getPgnMoveCount,
} from '../../shared/pgn';
import { UserContext } from '../../store/userContext';
import './container.scss';

interface Props {
  opening?: ShortOpening;
}
const OpeningDisplay = (props: Props) => {
  const { user } = useContext(UserContext);

  const pgn = getPgnFromOpening(props.opening);
  if (!pgn || !user.username || !user.games) {
    return null;
  }
  const maxMoves = getPgnMoveCount(pgn);

  return (
    <div className='opening-display'>
      <ChessBoard size={200} move={maxMoves} pgn={{ moves: pgn }} />
      {props.opening && user.openings ? (
        <div className='details'>
          <p>{props.opening}</p>
          <p>wins: {user.openings[props.opening]?.wins || 0}</p>
          <p>losses: {user.openings[props.opening]?.losses || 0}</p>
          <p>ties: {user.openings[props.opening]?.ties || 0}</p>
        </div>
      ) : null}
    </div>
  );
};

export default OpeningDisplay;
