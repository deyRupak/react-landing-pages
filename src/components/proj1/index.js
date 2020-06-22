import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Acc from './Acc'
import Feed from './Feed'
import './Styles.css'

export default function index() {
    return (
        <Grid container spacing={0}>
            
                    <Grid item xs={12} lg={3} className="sp">
                        <Acc />
                    </Grid>
                    <Grid item xs={12} lg={9} className="sp">
                        <Feed />
                    </Grid>
            
        </Grid>
    );
}
