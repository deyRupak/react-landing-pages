import React from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from '@material-ui/core/Grid'

import HomeGrid from './components/HomeGrid'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p className="hr-width">
          <img src={logo} className="App-logo" alt="logo" />
          <hr />
        </p>

        <Grid container spacing={8} justify="center">
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <HomeGrid />
            </Grid>
          ))}
        </Grid>
      </header>
    </div>
  );
}

export default App;
