const data = require('./speedrun-games.json');

const getOpening = ecourl => {
  if (ecourl) {
    const lastSlash = ecourl.lastIndexOf('/') + 1;
    const length = ecourl.length;
    return ecourl.substr(lastSlash, length).replace(/-/g, ' ');
  }
  return;
};

const main = () => {
  const openings = {};
  for (const datum of data) {
    if (datum.black === 'SenseiDanya') {
      // add to opening array
      const opening = getOpening(datum.ecourl);
      if (!openings[opening]) {
        openings[opening] = {
          count: 1,
          ranks: [],
        };
      } else {
        openings[opening].count++;
      }

      // get rank rounded down to nearest 100
      const color = datum.black === 'SenseiDanya' ? 'black' : 'white';
      let rank = datum[`${color}elo`];
      rank = Math.ceil(rank / 100) * 100;
      rank = Math.max(rank, 1000);

      openings[opening].ranks.push(rank);
    }
  }
  const sortable = Object.entries(openings)
    .sort(([, a], [, b]) => b - a)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

  console.log(sortable);
};
main();
