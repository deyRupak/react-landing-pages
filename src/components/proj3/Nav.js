import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Nav() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style={{background: 'transparent'}}>
                <Toolbar>
                    <Link
                        to={{ pathname: `/react-landing-pages` }}
                        style={{ textDecoration: 'none', color: 'white' }}
                    >
                    <IconButton edge="start" className={classes.menuButton} color="white" aria-label="menu">
                        
                            <MenuIcon style={{color: 'white'}}/>
                        
                    </IconButton>
                    </Link>
                </Toolbar>
            </AppBar>
        </div>
    );
}
