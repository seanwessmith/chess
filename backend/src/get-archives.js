const fetch = require("node-fetch");
const moment = require("moment");
const fs = require("fs");
const pgnToJson = require('./shared/pgn-to-json');

const main = async () => {
  const username = "senseidanya";
  const startDate = moment("2020/10/01", "YYYY/MM/DD");
  const endDate = moment();

  const directory = `./games/${username}`;

  if (!fs.existsSync(directory)) {
    await fs.mkdirSync(directory);
  }

  while (startDate.isSameOrBefore(endDate)) {
    const year = startDate.format("YYYY");
    const month = startDate.format("MM");
    const pgnGames = await fetch(
      `https://api.chess.com/pub/player/${username}/games/${year}/${month}/pgn`
    ).then((r) => r.text());

    const jsonGames = pgnToJson(games);

    fs.writeFileSync(`${directory}/${month}_${year}.pgn`, pgnGames);
    fs.writeFileSync(`${directory}/${month}_${year}.json`, jsonGames);

    console.log(`found ${(games.match(/Event \"Live Chess\"/g) || []).length} games in ${startDate.format('MMMM of YYYY')}`);
    startDate.add(1, 'month');
  }
};

main();
