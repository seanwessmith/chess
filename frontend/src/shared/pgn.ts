import shortHandOpenings from '../data/short-hand-opening.json';

export interface PgnJson {
  black: string;
  blackelo: string;
  chessComId: number;
  currentposition: string;
  date: string;
  eco: string;
  ecourl: string;
  endtime: string;
  link: string;
  moves: string;
  result: string;
  site: string;
  speedRunId: number;
  starttime: string;
  white: string;
  whiteelo: string;
  youtube: string;
}

const pgnFileToArray = (pgnFile: string): string[] => {
  const pgnArray = pgnFile.split('[Event "Live Chess"]');

  return pgnArray;
};

const getPgnMoveCount = (pgn?: string): number => {
  const re = /\d{1,3}\./g;

  return ((pgn || '').match(re) || []).length * 2;
};

export type ShortOpening =
  | 'Alekhines Defense'
  | 'Barnes Opening'
  | 'Benko Gambit'
  | 'Benoni Defense: Modern Variation'
  | 'Birds Opening'
  | 'Bishops Opening Berlin Ponziani Gambit'
  | 'Bogo-Indian Defense'
  | 'Caro Kann Defense Advance Variation'
  | 'Caro Kann Defense'
  | 'Catalan Opening'
  | 'Dutch Defense'
  | 'English Opening'
  | 'Englund Gambit'
  | 'Four Knights Game Scotch Variation Accepted'
  | 'French Defense'
  | 'Grob Opening'
  | 'Grunfeld Defense'
  | 'Giuoco Piano Game Center Attack'
  | 'Indian Game'
  | 'Indian Game Basque Opening'
  | 'Italian Game'
  | 'Kings Fianchetto Opening'
  | 'Kings Gambit'
  | 'Kings Indian Attack'
  | 'Kings Indian Defense'
  | 'Kings Pawn Opening Kings Knight Elephant Gambit'
  | 'Kings Pawn Opening Kings Knight Elephant Paulsen Countergambit'
  | 'Kings Pawn Opening Kings Knight Variation'
  | 'Kings Pawn Opening Napoleon Attack'
  | 'Kings Pawn Opening Owens Defense'
  | 'Kings Pawn Opening Wayward Queen Attack'
  | 'London System'
  | 'Modern Defense Standard Line'
  | 'Nimzo-Indian Defense'
  | 'Nimzowitsch-Larsen Attack'
  | 'Nimzowitsch Defense Declined'
  | 'Old Benoni Defense'
  | 'Petrovs Defense Classical Stafford Gambit'
  | 'Philidor Defense Exchange Variation'
  | 'Philidor Defense'
  | 'Pirc Defense'
  | 'Polish Opening'
  | 'Ponziani Opening'
  | 'Queens Gambit'
  | 'Queens Indian Defense'
  | 'Queens Pawn Opening Accelerated London System'
  | 'Queens Pawn Opening Borg Defense'
  | 'Queens Pawn Opening Zukertort Variation'
  | 'Reti Opening'
  | 'Ruy Lopez Opening Birds Defense'
  | 'Ruy Lopez Opening Morphy Defense'
  | 'Ruy Lopez Opening Old Steinitz Defense'
  | 'Ruy Lopez Opening'
  | 'Scandinavian Defense'
  | 'Scotch Game'
  | 'Sicilian Defense: Alapin Variation'
  | 'Sicilian Defense: Closed'
  | 'Sicilian Defense'
  | 'Slav Defense'
  | 'Trompowsky Attack'
  | 'Van Geet Opening Reversed Nimzowitsch Variation'
  | 'Vienna Game';
('Kings Pawn Opening Napoleon Attack');
const getPgnFromOpening = (opening?: ShortOpening): string | null => {
  const openings = {
    'Alekhines Defense': '1.e4 Nf6',
    'Barnes Opening': '1.f3',
    'Benko Gambit': '1.d4 Nf6 2.c4 c5 3.d5 b5',
    'Benoni Defense: Modern Variation': '1.d4 Nf6 2.c4 c5 3.d5 e6',
    'Birds Opening': '1.f4',
    'Bishops Opening Berlin Ponziani Gambit': '1.e4 e5 2.Bc4 Nf6 3.d4',
    'Bogo-Indian Defense': '1.d4 Nf6 2.c4 e6 3.Nf3 Bb4+',
    'Caro Kann Defense Advance Variation': '1.e4 c6 2.d4 d5 3.e5',
    'Caro Kann Defense': '1.e4 c6',
    'Catalan Opening': '1.d4 Nf6 2.c4 e6 3.g3',
    'Dutch Defense': '1.d4 f5',
    'English Opening': '1.c4',
    'Englund Gambit': '1.d4 e5',
    'Four Knights Game Scotch Variation Accepted':
      '1.e4 e5 2.Nf3 Nc6 3.Nc3 Nf6 4.d4 exd4',
    'French Defense': '1.e4 e6',
    'Grob Opening': '1.g4 d5 2.Bg2',
    'Grunfeld Defense': '1.d4 Nf6 2.c4 g6 3.Nc3 d5',
    'Giuoco Piano Game Center Attack':
      '1.e4 e5 2.Nf3 Nc6 3.Bc4 Bc5 4.c3 Nf6 5.d4',
    'Indian Game': '1.d4 Nf6',
    'Indian Game Basque Opening': '1.d4 Nf6 2.b3',
    'Italian Game': '1.e4 e5 2.Nf3 Nc6 3.Bc4',
    'Kings Fianchetto Opening': '1.g3',
    'Kings Gambit': '1.e4 e5 2.f4',
    'Kings Indian Attack': '1.Nf3 d5 2.g3',
    'Kings Indian Defense': '1.d4 Nf6 2.c4 g6',
    'Kings Pawn Opening Kings Knight Elephant Gambit': '1.e4 e5 2.Nf3 d5',
    'Kings Pawn Opening Kings Knight Elephant Paulsen Countergambit':
      '1.e4 e5 2.Nf3 d5 3.exd5 e4',
    'Kings Pawn Opening Kings Knight Variation': '1.e4 e5 2.Nf3',
    'Kings Pawn Opening Owens Defense': '1.e4 b6',
    'Kings Pawn Opening Wayward Queen Attack': '1.e4 e5 2.Qh5',
    'London System': '1.d4 d5 2.Nf3 Nf6 3.Bf4',
    'Modern Defense Standard Line': '1.e4 g6 2.d4 Bg7 3.Nc3',
    'Nimzo-Indian Defense': '1.d4 Nf6 2.c4 e6 3.Nc3 Bb4',
    'Nimzowitsch-Larsen Attack': '1.b3',
    'Nimzowitsch Defense Declined': '1.e4 Nc6 2.Nf3',
    'Old Benoni Defense': '1.d4 c5',
    'Petrovs Defense Classical Stafford Gambit': '1.e4 e5 2.Nf3 Nf6 3.Nxe5 Nc6',
    'Philidor Defense': '1.e4 e5 2.Nf3 d6',
    'Pirc Defense': '1.e4 d6',
    'Polish Opening': '1.b4',
    'Ponziani Opening': '1.e4 e5 2.Nf3 Nc6 3.c3',
    'Queens Gambit': '1.d4 d5 2.c4',
    'Queens Indian Defense': '1.d4 Nf6 2.c4 e6 3.Nf3 b6',
    'Queens Pawn Opening Accelerated London System': '1.d4 d5 2.Bf4',
    'Queens Pawn Opening Borg Defense': '1.d4 g5',
    'Queens Pawn Opening Zukertort Variation': '1.d4 d5 2.Nf3',
    'Reti Opening': '1.Nf3',
    'Ruy Lopez Opening Birds Defense': '1.e4 e5 2.Nf3 Nc6 3.Bb5 Nd4',
    'Ruy Lopez Opening Morphy Defense': '1.e4 e5 2.Nf3 Nc6 3.Bb5 a6',
    'Ruy Lopez Opening Old Steinitz Defense': '1.e4 e5 2.Nf3 Nc6 3.Bb5 d6',
    'Scandinavian Defense': '1.e4 d5',
    'Scotch Game': '1.e4 e5 2.Nf3 Nc6 3.d4',
    'Sicilian Defense: Alapin Variation': '1.e4 c5 2.c3',
    'Sicilian Defense: Closed': '1.e4 c5 2.Nc3',
    'Sicilian Defense': '1.e4 c5',
    'Slav Defense': '1.d4 d5 2.c4 c6',
    'Trompowsky Attack': '1.d4 Nf6 2.Bg5',
    'Van Geet Opening Reversed Nimzowitsch Variation': '1.Nc3 e5',
    'Vienna Game': '1.e4 e5 2.Nc3',
    'Ruy Lopez Opening': '1.e4 e5 2.Nf3 Nc6 3.Bb5',
    'Kings Pawn Opening Napoleon Attack': '1.e4 e5 2.Qf3',
    'Philidor Defense Exchange Variation': '1.e4 e5 2.Nf3 d6 3.d4 exd4',
  };

  return opening ? openings[opening as ShortOpening] : null;
};

// "https://www.chess.com/openings/Scotch-Game-Classical-Intermezzo-Variation"
const getOpening = (ecourl?: string): ShortOpening | undefined => {
  if (ecourl) {
    const lastSlash = ecourl.lastIndexOf('/') + 1;
    const length = ecourl.length;

    return ecourl
      .substr(lastSlash, length)
      .replaceAll('-', ' ') as ShortOpening;
  }

  return;
};

const getShortOpening = (opening?: ShortOpening): ShortOpening | undefined => {
  if (!opening) {
    return;
  }
  for (const short of shortHandOpenings) {
    if (opening.includes(short)) {
      return short as ShortOpening;
    }
  }

  return opening;
};

const playerWon = (username: string, game: PgnJson): 'tie' | 'won' | 'lost' => {
  const playerColor = game.white === username ? 'white' : 'black';

  if (game.result === '1-0') {
    return playerColor === 'white' ? 'won' : 'lost';
  } else if (game.result === '0-1') {
    return playerColor === 'black' ? 'won' : 'lost';
  }

  return 'tie';
};

const getCurrPgn = (pgn: string, move: number): string | undefined => {
  if (!move) {
    return;
  }
  const actualMove = move + 1 + Math.floor(move / 2);

  return pgn.split(' ').slice(0, actualMove).join(' ');
};

export {
  playerWon,
  getShortOpening,
  getPgnFromOpening,
  pgnFileToArray,
  getPgnMoveCount,
  getOpening,
  getCurrPgn,
};
