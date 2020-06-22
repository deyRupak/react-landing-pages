import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';

import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

import Grid from '@material-ui/core/Grid';
import Nav from './Nav'

const useStyles = makeStyles((theme) => ({
    root: {
        // maxWidth: 290,
        // margin: 20
        minHeight: '100vh'
    },
    media: {
        height: 0,
        paddingTop: '36.25%', // 16:9
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function Feed() {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root} >
                <Nav />

                <CardMedia
                    className={classes.media}
                    image="/static/images/cards/paella.jpg"
                    title="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <Grid container justify='center'>
                            <Grid item xs={3}>
                                <h4>hi<br />Posts</h4>
                            </Grid>
                            <Grid item xs={3}>
                                <h4>hi<br />Posts</h4>
                            </Grid>
                            <Grid item xs={3}>
                                <h4>hi<br />Posts</h4>
                            </Grid>
                        </Grid>
                    </Typography>
                </CardContent>

                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        <Grid container justify='center'>
                            <Grid item xs={3}>
                                <h4>hi<br />Posts</h4>
                            </Grid>
                            <Grid item xs={3}>
                                <h4>hi<br />Posts</h4>
                            </Grid>
                            <Grid item xs={3}>
                                <h4>hi<br />Posts</h4>
                            </Grid>
                        </Grid>
                    </Typography>
                </CardContent>

            </Card>

        </div>
    );
}
