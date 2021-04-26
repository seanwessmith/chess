const fs = require('fs');
const data = require('./speedrun-games.json');
// const oldData = await require('./speedrun-game-ids.json');
// const senseidanyaData = [
//   ...require('./senseidanya/10_2020.json'),
//   ...require('./senseidanya/11_2020.json'),
//   ...require('./senseidanya/12_2020.json'),
//   ...require('./senseidanya/01_2021.json'),
//   ...require('./senseidanya/02_2021.json'),
//   ...require('./senseidanya/03_2021.json'),
// ]

// const main = async () => {
//   const newData = [];
//   for (const datum of oldData) { 
//     for (const senseidanyaDatum of senseidanyaData) {
//       if (parseInt(senseidanyaDatum.id) === datum.chessComId) {
//         const data = senseidanyaDatum;
//         delete data.id;
//         delete datum.game;
//         newData.push({
//           ...datum,
//           ...data,
//         })
//       }
//     }
//   }
//   await fs.writeFileSync('./new-speedrun-games.json', JSON.stringify(newData));
// }

const main = () => {
  const uniqueEcoUrls = [];
  for (const datum of data) {
    if (!uniqueEcoUrls.includes(datum.ecourl)) {
      uniqueEcoUrls.push(datum.ecourl);
    }
  }
  const sorted = uniqueEcoUrls.sort((a,b) => a.localeCompare(b));
  console.log(uniqueEcoUrls.length, sorted);
}
main();