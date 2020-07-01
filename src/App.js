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
import proj2 from './components/proj2/index'
import proj3 from './components/proj3/index'
import proj4 from './components/proj4/index'

import img1 from './components/proj1/theGram.jpg'
import img2 from './components/proj2/places.jpg'

function App() {
  const project = [
    {
      image : img1,
      number: 1,
      title: 'Redesigning The Gram'
    },
    {
      image : img2,
      number: 2,
      title: 'Explore'
    },
    {
      image: {},
      number: 3,
      title: 'Coming Soon'
    }

  ]
  return (
    <Router>
      <div className="App">

          <Switch>
              <Route path="/react-landing-pages" exact>
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
                      {project.map((value) => (
                      <Grid key={value} item>
                          <Link to={{ pathname: `/react-landing-pages/${value.number}`}} style={{textDecoration: 'none'}}>
                            <HomeGrid number={value.number} image={value.image} title={value.title}/>
                        </Link>
                          
                      </Grid>
                      ))}
                    </Grid>

                  <p style={{ marginTop: "12vh", fontSize: 12 }}>deyRupak</p>
              <a href="https://github.com/deyRupak" style={{ textDecoration: "none", color: 'white'}}>
                  <GitHubIcon style={{ position: "fixed", bottom: 30, right: 30 }} />
                  </a>
              
              </div>
              </Route>

              <Route path="/react-landing-pages/1" exact component={proj1} />
              <Route path="/react-landing-pages/2" exact component={proj2} />
              <Route path="/react-landing-pages/3" exact component={proj3} />
              <Route path="/react-landing-pages/4" exact component={proj4} />
          
          </Switch>
          

      </div>
    </Router>
  );
}

export default App;
