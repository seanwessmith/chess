const data = require('./speedrun-games.json');

const getOpening = (ecourl) => {
  if (ecourl) {
    const lastSlash = ecourl.lastIndexOf('/') + 1;
    const length = ecourl.length;
    const dirtyOpening = ecourl.substr(lastSlash, length);
    const regex = /-/g;

    return dirtyOpening.replace(regex, ' ');
  }
  return;
}

const main = () => {
  const openings = {};
  for (const { ecourl } of data) {
    const opening = getOpening(ecourl);
    if (!openings[opening]) {
      openings[opening] = 1;
    } else {
      openings[opening]++;
    }
  }
  const sortable = Object.entries(openings)
  .sort(([,a],[,b]) => b-a)
  .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

  console.log(sortable);
}
main();