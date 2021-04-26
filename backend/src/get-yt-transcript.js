const { getSubtitles } = require('youtube-captions-scraper');
const fs = require('fs');

const videoID = '33EpuPv4ULw';
getSubtitles({
  videoID, // youtube video id
  lang: 'en' // default: `en`
}).then(async (captions) => {
  const transcript = [];
  for (const { text } of captions) {
    transcript.push(text);
  }
  await fs.writeFileSync(`./${videoID}-transcript.txt`, transcript.join(' '));
});