import React from 'react'

import Acrylic from 'react-acrylic'

import {Grid, Paper, IconButton, ListItemIcon, ListItem, Table, TableBody, TableRow, TableCell} from '@material-ui/core'
import { Link } from "react-router-dom";

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import MenuIcon from '@material-ui/icons/Menu';

import Hero from './Hero'
import './Styles4.css'

export default function index(){
return (
<div className="bg4">
    <div className="bg4a"></div>
    <Acrylic colorOverlay='transparent' opacity='0' width='100%' height='0' top='0%' blur={10} borderRadius='2px'
        borderRadius='2px' left='0%'>

        <Grid container direction="row" justify="space-around" alignItems="center">

            <Grid item xs={1}>

                <Grid container direction="column" justify="space-between" alignItems="center"
                    style={{height: '100vh', paddingTop: 30, paddingBottom: 30}}>
                    <Grid item>
                        <Paper elevation={0} style={{background: 'transparent', color: 'white'}}>
                            <ListItem>
                                <ListItemIcon>
                                        <Link
                                            to={{ pathname: `/react-landing-pages` }}
                                            style={{ textDecoration: 'none', color: 'white' }}
                                        >
                                    <IconButton>
                                        <AcUnitIcon style={{ color: 'white' }}/>
                                    </IconButton>
                                        </Link>
                                </ListItemIcon>
                            </ListItem>
                        </Paper>
                    </Grid>
                    <Grid item>
                            <Paper style={{ background: 'transparent', borderRadius: '6%', border: '1px solid white'}}>
                                <Table>
                                <TableBody>
                                <TableRow>
                                            <TableCell style={{borderBottom : '0'}}>
                                                <IconButton>
                                                <FacebookIcon style={{color: 'white'}}/>
                                                </IconButton>    
                                            </TableCell>
                                </TableRow>
                                <TableRow>
                                            <TableCell style={{ borderBottom: '0' }}>
                                                <IconButton>
                                                <InstagramIcon style={{ color: 'white' }}/>
                                                </IconButton>    
                                            </TableCell>
                                </TableRow>
                                <TableRow>
                                            <TableCell style={{ borderBottom: '0' }}>
                                                <IconButton>
                                                <TwitterIcon style={{ color: 'white' }}/>
                                                </IconButton>
                                            </TableCell>
                                </TableRow>
                                </TableBody>
                            </Table>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item xs={10}>
                    <Grid container direction="column" justify="space-between" alignItems="center"
                        style={{ height: '100vh', paddingTop: 30, paddingBottom: 30 }}>
                        <Grid item>
                            <Hero />
                        </Grid>
                    </Grid>
            </Grid>

            <Grid item xs={1}>
                    <Grid container direction="column" justify="space-between" alignItems="center"
                        style={{ height: '100vh', paddingTop: 30, paddingBottom: 30}}>
                        <Grid item>
                            <Paper elevation={0} style={{ background: 'transparent', color: 'white' }}>
                                <ListItem>
                                    <ListItemIcon>
                                        <IconButton>
                                        <MenuIcon style={{ color: 'white' }} />
                                        </IconButton>
                                    </ListItemIcon>
                                </ListItem>
                            </Paper>
                        </Grid>
                    </Grid>
            </Grid>


        </Grid>

    </Acrylic>
</div>
)
}