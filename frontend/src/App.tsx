import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Chessbook from './modules/chessbook/container';
import ViewPgn from './modules/view-pgn/container';
import { UserProvider } from './store/userContext';
import './App.scss';

function App(): JSX.Element {
  return (
    <div className='App'>
      <UserProvider>
        <Router>
          <Switch>
            <Route path='/view-pgn' component={ViewPgn} />
            <Route path='/' component={Chessbook} />
          </Switch>
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
