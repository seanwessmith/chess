import React, { useEffect, useReducer } from 'react';

import moment from 'moment';

import getChessComGames from '../actions/getChesscomGames';
import {
  PgnJson,
  playerWon,
  ShortOpening,
  getOpening,
} from '../shared/pgn';

type Openings = {
  [opening in ShortOpening]: {
    wins: number;
    losses: number;
    ties: number;
  };
};

interface UserState {
  fetchGames: boolean;
  fetchedGames: boolean;
  username?: string;
  games: PgnJson[];
  openings: Partial<Openings>;
  showedModal: boolean;
  lastUpdatedDate?: string;
}

function analyzeOpenings(username: string, games: PgnJson[]) {
  const openings: Partial<Openings> = {};
  for (const game of games) {
    // this may be a source of errors due to user changing username
    const shortOpening = getOpening(game.ecourl);
    const result = playerWon(username, game);
    if (shortOpening) {
      if (!openings[shortOpening]) {
        openings[shortOpening] = {
          ties: 0,
          wins: 0,
          losses: 0,
        };
      }
      if (result === 'tie') {
        openings[shortOpening]!.ties++;
      } else if (result === 'won') {
        openings[shortOpening]!.wins++;
      } else if (result === 'lost') {
        openings[shortOpening]!.losses++;
      }
    }
  }

  return openings;
}

const reducer = (user: UserState, newUser: UserState) => {
  if (user === null) {
    localStorage.removeItem('user');

    return initialState;
  }

  return { ...user, ...newUser };
};

const initialState: UserState = {
  fetchGames: false,
  fetchedGames: false,
  username: undefined,
  games: [],
  openings: {},
  showedModal: false,
};

const localState = JSON.parse(
  localStorage.getItem('user') || JSON.stringify(initialState)
);
const UserContext = React.createContext<{
  user: UserState;
  setUser: React.Dispatch<UserState>;
}>({} as any);

interface Props {
  children: JSX.Element;
}

function UserProvider(props: Props) {
  const [user, setUser] = useReducer(reducer, localState);

  useEffect(() => {
    const getGames = async (username: string) => {
      const games = await getChessComGames({ username });
      const openings = analyzeOpenings(username, games);
      games.sort((a, b) => b.moves.localeCompare(a.moves));
      setUser({
        ...user,
        games,
        openings,
        fetchGames: false,
        fetchedGames: true,
        lastUpdatedDate: moment().format('MM/DD/YY HH:mm'),
      });
    };
    if (user.username && user.fetchGames && !user.fetchedGames) {
      getGames(user.username);
    }
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
