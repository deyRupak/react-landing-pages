import React from 'react'

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Left from './Left'


import './Styles.css'

export default function Right() {
    return (
        <Paper style={{ height: '690px', background: 'transparent'}}>
            <Grid container>
                <Grid item xs={12}
                    style={{
                        height: '430px',
                        fontSize: '60px',
                        textAlign: 'left',
                        justify: 'center',
                        paddingTop: 40,  
                        paddingLeft: 30,  
                        opacity: 0.6,
                        color: 'white',
                        background: 'black'
                    }}>
                    <p>
                    The place with<br /> the peace and<br /> calmness.
                    </p>
                    
                    </Grid>
                <Grid item xs={12}
                    style={{
                        background: 'yellow',
                        height: '260px'
                    }}>
                    <Grid container
                        direction="row"
                        justify="flex-end"
                        alignItems="center">
                        <Grid item>3</Grid>
                    </Grid>
                </Grid>
            
            </Grid>
        </Paper>
    )
}