import React from 'react';

import { Grid, Typography, TextField, Chip, IconButton, MenuItem, Button, Paper, OutlinedInput, InputLabel, FormControl, InputAdornment, List, ListItem, ListItemIcon, ListItemText, TableContainer, Table, TableBody, TableRow, TableCell } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';

const handleClick = () => {

}

export default function Hero() {
    

    return (
        <>
        <TableContainer component={Paper} style={{background: 'transparent'}} elevation={0}>
            <Table>
                <TableBody>
                    {/* dropdown */}
                    <TableRow>
                        <TableCell style={{ paddingRight: 0, borderBottom: '0px', color: 'white' }}>Traveller Type</TableCell>
                        <TableCell style={{ paddingTop: 0, paddingLeft: 6, borderBottom: '0px'}}>
                            <TextField
                                id="standard-select-currency"
                                select
                                label="Select"
                                style={{width: '20ch'}}
                            >
                            </TextField>
                        </TableCell>

                        <TableCell style={{ paddingRight: 0, borderBottom: '0px', color: 'white' }}>Program</TableCell>
                        <TableCell style={{ paddingTop: 0, paddingLeft: 6, borderBottom: '0px' }}>
                            <TextField
                                id="standard-select-currency"
                                select
                                label="Select"
                                style={{ width: '20ch', color: 'white' }}
                            >
                            </TextField>
                        </TableCell>

                        <TableCell style={{ paddingRight: 0, borderBottom: '0px', color: 'white' }}>Set Location</TableCell>
                        <TableCell style={{ paddingTop: 0, paddingLeft: 6, borderBottom: '0px' }}>
                            <TextField
                                id="standard-select-currency"
                                select
                                label="Select"
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
                                <InputLabel htmlFor="outlined-adornment-search" style={{ color: 'white' }}>Search</InputLabel>
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
                                <Typography>
                                    <span style={{fontSize: '90px'}}>MOUNTAIN</span><br />
                                    <span style={{ fontSize: '47px' }}>Climbing Trips & Tours</span>
                                </Typography>
                                
                                    <Chip label="View Program" variant="outlined" 
                                        style={{color: 'white', border: '1px solid white', marginTop: 10}} onClick={handleClick}/>
                                
                            </TableCell>

                            <TableCell style={{ paddingLeft: 60, paddingRight: 10, borderBottom: '0px'}}> 
                                <IconButton style={{border: '1px solid white'}}>
                                <PlayCircleOutlineIcon style={{fontSize: 120, color: 'white'}}/>
                                </IconButton>
                            </TableCell>

                            <TableCell style={{ paddingLeft: 6, paddingRight: 0, textAlign: 'justify', borderBottom: '0px' }}>
                                <Typography style={{textAlign: 'justify', color:'white'}}>
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

                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>

        </>
    );
}
