import { pieceToImage, PiecesTaken } from '../../shared/fen';
interface Props {
  player?: string;
  elo?: string;
  piecesTaken: PiecesTaken;
  color: 'white' | 'black';
}

const maxLen = (name: string) => name.length > 16 ? `${name.substr(0, 16)}...` : name;

const NameDisplay = (props: Props) =>
  props.player ? (
    <div className={`name-container ${props.player === 'SenseiDanya' ? 'main-player' : 'other-player'}`}>
      <p className='name'>
        {maxLen(props.player)} ({props.elo})
      </p>
      <p className='pieces-taken'>
        {props.piecesTaken[props.color === 'white' ? 'black' : 'white'].map(
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
  ) : null;

export default NameDisplay;
