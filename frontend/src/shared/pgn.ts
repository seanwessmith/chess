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
  const pgnArray = pgnFile.split('[Event "Live Chess"]')
  return pgnArray
}

const getPgnMoveCount = (pgn?: string): number => {
  const re = /\d{1,3}\./g
  return ((pgn || '').match(re) || []).length * 2;
}

// "https://www.chess.com/openings/Scotch-Game-Classical-Intermezzo-Variation"
const getOpening = (ecourl?: string) => {
  if (ecourl) {
    const lastSlash = ecourl.lastIndexOf('/') + 1;
    const length = ecourl.length;
    return ecourl.substr(lastSlash, length).replaceAll('-', ' ');
  }
  return;
}

export {
  pgnFileToArray,
  getPgnMoveCount,
  getOpening,
}
