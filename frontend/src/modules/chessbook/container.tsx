import { useState, useContext } from 'react';

import Achievements from '../../components/achievements/container';
import ChessBoard from '../../components/chess-board/container';
import ImportUserDataModal from '../../components/modals/import-userdata';
import RankSelector from '../../components/rank-selector/container';
import speedRunJson from '../../data/speedrun-games.json';
import chessIcon from '../../images/icons/chess-icon.svg';
import { PgnJson } from '../../shared/pgn';
import { UserContext } from '../../store/userContext';

import './container.scss';

function Chessbook(): JSX.Element {
  const [rank, setRank] = useState({ beg: 1400, end: 1500 });
  const [toggle, setToggle] = useState<'speedrun' | 'achievements'>(
    'speedrun'
  );
  const { user, setUser } = useContext(UserContext);
  const [modalVisible, setModalVisible] = useState(!user.showedModal);

  const slicedSpeedRunJson = (speedRunJson as PgnJson[]).filter(game => {
    const senseiDanya = game.white === 'SenseiDanya' ? 'whiteelo' : 'blackelo';
    const gameElo = parseInt(game[senseiDanya], 10);
    if (gameElo > rank.beg && gameElo < rank.end) {
      return true;
    }

    return false;
  });

  const handleClose = () => {
    setModalVisible(false);
    setUser({ ...user, showedModal: true });
  };
  const handleSubmit = () => {
    setModalVisible(false);
    setUser({ ...user, showedModal: true, fetchGames: true });
  };
  const handleLoadUserGames = () => {
    setUser({ ...user, fetchGames: true });
  };

  return (
    <div className='chessbook-module'>
      <ImportUserDataModal
        visible={modalVisible}
        handleClose={() => handleClose()}
        handleSubmit={() => handleSubmit()}
      />
      <nav>
        <h1>chessbook</h1>
        <p className={`hello${!user.username ? ' invisible' : ''}`}>
            Hello <strong>{user.username}</strong>.{' '}
          {user?.games?.length
            ? `You've played ${user.games.length} games on Chess.com`
            : <span className='loading'>loading matches</span>}
        </p>
        {user.lastUpdatedDate ? <p className='last-updated'>Last updated on {user.lastUpdatedDate}</p> : null}
        {user.username && !user.fetchGames ? <button onClick={() => handleLoadUserGames()}>
            Load latest matches
        </button>
        : null}
        {!user.username ? (
          <button
            className='signin-button'
            onClick={() => setModalVisible(true)}
          >
            Sign In
          </button>
        ) : null}
      </nav>
      <RankSelector rank={rank} setRank={setRank} />
      <section className='section-title'>
        <img src={chessIcon} alt='chess-icon' />
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
        {slicedSpeedRunJson.map((game, key) => (
          <ChessBoard key={`game-${key}`} size={500} pgn={game} />
        ))}
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
