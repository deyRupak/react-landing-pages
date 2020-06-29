import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
root: {
flexGrow: 1,
},
searchButton: {
marginRight: theme.spacing(4),
},
title: {
flexGrow: 1,
textAlign: "left",
fontFamily: "Lobster, cursive",
},
}));

export default function ButtonAppBar() {
const classes = useStyles();

return (
  <div className={classes.root}>
    <AppBar position="static" style={{ background: "transparent" }}>
      <Toolbar>
        <Typography variant="h4" className={classes.title}>
          Places.
        </Typography>
        <IconButton
          edge="start"
          className={classes.searchButton}
          color="black"
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <Link
          to={{ pathname: `/react-landing-pages` }}
          style={{ textDecoration: "none" }}
        >
          <Button
            color="black"
            style={{ paddingLeft: 38, paddingRight: 38, fontWeight: 600 }}
          >
            Home
          </Button>
        </Link>
        <Button
          color="black"
          style={{ paddingLeft: 38, paddingRight: 38, fontWeight: 600 }}
        >
          Places
        </Button>
        <Button
          color="black"
          style={{ paddingLeft: 38, paddingRight: 38, fontWeight: 600 }}
        >
          Stories
        </Button>
      </Toolbar>
    </AppBar>
  </div>
);
}