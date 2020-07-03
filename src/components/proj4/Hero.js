import React from 'react';

import { Grid, TextField, MenuItem, Paper, List, ListItem, ListItemIcon, ListItemText, TableContainer, Table, TableBody, TableRow, TableCell } from '@material-ui/core'

export default function Hero() {
    

    return (
        
        <TableContainer component={Paper} style={{background: 'transparent'}} elevation={0}>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell style={{ paddingRight: 0, borderBottom: '0px' }}>Traveller Type</TableCell>
                        <TableCell style={{ paddingTop: 0, paddingLeft: 6, borderBottom: '0px'}}>
                            <TextField
                                id="standard-select-currency"
                                select
                                label="Select"
                                style={{width: '20ch'}}
                            >
                            </TextField>
                        </TableCell>

                        <TableCell style={{ paddingRight: 0, borderBottom: '0px' }}>Programme</TableCell>
                        <TableCell style={{ paddingTop: 0, paddingLeft: 6, borderBottom: '0px' }}>
                            <TextField
                                id="standard-select-currency"
                                select
                                label="Select"
                                style={{ width: '20ch' }}
                            >
                            </TextField>
                        </TableCell>

                        <TableCell style={{ paddingRight: 0, borderBottom: '0px' }}>Set Location</TableCell>
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
    );
}
