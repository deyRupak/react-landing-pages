import React from 'react';

import { Grid, Typography, TextField, Chip, IconButton, MenuItem, Button, Paper, OutlinedInput, InputLabel, FormControl, InputAdornment, List, ListItem, ListItemIcon, ListItemText, TableContainer, Table, TableBody, TableRow, TableCell } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

import Acrylic from 'react-acrylic'

const handleClick = () => {

}

export default function Hero() {
    

    return (
        <>
            <TableContainer component={Paper} style={{ background: 'rgba(124, 210, 230,     0.4)'}} elevation={0}>
            <Table>
                <TableBody>
                    {/* dropdown */}
                        
                    <TableRow>
                            <TableCell style={{ paddingRight: 0, borderBottom: '0px', color: 'white', fontFamily: 'Abel, sans-serif' }}>Traveller Type</TableCell>
                            <TableCell style={{ paddingTop: 0, paddingLeft: 6, borderBottom: '0px'}}>
                            <TextField
                                id="standard-select-type"
                                select
                                label="Couple"
                                style={{width: '20ch'}}
                            >
                            </TextField>
                        </TableCell>

                            <TableCell style={{ paddingRight: 0, borderBottom: '0px', color: 'white', fontFamily: 'Abel, sans-serif' }}>Program</TableCell>
                        <TableCell style={{ paddingTop: 0, paddingLeft: 6, borderBottom: '0px' }}>
                            <TextField
                                id="standard-select-program"
                                select
                                label="Mountaineering"
                                style={{ width: '20ch' }}
                            >
                            </TextField>
                        </TableCell>

                            <TableCell style={{ paddingRight: 0, borderBottom: '0px', color: 'white', fontFamily: 'Abel, sans-serif' }}>Set Location</TableCell>
                        <TableCell style={{ paddingTop: 0, paddingLeft: 6, borderBottom: '0px' }}>
                            <TextField
                                id="standard-select-location"
                                select
                                label="CH"
                                style={{ width: '20ch' }}
                            >
                            </TextField>
                        </TableCell>
                        
                    </TableRow>
                    
                </TableBody>
            </Table>
        </TableContainer>

        <TableContainer style={{paddingTop: 20}}>
            <Table>
                <TableBody>
                    {/* search */}
                    <TableRow>
                        <TableCell style={{borderBottom: '0px'}}>
                            <FormControl fullWidth variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-search" style={{ color: 'white', fontFamily: 'Abel, sans-serif' }}>Search</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-search"
                                    startAdornment={<InputAdornment position="start"><SearchIcon /></InputAdornment>}
                                    labelWidth={60}
                                    style={{color: 'white'}}
                                />
                            </FormControl>
                                
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
        
            <TableContainer>
                <Table>
                    <TableBody>
                        {/* main */}
                        <TableRow>
                            <TableCell style={{paddingLeft: 0, color: 'white', borderBottom: '0px'}}>
                                <Typography style={{fontFamily: 'Abel, sans-serif'}}>
                                    <span style={{fontSize: '90px'}}>Mountain</span><br />
                                    <span style={{ fontSize: '47px' }}>Climbing Trips & Tours</span>
                                </Typography>
                                
                                    <Chip label="View Program" variant="outlined" 
                                    style={{ color: 'white', border: '1px solid white', marginTop: 10, fontFamily: 'Abel, sans-serif'}} onClick={handleClick}/>
                                
                            </TableCell>

                            <TableCell style={{ paddingLeft: 60, paddingRight: 10, borderBottom: '0px'}}> 
                                <IconButton style={{border: '1px solid white'}}>
                                <PlayCircleOutlineIcon style={{fontSize: 120, color: 'white'}}/>
                                </IconButton>
                            </TableCell>

                            <TableCell style={{ paddingLeft: 6, paddingRight: 0, textAlign: 'justify', borderBottom: '0px' }}>
                                <Typography style={{ textAlign: 'justify', color: 'white', fontFamily: 'Abel, sans-serif'}}>
                                    Watch Videos <br /><br />
                                    Lorem ipsum dolor sit, amet consectetur<br /> adipisicing elit.
                                    Vitae corporis assumenda <br /> blanditiis, laboriosam veritatis dicta ipsam.
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

            <TableContainer>
                <Table>
                    <TableBody>

                        {/* about */}
                        <TableRow>
                            <TableCell style={{borderBottom: '0px', paddingLeft: 0}}>
                                <Typography style={{ textAlign: 'justify', color: 'white', fontFamily: 'Abel, sans-serif' }}>
                                    <br />About<br />
                                    <span style={{fontSize: '14px'}}>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br />
                                    Vitae corporis assumenda blanditiis, laboriosam veritatis dicta ipsam.<br />
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br />
                                    Et impedit dolores reiciendis corporis enim, labore illum molestiae.<br />
                                     Dolor odit officia ut unde, eos similique porro, obcaecati dolorum quaerat facere rerum!</span>
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    );
}
