import { useEffect, useState } from 'react';
import Controls from './controls';
import NameDisplay from './name-display';
import InfoDisplay from './info-display';
import {
  pieceToImage,
  FenPiece,
  getPiecesTaken,
  PiecesTaken,
} from '../../shared/fen';
import backgroundImage from '../../images/backgrounds/dark_wood.png';
import { pgnToFen } from '../../shared/pgn-to-fen';
import { getPgnMoveCount, PgnJson } from '../../shared/pgn';

import './container.scss';

interface Props {
  size: string;
  pgn?: PgnJson;
  move?: number;
}

const buildSquare = ({
  piece,
  file,
  rank,
}: {
  piece: FenPiece | number;
  file: number;
  rank: number;
}) => (
  <div
    key={`${rank} ${file} ${piece}`}
    className="square"
    style={{
      transform: `translate(${100 * file}%, ${100 * rank}%)`,
      backgroundImage: Number.isInteger(piece)
        ? ''
        : `url(${pieceToImage(piece as FenPiece)})`,
    }}
  />
);

const ChessBoard = (props: Props): JSX.Element => {
  const moves = JSON.parse(JSON.stringify(props.pgn?.moves || {}));

  const maxMoves = getPgnMoveCount(props.pgn?.moves);
  const [PgnToFen, _setPgnToFen] = useState(new pgnToFen(moves, props.pgn?.speedRunId.toString() || ''));
  const [move, setMove] = useState(0);

  const [piecesTaken, setPiecesTaken] = useState<PiecesTaken>({
    white: [],
    black: [],
  });
  const [squares, setSquares] = useState<JSX.Element[]>([]);

  useEffect(() => {
    console.log('iter PgnToFen: ', PgnToFen.key);
    const newFen = PgnToFen.getFen(move);
    if (!newFen) {
      return;
    }
    setPiecesTaken(getPiecesTaken(newFen));

    const ranks = newFen.split(' ')[0].split('/');
    const newSquares = [];
    for (let rank = 7; rank >= 0; rank--) {
      let spaces = 0;
      for (let file = 0; file < 8; file++) {
        const piece = ranks[rank][file - spaces];
        // in a fen string ints are the amount of spaces to be added
        // iterate newSpaces and add to the newSquares array
        if (parseInt(piece)) {
          let newSpaces = parseInt(piece);
          while (newSpaces > 0) {
            newSquares.push(
              buildSquare({
                piece: parseInt(piece),
                rank,
                file,
              })
            );
            newSpaces--;
            if (newSpaces !== 0) {
              spaces++;
              file++;
            }
          }
        } else {
          // add a chess piece to the board
          newSquares.push(
            buildSquare({
              piece: piece as FenPiece,
              rank,
              file,
            })
          );
        }
      }
    }
    setSquares(newSquares);
  }, [props.pgn, move]);

  return (
    <div
      style={{
        width: props.size,
        height: props.size,
      }}
      className="chessboard-container"
    >
      <NameDisplay player='white' pgn={props.pgn} piecesTaken={piecesTaken} />
      <div className="inner-chessboard-container">
        <div
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
          className="chessboard"
        >
          {squares}
        </div>
        <Controls move={move} maxMoves={maxMoves} setMove={setMove} />
      </div>
      <NameDisplay player='black' pgn={props.pgn} piecesTaken={piecesTaken} />
      <InfoDisplay pgn={props.pgn} />
    </div>
  );
};

export default ChessBoard;
