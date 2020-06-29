import React from 'react'

import Nav from './Nav'
import Right from './Right'

import Grid from '@material-ui/core/Grid';


import './Styles.css'

export default function index() {
    return (
        <div className="home2">
            
            <Grid container 
                direction="row"
                justify="flex-end"
                alignItems="center">
                <Grid item xs={12}>
                    <Nav />
                </Grid>
                <Grid item xs={5}>
                    <Right />
                </Grid>

            </Grid>

        </div>
    )
}