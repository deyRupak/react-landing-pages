import React from 'react';
import Grid from '@material-ui/core/Grid';
import './Styles.css'

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Button from '@material-ui/core/Button';

import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import VisibilityIcon from "@material-ui/icons/Visibility";
import Paper from '@material-ui/core/Paper';
import WhatshotIcon from '@material-ui/icons/Whatshot';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import DraftsIcon from '@material-ui/icons/Drafts';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SendIcon from '@material-ui/icons/Send';
import SettingsIcon from '@material-ui/icons/Settings';


import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import Chip from '@material-ui/core/Chip';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import Navbar from './Navbar';

export default function index(){

return (
<>
    <Grid container className="bg" justify="center" alignItems="center">
        {/* sidebar */}
        <Grid item xs={2}>
                <Paper style={{ height: '98vh', width: '98%' }} elevation={3} style={{ backgroundColor:'#333842', color:'white'}}>
                {/* logo */}
                    <div className="sidebar-logo">
                        <WhatshotIcon />
                        RDx
                    </div>
                
                {/* avatar */}
                    <div className="sidebar-avatar">
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ width: '100px', height: '100px'}}/>
                    </div>
                    <TableRow>
                        <TableCell align="center" colSpan={3} style={{borderBottom:"0px"}}>RDx<br />@rdx</TableCell>
                    </TableRow>
                    

                {/* count */}
                    <TableRow>
                        <TableCell style={{ borderBottom: "0px" }} align='center'>0 <br />Followers</TableCell>
                        <TableCell style={{ borderBottom: "0px" }} align='center'>0 <br />Posts</TableCell>
                        <TableCell style={{ borderBottom: "0px" }} align='center'>0 <br />Following</TableCell>
                    </TableRow>
                
                {/* Tabs */}
                    <div className="tabs">
                        <List>
                            <ListItem button alignItems="center">
                                <ListItemIcon>
                                    <DashboardIcon style={{color: 'white'}}/>
                                </ListItemIcon>
                                <ListItemText primary="Feed" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <SearchIcon style={{ color: 'white' }}/>
                                </ListItemIcon>
                                <ListItemText primary="Explore" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <NotificationsNoneIcon style={{ color: 'white' }}/>
                                </ListItemIcon>
                                <ListItemText primary="Notifications" />
                                <Chip label="1"/>
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <SendIcon style={{ color: 'white' }}/>
                                </ListItemIcon>
                                <ListItemText primary="Direct" />
                                <Chip label="1" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <EqualizerIcon style={{ color: 'white' }}/>
                                </ListItemIcon>
                                <ListItemText primary="Stats" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <SettingsIcon style={{ color: 'white' }}/>
                                </ListItemIcon>
                                <ListItemText primary="Settings" />
                            </ListItem>
                        </List>
                    </div>
                    <Divider style={{ backgroundColor: '#b4b9c2'}} variant="middle"/>
                    <div className="logout">
                        <ListItem button>
                            <ListItemIcon>
                                <ExitToAppIcon style={{ color: 'white' }}/>
                            </ListItemIcon>
                            <ListItemText primary="Logout" />
                        </ListItem>
                    </div>
                    
            </Paper>
        </Grid>

        {/* --------------------------------------------- */}

        {/* feed */}
        <Grid item xs={9}>
                <Paper style={{ height: '98vh', width: '100%', backgroundColor:'#4c515c' }} elevation={3}>

                {/* navbar */}
                <Navbar />

            </Paper>
        </Grid>
    </Grid>
</>
);
}