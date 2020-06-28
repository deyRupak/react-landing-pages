import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    searchButton: {
        marginRight: theme.spacing(8)

    },
    title: {
        flexGrow: 1,
        textAlign: 'left'
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" style= {{background: 'transparent'}}>
                <Toolbar>
                    
                    <Typography variant="h4" className={classes.title}>
                        Places.
                    </Typography>
                    <IconButton edge="start" className={classes.searchButton} color="black" aria-label="search">
                        <SearchIcon />
                    </IconButton>
                    <Button color="black" style={{ paddingRight: 38, fontWeight: 600 }}>Home</Button>
                    <Button color="black" style={{ paddingRight: 38, fontWeight: 600 }}>Places</Button>
                    <Button color="black" style={{ paddingRight: 38, fontWeight: 600 }}>Stories</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}
