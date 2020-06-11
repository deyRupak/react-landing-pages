import React from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from '@material-ui/core/Grid'

import HomeGrid from './components/HomeGrid'

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <p className='hr-width'>
          <img src={logo} className="App-logo" alt="logo" />
          <hr/>
        </p>

        <HomeGrid/>
      </header>
    </div>
  );
}

export default App;
