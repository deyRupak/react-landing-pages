import React from 'react'
import './Styles3.css'

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Acrylic from 'react-acrylic'

export default function index(){
return(
<>
    <div className="bg">
        <Acrylic colorOverlay='#000000' opacity='0.4' width='35%' height='80vh' top='20%' blur={10} borderRadius='2px'
            borderRadius='2px' left='60%'>
            <Grid container direction="row" justify="flex-start" alignItems="flex-end">
                <Grid item xs={10} style={{paddingTop: 40, paddingLeft: 20}}>
                    <Paper>
                        x
                    </Paper>
                </Grid>
            </Grid>
        </Acrylic>

    </div>
</>
)
}