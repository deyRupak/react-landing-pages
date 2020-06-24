import React from 'react';
import logo from './logo.svg';
import './App.css';

import Grid from '@material-ui/core/Grid'
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeGrid from './components/HomeGrid'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import proj1 from './components/proj1/index'

function App() {
  return (
    <Router>
      <div className="App">

          <Switch>
              <Route path="/" exact>
              <div className="home">
                  <header className="App-header">
                    <p className="hr-width">
                    <img src={logo} className="App-logo" alt="logo" />
                    <hr />
                    </p>
                  </header>
                    <Grid
                    container
                    justify="center"
                    spacing={8}
                    style={{
                    display: "flex",
                    maxWidth: "100%",
                    }}
                    >
                      {[1, 2, 3].map((value) => (
                      <Grid key={value} item>
                        <Link to={{pathname: `/${value}`}}>
                            <HomeGrid number={value} />
                        </Link>
                          
                      </Grid>
                      ))}
                    </Grid>

                  <p style={{ marginTop: "12vh", fontSize: 12 }}>under construction</p>
              <a href="https://github.com/deyRupak" style={{ textDecoration: "none", color: 'white'}}>
                  <GitHubIcon style={{ position: "fixed", bottom: 30, right: 30 }} />
                  </a>
              
              </div>
              </Route>

              <Route path="/1" exact component={proj1} />
          
          </Switch>
          

      </div>
    </Router>
  );
}

export default App;
