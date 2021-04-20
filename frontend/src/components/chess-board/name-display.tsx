import { PgnJson } from '../../shared/pgn';
import { pieceToImage, PiecesTaken } from '../../shared/fen';

interface Props {
  pgn?: PgnJson;
  piecesTaken: PiecesTaken;
  player: 'white' | 'black';
}

const NameDisplay = (props: Props) => (
  <div className={`name-container ${props.player}`}>
    <p className="name">
      {props.pgn ? props.pgn[props.player] : ''} (
      {props.pgn
        ? props.pgn[props.player === 'white' ? 'whiteelo' : 'blackelo']
        : ''}
      )
    </p>
    <p className="pieces-taken">
      {props.piecesTaken[props.player === 'white' ? 'black' : 'white'].map(
        ({ piece, count }) =>
          count ? (
            <span key={piece}>
              <img key={piece} src={pieceToImage(piece)} />
              <span>{count}</span>
            </span>
          ) : null
      )}
    </p>
  </div>
);

export default NameDisplay;