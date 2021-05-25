declare module '*.png' {
  const value: string;
  export = value;
}
declare module '*.svg' {
  const value: string;
  export = value;
}

declare module '*.pgn' {
  const value: string;
  export = value;
}
declare module '*.json' {
  const value: string;
  export = value;
}

declare module 'pgn-parser' {
  type Header =
    | 'site'
    | 'date'
    | 'white'
    | 'black'
    | 'result'
    | 'currentposition'
    | 'eco'
    | 'ecourl'
    | 'whiteelo'
    | 'blackelo'
    | 'starttime'
    | 'endtime'
    | 'link';
  interface PgnParsedGames {
    headers: {
      name: string;
      value: string;
    }[];
    moves: {
      move_number: number;
      move: number;
    }[];
  }
  function parse(str: string): PgnParsedGames[];
}
