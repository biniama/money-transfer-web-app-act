import React from 'react';
import MTAppBar from './AppBar';
import CreateAccount from './CreateAccount'
import ListAccounts from './ListAccounts';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <>
      <MTAppBar />
      <Switch>
        <Route
          exact
          path='/'
          render={(props) => <ListAccounts {...props} />} />

        <Route
          exact
          path='/create'
          render={(props) => <CreateAccount {...props} />} />
      </Switch>
    </>
  );
}

export default App;
