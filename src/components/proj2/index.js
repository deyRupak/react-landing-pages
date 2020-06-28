import React from 'react'

import Nav from './Nav'
import Left from './Left'
import Right from './Right'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


import './Styles.css'

export default function index() {
    return (
        <div className="home">
            
            <Grid container 
                direction="row"
                justify="space-between"
                alignItems="center">
                <Grid item xs={12}>
                    <Nav />
                </Grid>
                <Grid item xs={3}>
                    <Left />
                </Grid>
                <Grid item xs={6}>
                    <Right />
                </Grid>

            </Grid>

        </div>
    )
}