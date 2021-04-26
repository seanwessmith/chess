const { getSubtitles } = require("youtube-captions-scraper");
const games = require("../../frontend/src/data/speedrun-games.json");
const fs = require("fs");

const main = async () => {

  // create directory to store new transcripts
  if (!(await fs.existsSync('transcripts'))) {
    await fs.mkdirSync('transcripts');
  }

  // file may contain duplicates, get array of unique youtube links
  const skipped = [];
  const found = [];
  const links = games.map(({ youtube }) => youtube);
  const uniqueYoutubeLinks = [...new Set(links)];
  console.log(uniqueYoutubeLinks.length, 'unique links');

  // iterate links and get transcripts then save them to file
  for (const link of uniqueYoutubeLinks) {
    const videoID = link.split("?v=")[1];
    try {
      const captions = await getSubtitles({
        videoID, // youtube video id
        lang: "en", // default: `en`
      });
      const transcript = [];
      for (const { text } of captions) {
        transcript.push(text);
      }
      await fs.writeFileSync(`./transcripts/${videoID}-transcript.txt`, transcript.join(" "));
      found.push(videoID);
      if (found.length % 10 === 0) {
        console.log('found', found.length, 'skipped', skipped);
      }
    } catch (err) {
      skipped.push(videoID);
    }
  }

  // log how many transcripts were found and how many were skipped
  console.log('skipped: ', skipped.length);
  console.log('found: ', found.length);
  await fs.writeFileSync(`./skipped.txt`, JSON.stringify(skipped));
  await fs.writeFileSync(`./found.txt`, JSON.stringify(found));
};

main();
