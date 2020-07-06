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
import proj5 from './components/proj5/index'

import img1 from './components/proj1/theGram.jpg'
import img2 from './components/proj2/places.jpg'
import img3 from './components/proj3/kitchen.jpg'
import img4 from './components/proj4/tour.jpg'

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
      image: img3,
      number: 3,
      title: 'Kitchen Fever'
    }
  ]

  const project2 = [
    {
      image: img4,
      number: 4,
      title: 'Trips & Tours'
    },
    {
      image: {},
      number: 5,
      title: 'Coming Soon'
    },
    {
      image: {},
      number: 6,
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
                justify="space-evenly"
                alignItems="center"
                style={{ marginBottom: 40 }}
              >
                {project.map((value) => (
                  <Grid key={value} item>
                    <Link
                      to={{ pathname: `/react-landing-pages/${value.number}` }}
                      style={{ textDecoration: "none" }}
                    >
                      <HomeGrid
                        number={value.number}
                        image={value.image}
                        title={value.title}
                      />
                    </Link>
                  </Grid>
                ))}
              </Grid>

              <Grid
                container
                justify="space-evenly"
                alignItems="center"
                style={{ marginBottom: 40 }}
              >
                {project2.map((value) => (
                  <Grid key={value} item>
                    <Link
                      to={{ pathname: `/react-landing-pages/${value.number}` }}
                      style={{ textDecoration: "none" }}
                    >
                      <HomeGrid
                        number={value.number}
                        image={value.image}
                        title={value.title}
                      />
                    </Link>
                  </Grid>
                ))}
              </Grid>

              <p style={{ fontSize: 12, paddingBottom: 40 }}>deyRupak</p>
              <a
                href="https://github.com/deyRupak"
                style={{ textDecoration: "none", color: "white" }}
              >
                <GitHubIcon
                  style={{ position: "fixed", bottom: 30, right: 30 }}
                />
              </a>
            </div>
          </Route>

          <Route path="/react-landing-pages/1" exact component={proj1} />
          <Route path="/react-landing-pages/2" exact component={proj2} />
          <Route path="/react-landing-pages/3" exact component={proj3} />
          <Route path="/react-landing-pages/4" exact component={proj4} />
          <Route path="/react-landing-pages/5" exact component={proj5} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
