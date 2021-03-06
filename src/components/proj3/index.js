import React from 'react'
import './Styles3.css'
import Nav from './Nav'

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Acrylic from 'react-acrylic'

export default function index(){
return(
<>
    <div className="bg3">
        <Nav />
            
            <Grid container direction="row" justify="flex-start" alignItems="flex-start">
                <Grid item xs={1}>
                    <Paper style={{marginLeft: 60, textAlign: 'center', background:'transparent'}} elevation={0}>
                        <Typography style={{ fontFamily: 'Permanent Marker, cursive', fontSize: 140, color: 'white'}}>
                                Kitchen
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper style={{ marginLeft: 0, textAlign: 'center', marginTop: 60, background: 'transparent' }} elevation={0}>
                        <Typography style={{ fontFamily: 'Permanent Marker, cursive', fontSize: 200, color: 'white' }}>
                            Fever
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        
        <Acrylic colorOverlay='#fff5' opacity='0.2' width='35%' height='80vh' top='20%' blur={12} borderRadius='2px'
            borderRadius='2px' left='60%'>
            <Grid container direction="row" justify="flex-start" alignItems="flex-end">
                <Grid item xs={10} style={{paddingTop: 40, paddingLeft: 40}}>
                    <Paper style={{background: 'transparent'}} elevation={0}>
                            <Typography 
                                style={{ 
                                    fontFamily: 'Merriweather, serif', 
                                    fontSize: 60, 
                                    color:'white'}}>
                                Clean <span style={{color: 'orange'}}>Food</span> <br/> Taste Good
                            </Typography>

                            <Typography 
                                style={{
                                    color: 'white', 
                                    borderLeft: '3px solid orange', 
                                    paddingLeft: 18, 
                                    marginTop: 12}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Aspernatur odit pariatur voluptatibus modi ducimus obcaecati sit explicabo ipsum provident a aliquam nostrum voluptate alias nihil, 
                                corrupti illo impedit inventore architecto! Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Aspernatur odit pariatur voluptatibus modi ducimus obcaecati sit explicabo ipsum provident a aliquam nostrum voluptate alias nihil, 
                                corrupti illo impedit inventore architecto!
                            </Typography>

                            <Button 
                                style={{
                                    backgroundColor: 'orange',
                                    marginTop: 32,
                                    paddingLeft: 20,
                                    paddingRight: 20,
                                    color: 'white',
                                    fontSize: 18
                                }}>
                                <b>BOOK NOW</b>
                            </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Acrylic>

    </div>
</>
)
}