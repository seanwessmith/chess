import blackBishop from '../images/pieces/black-bishop.png';
import blackKing from '../images/pieces/black-king.png';
import blackKnight from '../images/pieces/black-knight.png';
import blackPawn from '../images/pieces/black-pawn.png';
import blackQueen from '../images/pieces/black-queen.png';
import blackRook from '../images/pieces/black-rook.png';
import whiteBishop from '../images/pieces/white-bishop.png';
import whiteKing from '../images/pieces/white-king.png';
import whiteKnight from '../images/pieces/white-knight.png';
import whitePawn from '../images/pieces/white-pawn.png';
import whiteQueen from '../images/pieces/white-queen.png';
import whiteRook from '../images/pieces/white-rook.png';

export type FenPiece =
  | 'p'
  | 'r'
  | 'n'
  | 'b'
  | 'q'
  | 'k'
  | 'b'
  | 'P'
  | 'R'
  | 'N'
  | 'B'
  | 'Q'
  | 'K'
  | 'B';

const startFen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';

export interface PiecesTaken {
  white: { piece: FenPiece; count: number }[];
  black: { piece: FenPiece; count: number }[];
}

const pieceCounts: {
  piece: FenPiece;
  count: 1 | 2 | 8;
  color: 'white' | 'black';
}[] = [
  {
    piece: 'p',
    count: 8,
    color: 'white',
  },
  {
    piece: 'b',
    count: 2,
    color: 'white',
  },
  {
    piece: 'n',
    count: 2,
    color: 'white',
  },
  {
    piece: 'r',
    count: 2,
    color: 'white',
  },
  {
    piece: 'q',
    count: 1,
    color: 'white',
  },
  {
    piece: 'k',
    count: 1,
    color: 'white',
  },
  {
    piece: 'P',
    count: 8,
    color: 'black',
  },
  {
    piece: 'B',
    count: 2,
    color: 'black',
  },
  {
    piece: 'N',
    count: 2,
    color: 'black',
  },
  {
    piece: 'R',
    count: 2,
    color: 'black',
  },
  {
    piece: 'Q',
    count: 1,
    color: 'black',
  },
  {
    piece: 'K',
    count: 1,
    color: 'black',
  },
];

// WIP: Currently doesn't handle pawn promotion
const getPiecesTaken = (fen: string): PiecesTaken => {
  const splitFen = fen.split(' ')[0];
  const pieces: PiecesTaken = { white: [], black: [] };
  pieceCounts.map(({ piece, count, color }) => {
    const regex = new RegExp(piece, 'g');
    const newCount = Math.abs((splitFen.match(regex)?.length || 0) - count);
    pieces[color].push({ piece, count: newCount });
  });

  return pieces;
};

const pieceToImage = (piece?: FenPiece): string | undefined => {
  switch (piece) {
    case 'R': {
      return whiteRook;
    }
    case 'r': {
      return blackRook;
    }
    case 'N': {
      return whiteKnight;
    }
    case 'n': {
      return blackKnight;
    }
    case 'B': {
      return whiteBishop;
    }
    case 'b': {
      return blackBishop;
    }
    case 'P': {
      return whitePawn;
    }
    case 'p': {
      return blackPawn;
    }
    case 'Q': {
      return whiteQueen;
    }
    case 'q': {
      return blackQueen;
    }
    case 'K': {
      return whiteKing;
    }
    case 'k': {
      return blackKing;
    }
    default:
      return undefined;
  }
};

const validFen = (fen: string): boolean =>
  !!fen.match(
    /\s*^(((?:[rnbqkpRNBQKP1-8]+\/){7})[rnbqkpRNBQKP1-8]+)\s([b|w])\s([K|Q|k|q]{1,4})\s(-|[a-h][1-8])\s(\d+\s\d+)$/
  );

const validEpd = (fen: string): boolean =>
  !!fen.match(
    /\s*^(((?:[rnbqkpRNBQKP1-8]+\/){7})[rnbqkpRNBQKP1-8]+)\s([b|w])\s([K|Q|k|q]{1,4})\s(-)$/
  );

export {
  pieceToImage,
  validFen,
  validEpd,
  startFen,
  getPiecesTaken,
};
