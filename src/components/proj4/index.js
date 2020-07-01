import React from 'react'

import { Breakpoint, BreakpointProvider } from 'react-socks';
import Acrylic from 'react-acrylic'
import {Grid, Paper} from '@material-ui/core'

import './Styles4.css'

export default function index(){
    return (
        <div className="bg4">
            <div className="bg4a"></div>
                <Acrylic colorOverlay='transparent' opacity='0' width='100%' height='100vh' top='0%' blur={10} borderRadius='2px'
                    borderRadius='2px' left='0%'>

                        <Grid container
                            direction="row"
                            justify="space-around"
                            alignItems="center"
                            style={{
                                paddingTop: 30
                            }}>

                            <Grid item xs={2}>
                                <Paper style={{height: '90vh'}}>1</Paper>
                            </Grid>
                            
                    <Grid item xs={6}>
                        <Paper>1</Paper>
                            </Grid>
                            
                    <Grid item xs={2}>
                        <Paper>1</Paper>
                    </Grid>
                        </Grid>
                
                </Acrylic>
        </div>
    )
}