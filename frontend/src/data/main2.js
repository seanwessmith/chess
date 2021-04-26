const allOpenings = {
  'Scotch Game Classical Intermezzo Variation': { count: 1, ranks: [1000] },
  'Kings Pawn Opening Wayward Queen Attack 2...Nc6 3.Bc4': {
    count: 1,
    ranks: [1000],
  },
  'Bishops Opening Berlin Ponziani Gambit 3...exd4': {
    count: 1,
    ranks: [1000],
  },
  'Barnes Opening 1...e5': { count: 1, ranks: [1000] },
  'Van Geet Opening Reversed Nimzowitsch Variation 2.e3': {
    count: 1,
    ranks: [1000],
  },
  'Four Knights Game Scotch Variation Accepted 5.Nxd4 Bc5': {
    count: 1,
    ranks: [1000],
  },
  'Italian Game': { count: 2, ranks: [1000, 1600] },
  'Queens Pawn Opening Borg Defense': { count: 1, ranks: [1000] },
  'Scotch Game Classical Variation 5.Nxc6': { count: 1, ranks: [1000] },
  'Pirc Defense Small Center Defense': { count: 2, ranks: [1000, 1800] },
  'Scandinavian Defense Mieses Kotrc Variation 3.Nc3 Qd8': {
    count: 4,
    ranks: [1000, 1500, 2000, 2400],
  },
  'Kings Fianchetto Opening 1...e5 2.Bg2 d5': { count: 1, ranks: [1000] },
  'Queens Pawn Opening Accelerated London System': { count: 1, ranks: [1000] },
  'Kings Pawn Opening Napoleon Attack': { count: 1, ranks: [1100] },
  'Philidor Defense Exchange Variation 4.Nxd4': {
    count: 3,
    ranks: [1100, 1400, 1500],
  },
  'French Defense Advance Variation': { count: 1, ranks: [1100] },
  'Italian Game Two Knights Modern Bishops Opening': {
    count: 1,
    ranks: [1200],
  },
  'Philidor Defense 3.d4 Bg4 4.dxe5': { count: 1, ranks: [1200] },
  'Sicilian Defense Bowdler Attack': {
    count: 8,
    ranks: [1200, 1200, 1300, 1500, 1500, 1700, 2000, 2100],
  },
  'Sicilian Defense Open': { count: 1, ranks: [1200] },
  'Ruy Lopez Opening Morphy Defense Anderssen Variation 5...b5': {
    count: 1,
    ranks: [1200],
  },
  'Italian Game Anti Fried Liver Defense': {
    count: 3,
    ranks: [1200, 1300, 1600],
  },
  'Kings Pawn Opening Kings Knight Elephant Gambit 3.exd5': {
    count: 2,
    ranks: [1200, 1400],
  },
  'Queens Gambit Declined Three Knights Harrwitz Attack': {
    count: 1,
    ranks: [1200],
  },
  'Kings Gambit Accepted Modern Abbazia Defense': { count: 1, ranks: [1300] },
  'Sicilian Defense Old Sicilian Open Accelerated Dragon Variation': {
    count: 2,
    ranks: [1300, 1500],
  },
  'Modern Defense Standard Line': { count: 1, ranks: [1300] },
  'Sicilian Defense Smith Morra Gambit 2...cxd4 3.Qxd4 Nc6': {
    count: 1,
    ranks: [1300],
  },
  'Sicilian Defense Closed Traditional Line 3.Nf3': {
    count: 2,
    ranks: [1300, 1300],
  },
  'Ruy Lopez Opening Birds Defense 4.Nxd4 exd4 5.O O c6 6.Bc4': {
    count: 1,
    ranks: [1300],
  },
  'Kings Pawn Opening Owens Defense 2.d4 Bb7': { count: 1, ranks: [1300] },
  'Philidor Defense Exchange Variation 4.Nxd4 Nf6 5.Nc3 Be7 6.Bc4': {
    count: 1,
    ranks: [1300],
  },
  'Sicilian Defense Open Accelerated Dragon Exchange Variation': {
    count: 2,
    ranks: [1400, 1600],
  },
  'Kings Pawn Opening Kings Knight Variation': { count: 1, ranks: [1400] },
  'Ruy Lopez Opening Old Steinitz Defense 4.c3': { count: 1, ranks: [1400] },
  'Caro Kann Defense Advance Variation 3...Bf5 4.Bd3': {
    count: 1,
    ranks: [1400],
  },
  'Sicilian Defense McDonnell Attack 2...d5 3.e5': {
    count: 3,
    ranks: [1400, 1700, 1700],
  },
  'Indian Game': { count: 1, ranks: [1400] },
  'Indian Game Basque Opening': { count: 1, ranks: [1400] },
  'Kings Pawn Opening Kings Knight Elephant Paulsen Countergambit': {
    count: 1,
    ranks: [1400],
  },
  'Petrovs Defense Classical Stafford Gambit': { count: 1, ranks: [1400] },
  'Sicilian Defense Alapin Variation Barmen Modern Line 6.Be2 e6': {
    count: 1,
    ranks: [1500],
  },
  'Kings Indian Defense Smyslov Variation': { count: 1, ranks: [1500] },
  'Kings Indian Defense Zinnowitz Variation': { count: 1, ranks: [1500] },
  'Sicilian Defense Old Sicilian Variation': { count: 1, ranks: [1500] },
  'Birds Opening Dutch Variation 2.Nf3': { count: 1, ranks: [1500] },
  'Sicilian Defense Open Lowenthal Kalashnikov Variation 6.N1c3 a6 7.Na3 b5 8.Nd5': {
    count: 1,
    ranks: [1600],
  },
  'Sicilian Defense Keres Variation': { count: 1, ranks: [1600] },
  'Pirc Defense Main Line 4.Be3': { count: 1, ranks: [1600] },
  'French Defense Normal Variation 2...d5': { count: 1, ranks: [1600] },
  'Giuoco Piano Game Center Attack Greco Moller Attack 9...Bf6': {
    count: 1,
    ranks: [1600],
  },
  'Ruy Lopez Opening Morphy Defense Closed Pilnik Variation': {
    count: 1,
    ranks: [1600],
  },
  'Scandinavian Defense Mieses Kotrc Main Line 4.d4': {
    count: 2,
    ranks: [1600, 1700],
  },
  'Sicilian Defense Alapin Variation 2...d5': { count: 1, ranks: [1600] },
  'Nimzowitsch Defense Declined': { count: 1, ranks: [1700] },
  'Pirc Defense Main Line Austrian Weiss Variation': {
    count: 1,
    ranks: [1700],
  },
  'Queens Pawn Opening Zukertort Variation': { count: 1, ranks: [1700] },
  'Pirc Defense 2.d4 c6': { count: 3, ranks: [1700, 1900, 2000] },
  'Sicilian Defense': { count: 1, ranks: [1700] },
  'French Defense Normal Variation': { count: 1, ranks: [1700] },
  'Sicilian Defense Staunton Cochrane Variation': {
    count: 2,
    ranks: [1700, 1800],
  },
  'Caro Kann Defense Exchange Variation...4.Bd3 Nc6 5.c3 Nf6': {
    count: 1,
    ranks: [1800],
  },
  'Modern Defense Standard Line 3...d6': {
    count: 3,
    ranks: [1800, 2300, 2300],
  },
  'Old Benoni Defense 2.d5': { count: 1, ranks: [1800] },
  'Queens Pawn Opening Accelerated London System': { count: 1, ranks: [1800] },
  'Kings Indian Defense Normal Variation 4.e4 d6': { count: 1, ranks: [1800] },
  'Ponziani Opening Ponziani Countergambit 4.d4': { count: 1, ranks: [1800] },
  'Sicilian Defense Open Accelerated Dragon Modern Variation...6.Be3 Nf6 7.Bc4 O O 8.f3': {
    count: 1,
    ranks: [1800],
  },
  'French Defense Advance Variation 3...c5 4.c3': { count: 1, ranks: [1800] },
  'Pirc Defense 2.d4 Nf6 3.Nc3': { count: 1, ranks: [1900] },
  'Modern Defense Standard Line 3...c6': { count: 1, ranks: [1900] },
  'Modern Defense with 1 e4 2.d4 Bg7': { count: 1, ranks: [1900] },
  'Modern Defense with 1 d4': { count: 1, ranks: [1900] },
  'Sicilian Defense Alapin Variation 2...d6': {
    count: 3,
    ranks: [1900, 2000, 2400],
  },
  'Englund Gambit 2.dxe5 Nc6 3.Nf3': { count: 1, ranks: [1900] },
  'Indian Game Knights Variation East Indian Defense 3.e3 Bg7': {
    count: 1,
    ranks: [1900],
  },
  'Sicilian Defense Smith Morra Gambit Declined Alapin Formation': {
    count: 1,
    ranks: [1900],
  },
  'Sicilian Defense Alapin Variation 2...Nc6 3.Nf3': {
    count: 2,
    ranks: [2000, 2400],
  },
  'Kings Indian Defense Gligoric System 7...exd4': { count: 1, ranks: [2000] },
  'Pirc Defense Main Line Austrian Attack 4...Bg7': { count: 1, ranks: [2000] },
  'Sicilian Defense Alapin Variation 2...e6 3.d4': {
    count: 2,
    ranks: [2000, 2000],
  },
  'French Defense Rubinstein Variation 4.Nxe4': { count: 1, ranks: [2000] },
  'Indian Game Knights Variation': { count: 2, ranks: [2000, 2100] },
  'Sicilian Defense Open Accelerated Dragon Maroczy Bind Formation 5...d6': {
    count: 1,
    ranks: [2100],
  },
  'Kings Indian Defense Orthodox Variation...8.Nxd4 Re8 9.f3 c6 10.Kh1': {
    count: 1,
    ranks: [2100],
  },
  'Sicilian Defense Alapin Variation...3.d4 d5 4.exd5 exd5 5.Nf3': {
    count: 1,
    ranks: [2100],
  },
  'Ruy Lopez Opening Berlin Improved Steinitz Defense 5.d4': {
    count: 2,
    ranks: [2100, 2400],
  },
  'Alekhines Defense Normal Variation 3.d4': { count: 1, ranks: [2100] },
  'Alekhines Defense Normal Variation': { count: 1, ranks: [2100] },
  'Slav Defense 3.Nc3': { count: 1, ranks: [2100] },
  'Ruy Lopez Opening Birds Defense 4.Nxd4 exd4 5.O O Bc5 6.d3': {
    count: 1,
    ranks: [2100],
  },
  'Alekhines Defense Exchange Variation 5...cxd6 6.Nc3 g6 7.Be3': {
    count: 1,
    ranks: [2100],
  },
  'Kings Indian Defense Fianchetto Variation 4...O O': {
    count: 2,
    ranks: [2100, 2300],
  },
  'Sicilian Defense Nyezhmetdinov Rossolimo Fianchetto Variation 4.Bxc6 dxc6': {
    count: 1,
    ranks: [2200],
  },
  'Kings Indian Defense Samisch Samisch Gambit 7.Nge2': {
    count: 1,
    ranks: [2200],
  },
  'Sicilian Defense Canal Attack 3...Nd7 4.O O': { count: 1, ranks: [2200] },
  'Slav Defense Modern Alapin Variation Czech Classical Dutch Variation': {
    count: 1,
    ranks: [2200],
  },
  'Modern Defense with 1 e4 2.d4 Bg7 3.Nf3 d6': {
    count: 2,
    ranks: [2200, 2300],
  },
  'Caro Kann Defense Two Knights Attack': { count: 1, ranks: [2200] },
  'Torre Attack Fianchetto Defense 4.e3': { count: 1, ranks: [2200] },
  'French Defense Tarrasch Closed 4.e5 Nfd7 5.c3': { count: 1, ranks: [2200] },
  'Caro Kann Defense Two Knights Attack 3...dxe4 4.Nxe4': {
    count: 1,
    ranks: [2200],
  },
  'Nimzo Indian Defense Kmoch Variation 4...d5 5.a3': {
    count: 1,
    ranks: [2200],
  },
  'Four Knights Game Spanish Variation Rubinstein Accepted Exchange Variation...7.exf6 Qxf6 8.dxc3 Bc5': {
    count: 1,
    ranks: [2200],
  },
  'Alekhines Defense Samisch Attack': { count: 1, ranks: [2200] },
  'Queens Pawn Opening Accelerated London System': { count: 1, ranks: [2300] },
  'Scandinavian Defense Mieses Kotrc Gubinsky Melts Defense 4.d4 Nf6 5.Nf3': {
    count: 1,
    ranks: [2300],
  },
  'English Opening Four Knights Variation': { count: 1, ranks: [2300] },
  'French Defense Classical Burn Morozevich Line 7.Nf3 b6': {
    count: 1,
    ranks: [2300],
  },
  'Queens Pawn Opening Chigorin Variation 2...Nf6': { count: 1, ranks: [2300] },
  'Queens Gambit Accepted Central Variation McDonnell Defense 4.Nf3 Bb4': {
    count: 1,
    ranks: [2300],
  },
  'Kings Indian Defense 3.Nf3': { count: 1, ranks: [2300] },
  'Caro Kann Defense Goldman Variation': { count: 1, ranks: [2300] },
  'Sicilian Defense Nyezhmetdinov Rossolimo Fianchetto Variation 4.Bxc6 dxc6 5.d3 Bg7 6.h3': {
    count: 1,
    ranks: [2300],
  },
  'Queens Pawn Opening Accelerated London Steinitz Countergambit': {
    count: 2,
    ranks: [2400, 2400],
  },
  'Sicilian Defense Nyezhmetdinov Rossolimo Fianchetto Variation 4.O O Bg7 5.Re1 e5 6.c3': {
    count: 1,
    ranks: [2400],
  },
  'Nimzowitsch Larsen Attack English Variation': { count: 1, ranks: [2400] },
  'Ruy Lopez Opening Old Steinitz Defense 4.d4 Bd7': {
    count: 1,
    ranks: [2400],
  },
  'Ruy Lopez Opening Berlin Defense 4.d3 d6': { count: 1, ranks: [2400] },
  'Sicilian Defense Alapin Variation Barmen Defense 4.d4 Nc6 5.Nf3 Bg4': {
    count: 1,
    ranks: [2400],
  },
  'Indian Game 2.Nc3': { count: 1, ranks: [2400] },
  'Sicilian Defense Open Accelerated Dragon Modern Variation 5...Bg7 6.Be3 Nf6': {
    count: 1,
    ranks: [1900],
  },
  'Petrovs Defense Classical Paulsen Attack': { count: 1, ranks: [2400] },
};

const danyaOpenings = {
  'Italian Game': { count: 2, ranks: [ 1000, 1600 ] },
  'Queens Pawn Opening Borg Defense': { count: 1, ranks: [ 1000 ] },
  'Pirc Defense Small Center Defense': { count: 2, ranks: [ 1000, 1800 ] },
  'Scandinavian Defense Mieses Kotrc Variation 3.Nc3 Qd8': { count: 4, ranks: [ 1000, 1500, 2000, 2400 ] },
  'Philidor Defense Exchange Variation 4.Nxd4': { count: 3, ranks: [ 1100, 1400, 1500 ] },
  'French Defense Advance Variation': { count: 1, ranks: [ 1100 ] },
  'Italian Game Two Knights Modern Bishops Opening': { count: 1, ranks: [ 1200 ] },
  'Philidor Defense 3.d4 Bg4 4.dxe5': { count: 1, ranks: [ 1200 ] },
  'Sicilian Defense Open': { count: 1, ranks: [ 1200 ] },
  'Italian Game Anti Fried Liver Defense': { count: 3, ranks: [ 1200, 1300, 1600 ] },
  'Kings Pawn Opening Kings Knight Elephant Gambit 3.exd5': { count: 2, ranks: [ 1200, 1400 ] },
  'Modern Defense Standard Line': { count: 1, ranks: [ 1300 ] },
  'Ruy Lopez Opening Birds Defense 4.Nxd4 exd4 5.O O c6 6.Bc4': { count: 1, ranks: [ 1300 ] },
  'Kings Pawn Opening Owens Defense 2.d4 Bb7': { count: 1, ranks: [ 1300 ] },
  'Philidor Defense Exchange Variation 4.Nxd4 Nf6 5.Nc3 Be7 6.Bc4': { count: 1, ranks: [ 1300 ] },
  'Ruy Lopez Opening Old Steinitz Defense 4.c3': { count: 1, ranks: [ 1400 ] },
  'Caro Kann Defense Advance Variation 3...Bf5 4.Bd3': { count: 1, ranks: [ 1400 ] },
  'Kings Pawn Opening Kings Knight Elephant Paulsen Countergambit': { count: 1, ranks: [ 1400 ] },
  'Petrovs Defense Classical Stafford Gambit': { count: 1, ranks: [ 1400 ] },
  'Sicilian Defense Alapin Variation Barmen Modern Line 6.Be2 e6': { count: 1, ranks: [ 1500 ] },
  'Sicilian Defense Open Lowenthal Kalashnikov Variation 6.N1c3 a6 7.Na3 b5 8.Nd5': { count: 1, ranks: [ 1600 ] },
  'Pirc Defense Main Line 4.Be3': { count: 1, ranks: [ 1600 ] },
  'French Defense Normal Variation 2...d5': { count: 1, ranks: [ 1600 ] },
  'Scandinavian Defense Mieses Kotrc Main Line 4.d4': { count: 2, ranks: [ 1600, 1700 ] },
  'Nimzowitsch Defense Declined': { count: 1, ranks: [ 1700 ] },
  'Pirc Defense Main Line Austrian Weiss Variation': { count: 1, ranks: [ 1700 ] },
  'Pirc Defense 2.d4 c6': { count: 3, ranks: [ 1700, 1900, 2000 ] },
  'French Defense Normal Variation': { count: 1, ranks: [ 1700 ] },
  'Caro Kann Defense Exchange Variation...4.Bd3 Nc6 5.c3 Nf6': { count: 1, ranks: [ 1800 ] },
  'Modern Defense Standard Line 3...d6': { count: 3, ranks: [ 1800, 2300, 2300 ] },
  'Old Benoni Defense 2.d5': { count: 1, ranks: [ 1800 ] },
  'Queens Pawn Opening Accelerated London System': { count: 2, ranks: [ 1800, 2300 ] },
  'French Defense Advance Variation 3...c5 4.c3': { count: 1, ranks: [ 1800 ] },
  'Pirc Defense 2.d4 Nf6 3.Nc3': { count: 1, ranks: [ 1900 ] },
  'Modern Defense Standard Line 3...c6': { count: 1, ranks: [ 1900 ] },
  'Sicilian Defense Alapin Variation 2...d6': { count: 3, ranks: [ 1900, 2000, 2400 ] },
  'Englund Gambit 2.dxe5 Nc6 3.Nf3': { count: 1, ranks: [ 1900 ] },
  'Sicilian Defense Alapin Variation 2...e6 3.d4': { count: 2, ranks: [ 2000, 2000 ] },
  'French Defense Rubinstein Variation 4.Nxe4': { count: 1, ranks: [ 2000 ] },
  'Sicilian Defense Alapin Variation...3.d4 d5 4.exd5 exd5 5.Nf3': { count: 1, ranks: [ 2100 ] },
  'Ruy Lopez Opening Berlin Improved Steinitz Defense 5.d4': { count: 2, ranks: [ 2100, 2400 ] },
  'Alekhines Defense Normal Variation 3.d4': { count: 1, ranks: [ 2100 ] },
  'Slav Defense 3.Nc3': { count: 1, ranks: [ 2100 ] },
  'Ruy Lopez Opening Birds Defense 4.Nxd4 exd4 5.O O Bc5 6.d3': { count: 1, ranks: [ 2100 ] },
  'Alekhines Defense Exchange Variation 5...cxd6 6.Nc3 g6 7.Be3': { count: 1, ranks: [ 2100 ] },
  'Kings Indian Defense Samisch Samisch Gambit 7.Nge2': { count: 1, ranks: [ 2200 ] },
  'Sicilian Defense Canal Attack 3...Nd7 4.O O': { count: 1, ranks: [ 2200 ] },
  'Caro Kann Defense Two Knights Attack': { count: 1, ranks: [ 2200 ] },
  'French Defense Tarrasch Closed 4.e5 Nfd7 5.c3': { count: 1, ranks: [ 2200 ] },
  'Caro Kann Defense Two Knights Attack 3...dxe4 4.Nxe4': { count: 1, ranks: [ 2200 ] },
  'Nimzo Indian Defense Kmoch Variation 4...d5 5.a3': { count: 1, ranks: [ 2200 ] },
  'Scandinavian Defense Mieses Kotrc Gubinsky Melts Defense 4.d4 Nf6 5.Nf3': { count: 1, ranks: [ 2300 ] },
  'Queens Pawn Opening Chigorin Variation 2...Nf6': { count: 1, ranks: [ 2300 ] },
  'Queens Gambit Accepted Central Variation McDonnell Defense 4.Nf3 Bb4': { count: 1, ranks: [ 2300 ] },
  'Caro Kann Defense Goldman Variation': { count: 1, ranks: [ 2300 ] },
  'Queens Pawn Opening Accelerated London Steinitz Countergambit': { count: 1, ranks: [ 2400 ] },
  'Ruy Lopez Opening Old Steinitz Defense 4.d4 Bd7': { count: 1, ranks: [ 2400 ] },
  'Sicilian Defense Alapin Variation 2...Nc6 3.Nf3': { count: 1, ranks: [ 2400 ] },
  'Indian Game 2.Nc3': { count: 1, ranks: [ 2400 ] },
  'Petrovs Defense Classical Paulsen Attack': { count: 1, ranks: [ 2400 ] }
}

const openingShort = [
  'Alekhine\'s Defense',
  'Barnes Opening',
  'Benko Gambit',
  'Benoni Defense: Modern Variation',
  'Birds Opening',
  'Bishops Opening Berlin Ponziani Gambit',
  'Bogo-Indian Defense',
  'Caro Kann Defense Advance Variation',
  'Caro Kann Defense',
  'Catalan Opening',
  'Dutch Defense',
  'English Opening',
  'Englund Gambit',
  'Four Knights Game Scotch Variation Accepted',
  'French Defense',
  'Grob Opening',
  'Grunfeld Defense',
  'Giuoco Piano Game Center Attack',
  'Indian Game',
  'Indian Game Basque Opening',
  'Italian Game',
  'Kings Fianchetto Opening',
  'Kings Gambit',
  'Kings Indian Attack',
  'Kings Indian Defense',
  'Kings Pawn Opening Kings Knight Elephant Gambit',
  'Kings Pawn Opening Kings Knight Elephant Paulsen Countergambit',
  'Kings Pawn Opening Kings Knight Variation',
  'Kings Pawn Opening Napoleon Attack',
  'Kings Pawn Opening Owens Defense',
  'Kings Pawn Opening Wayward Queen Attack',
  'London System',
  'Modern Defense Standard Line',
  'Modern Defense',
  'Nimzo-Indian Defense',
  'Nimzowitsch-Larsen Attack',
  'Nimzowitsch Defense Declined',
  'Old Benoni Defense',
  'Petrovs Defense Classical Stafford Gambit',
  'Philidor Defense Exchange Variation',
  'Philidor Defense',
  'Pirc Defense',
  'Polish Opening',
  'Ponziani Opening',
  'Queens Gambit',
  'Queens Indian Defense',
  'Queens Pawn Opening Accelerated London System',
  'Queens Pawn Opening Borg Defense',
  'Queens Pawn Opening Zukertort Variation',
  'Reti Opening',
  'Ruy Lopez Opening Birds Defense',
  'Ruy Lopez Opening Morphy Defense',
  'Ruy Lopez Opening Old Steinitz Defense',
  'Ruy Lopez Opening',
  'Scandinavian Defense',
  'Scotch Game',
  'Sicilian Defense: Alapin Variation',
  'Sicilian Defense: Closed',
  'Sicilian Defense',
  'Slav Defense',
  'Trompowsky Attack',
  'Van Geet Opening Reversed Nimzowitsch Variation',
  'Vienna Game',
];

const getShortOpening = opening => {
  for (const short of openingShort) {
    if (opening.includes(short)) {
      return short;
    }
  }
  return 'XXXXXXXXXXXXXXXXXXXXXXXXXXXX' + opening;
};

const rankGroups = [
  { min: 0, max: 1000 },
  { min: 1000, max: 1100 },
  { min: 1100, max: 1200 },
  { min: 1200, max: 1300 },
  { min: 1300, max: 1400 },
  { min: 1400, max: 1500 },
  { min: 1500, max: 1600 },
  { min: 1600, max: 1700 },
  { min: 1700, max: 1800 },
  { min: 1800, max: 1900 },
  { min: 1900, max: 2000 },
];
const main = () => {
  const groupedOpenings = {};
  rankGroups.map(({ min, max }) => (groupedOpenings[`${min}-${max}`] = []));
  for (const group of rankGroups) {
    for (const opening of Object.keys(danyaOpenings)) {
      for (const rank of danyaOpenings[opening].ranks) {
        if (rank === group.min) {
          groupedOpenings[`${group.min}-${group.max}`].push(
            getShortOpening(opening)
          );
        }
      }
    }
  }

  console.log(groupedOpenings);
};
main();
