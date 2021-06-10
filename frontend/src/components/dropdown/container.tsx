import { useContext } from 'react';

import { initialState, UserContext } from '../../store/userContext';

import './container.scss';

const DropDown = () => {
  const { user, setUser } = useContext(UserContext);

  const handleSignOut = () => {
    setUser(initialState);
  };

  return (
    <div className='dropdown'>
      <div className='box'>
        <h1>{user.username}</h1>
      </div>
      <div className='box'>
        <button onClick={handleSignOut}>Sign out</button>
      </div>
    </div>
  );
};

export default DropDown;
