import React from 'react';
import MTAppBar from './AppBar';
import CreateAccount from './CreateAccount'
import ListAccounts from './ListAccounts';

function App() {
  return (
    <div className="App">
      <MTAppBar />
      <CreateAccount />
      <ListAccounts />
    </div>
  );
}

export default App;
