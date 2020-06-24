import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Styles.css'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Button from '@material-ui/core/Button';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from "@material-ui/icons/Visibility";
import Paper from '@material-ui/core/Paper';
export default function index(){

return (
<div>
    <Grid container className="bg" justify="center" alignItems="center">
        {/* sidebar */}
        <Grid item xs={2}>
            <Paper style={{height: '98vh', width: '98%'}} elevation={3}>hi</Paper>
        </Grid>

        {/* feed */}
        <Grid item xs={9}>
            <Paper style={{ height: '98vh', width: '100%' }} elevation={3}>

                {/* navbar */}
                
            </Paper>
        </Grid>
    </Grid>
</div>
);
}