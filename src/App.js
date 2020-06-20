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
      </header>
        <Grid container justify="center" spacing={8} 
          style={{
            display: 'flex', 
            maxWidth: '100%'
        }}>
          
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <HomeGrid />
            </Grid>
          ))}
        
        </Grid>

        <p style={{marginTop : '12vh', fontSize: 12}}>under construction</p>

      
    </div>
  );
}

export default App;
