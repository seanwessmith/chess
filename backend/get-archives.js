const fetch = require('node-fetch');
const fs = require('fs');

const main = async () => {
  const username = 'seanwessmith';
  const YYYY = '2020';
  const MM = '06';
  const games = await fetch(`https://api.chess.com/pub/player/${username}/games/${YYYY}/${MM}/pgn`).then(r => r.text());

  // console.log('games: ', games);
  fs.writeFileSync(`./games/${MM}_${YYYY}.pgn`, games);
}

main();