import { useState } from 'react';

import Achievements from '../../components/achievements/container';
import ChessBoard from '../../components/chess-board/container';
import NavBar from '../../components/navbar/container';
import RankSelector from '../../components/rank-selector/container';
import speedRunJson from '../../data/speedrun-games.json';
import chessIcon from '../../images/icons/chess-icon.svg';
import { PgnJson } from '../../shared/pgn';

import './container.scss';

function Chessbook(): JSX.Element {
  const [rank, setRank] = useState({ beg: 1400, end: 1500 });
  const [toggle, setToggle] = useState<'speedrun' | 'achievements'>(
    'speedrun'
  );

  const slicedSpeedRunJson = (speedRunJson as PgnJson[]).filter(game => {
    const senseiDanya = game.white === 'SenseiDanya' ? 'whiteelo' : 'blackelo';
    const gameElo = parseInt(game[senseiDanya], 10);
    if (gameElo > rank.beg && gameElo < rank.end) {
      return true;
    }

    return false;
  });

  return (
    <div className='chessbook-module'>
      <NavBar />
      <RankSelector rank={rank} setRank={setRank} />
      <section className='section-title'>
        <img src={chessIcon} />
        <p>Beginner to Master</p>
      </section>
      <ul className='toggler'>
        <li
          className={toggle === 'speedrun' ? 'active' : 'inactive'}
          onClick={() => setToggle('speedrun')}
        >
          speedrun
        </li>
        <li
          className={toggle === 'achievements' ? 'active' : 'inactive'}
          onClick={() => setToggle('achievements')}
        >
          achievements
        </li>
        <span />
      </ul>
      <section
        className={`chessboards-container${
          toggle === 'speedrun' ? '' : ' hide'
        }`}
      >
        {slicedSpeedRunJson.map(game => <ChessBoard key={`game-${game.chessComId}`} size={500} pgn={game} />)}
      </section>
      <section
        className={`achievements-container${
          toggle === 'achievements' ? '' : ' hide'
        }`}
      >
        <Achievements games={slicedSpeedRunJson} />
      </section>
    </div>
  );
}

export default Chessbook;
