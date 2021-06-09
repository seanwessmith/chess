import { useContext, useState } from 'react';

import ImportUserDataModal from '../../components/modals/import-userdata';
import profileIcon from '../../images/nav/profile-icon.svg';
import { UserContext } from '../../store/userContext';

import './style.scss';

const NavBar = () => {
  const { user, setUser } = useContext(UserContext);

  const [modalVisible, setModalVisible] = useState(!user.showedModal);
  const handleLoadUserGames = () => {
    setUser({ ...user, fetchGames: true });
  };

  const handleClose = () => {
    setModalVisible(false);
    setUser({ ...user, showedModal: true });
  };
  const handleSubmit = () => {
    setModalVisible(false);
    setUser({ ...user, showedModal: true, fetchGames: true });
  };

  return (
    <nav>
      <ImportUserDataModal
        visible={modalVisible}
        handleClose={() => handleClose()}
        handleSubmit={() => handleSubmit()}
      />
      <h1>chessbook</h1>
      <p className={`hello${!user.username ? ' invisible' : ''}`}>
        Hello <strong>{user.username}</strong>.{' '}
        {user?.games?.length ? (
          `You've played ${user.games.length} games on Chess.com`
        ) : (
          <span className='loading'>loading matches</span>
        )}
      </p>
      {user.lastUpdatedDate ? (
        <p className='last-updated'>Last updated on {user.lastUpdatedDate}</p>
      ) : null}
      {user.username && !user.fetchGames ? (
        <button onClick={() => handleLoadUserGames()}>
          Load latest matches
        </button>
      ) : null}
      {!user.username ? (
        <button className='signin-button' onClick={() => setModalVisible(true)}>
          Sign In
        </button>
      ) : null}
      <div className='profile-container'>
        <img src={profileIcon} />
      </div>
    </nav>
  );
};

export default NavBar;
