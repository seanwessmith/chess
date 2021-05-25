let FenString = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
while (FenString.indexOf('|') > 0) {
  FenString = FenString.replace('|', '/');
}

const MaxMove = 600;
const CurVar = 0;
const EnPass = -1;
const PieceType = new Array(2);
for (let i = 0; i < 2; i++) {
  PieceType[i] = new Array(16);
}
const PiecePosX = new Array(2);
for (let i = 0; i < 2; i++) {
  PiecePosX[i] = new Array(16);
}
const PiecePosY = new Array(2);
for (let i = 0; i < 2; i++) {
  PiecePosY[i] = new Array(16);
}
const PieceMoves = new Array(2);
for (let i = 0; i < 2; i++) {
  PieceMoves[i] = new Array(16);
}
const Castling = new Array(2);
for (let i = 0; i < 2; i++) {
  Castling[i] = new Array(2);
}
const Board = new Array(8);
for (let i = 0; i < 8; i++) {
  Board[i] = new Array(8);
}
const HalfMove = new Array(MaxMove + 1);
HalfMove[0] = 0;

// eslint-disable-next-line
const NewCommands = new Array();

const HistPiece = new Array(2);
for (let i = 0; i < 2; i++) {
  HistPiece[i] = new Array(600);
}
const HistType = new Array(2);
for (let i = 0; i < 2; i++) {
  HistType[i] = new Array(MaxMove);
}
const HistPosX = new Array(2);
for (let i = 0; i < 2; i++) {
  HistPosX[i] = new Array(MaxMove);
}
const HistPosY = new Array(2);
for (let i = 0; i < 2; i++) {
  HistPosY[i] = new Array(MaxMove);
}

for (let ii = 0; ii < 2; ii++) {
  PieceType[ii][0] = 0;
  PiecePosX[ii][0] = 4;
  PieceType[ii][1] = 1;
  PiecePosX[ii][1] = 3;
  PieceType[ii][2] = 2;
  PiecePosX[ii][2] = 0;
  PieceType[ii][3] = 2;
  PiecePosX[ii][3] = 7;
  PieceType[ii][4] = 3;
  PiecePosX[ii][4] = 2;
  PieceType[ii][5] = 3;
  PiecePosX[ii][5] = 5;
  PieceType[ii][6] = 4;
  PiecePosX[ii][6] = 1;
  PieceType[ii][7] = 4;
  PiecePosX[ii][7] = 6;
  for (let jj = 0; jj < 8; jj++) {
    PieceType[ii][jj + 8] = 5;
    PiecePosX[ii][jj + 8] = jj;
  }
  for (let jj = 0; jj < 16; jj++) {
    PieceMoves[ii][jj] = 0;
    PiecePosY[ii][jj] =
      (1 - ii) * Math.floor(jj / 8) + ii * (7 - Math.floor(jj / 8));
  }
}

for (let ii = 0; ii < 8; ii++) {
  for (let jj = 0; jj < 8; jj++) {
    Board[ii][jj] = 0;
  }
}
for (let ii = 0; ii < 2; ii++) {
  for (let jj = 0; jj < 16; jj++) {
    Board[PiecePosX[ii][jj]][PiecePosY[ii][jj]] =
      (PieceType[ii][jj] + 1) * (1 - 2 * ii);
  }
}
for (let ii = 0; ii < 2; ii++) {
  for (let jj = 0; jj < 2; jj++) {
    Castling[ii][jj] = 1;
  }
}

const PieceName = 'KQRBNP';

// eslint-disable-next-line
const MoveArray = new Array();
MoveArray.length = 0;

const PieceCode = new Array(6); for (let i = 0; i < 6; i++) {
  PieceCode[i] = PieceName.charCodeAt(i);
}

export {
  Board,
  Castling,
  CurVar,
  EnPass,
  FenString,
  HalfMove,
  HistPiece,
  HistPosX,
  HistPosY,
  HistType,
  MaxMove,
  MoveArray,
  NewCommands,
  PieceCode,
  PieceMoves,
  PieceName,
  PiecePosX,
  PiecePosY,
  PieceType,
};
