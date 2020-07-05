import React from 'react';
import Grid from '@material-ui/core/Grid';

import './Styles.css'
import Navbar from './Navbar';
import Story from './Story';
import Feed from './Feed';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';


import WhatshotIcon from '@material-ui/icons/Whatshot';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SendIcon from '@material-ui/icons/Send';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

import faker from 'faker';


export default function index(){
  
return (
  <>
    <Grid container className="bg" justify="center" alignItems="center" style={{marginTop: 30, marginBottom: 30}}>
      {/* sidebar */}
      <Grid item xs={2}>
        <Paper
          style={{ height: "98vh", width: "98%" }}
          elevation={3}
          style={{ backgroundColor: "#333842", color: "white" }}
        >
          {/* logo */}
          <div className="sidebar-logo">
            <WhatshotIcon />
            <Typography style={{ color: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' }}><b>TheGRAM</b></Typography>
          </div>

          {/* avatar */}
          <div className="sidebar-avatar">
            <Avatar
              alt="Remy Sharp"
              src={faker.internet.avatar()}
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <TableRow>
            <TableCell
              align="center"
              colSpan={3}
              style={{ borderBottom: "0px" }}
            >
              {faker.name.findName()}
              <br />
              @random{faker.name.lastName()}
            </TableCell>
          </TableRow>

          {/* count */}
          <TableRow>
            <TableCell style={{ borderBottom: "0px" }} align="center">
              0 <br />
              Followers
            </TableCell>
            <TableCell style={{ borderBottom: "0px" }} align="center">
              0 <br />
              Posts
            </TableCell>
            <TableCell style={{ borderBottom: "0px" }} align="center">
              0 <br />
              Following
            </TableCell>
          </TableRow>

          {/* Tabs */}
          <div className="tabs">
            <List>
              <ListItem button alignItems="center">
                <ListItemIcon>
                  <DashboardIcon style={{ color: "white" }} fontSize="small"/>
                </ListItemIcon>
                <ListItemText primary="Feed"/>
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <SearchIcon style={{ color: "white" }} fontSize="small"/>
                </ListItemIcon>
                <ListItemText primary="Explore" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <NotificationsNoneIcon style={{ color: "white" }} fontSize="small"/>
                </ListItemIcon>
                <ListItemText primary="Notifications" />
                <Chip label="1" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <SendIcon style={{ color: "white" }} fontSize="small"/>
                </ListItemIcon>
                <ListItemText primary="Direct" />
                <Chip label="1" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <EqualizerIcon style={{ color: "white" }} fontSize="small"/>
                </ListItemIcon>
                <ListItemText primary="Stats" />
              </ListItem>
              <ListItem button>
                <ListItemIcon>
                  <SettingsIcon style={{ color: "white" }} fontSize="small"/>
                </ListItemIcon>
                <ListItemText primary="Settings" />
              </ListItem>
            </List>
          </div>
          <Divider style={{ backgroundColor: "#b4b9c2" }} variant="middle" />
          <div className="logout">
            <Link to={{ pathname: `/react-landing-pages` }} style={{ textDecoration: 'none' }}>
            <ListItem button>
              <ListItemIcon>
                <ExitToAppIcon style={{ color: "white" }} fontSize="small"/>
              </ListItemIcon>
                <ListItemText primary="Home" style={{ color: "white" }}/>
            </ListItem>
            </Link>
          </div>
        </Paper>
      </Grid>

      {/* --------------------------------------------- */}

      {/* feed */}
      <Grid item xs={9}>
        <Paper
          style={{ height: "98vh", width: "100%", backgroundColor: "#4c515c" }}
          elevation={3}
        >
          {/* navbar */}
          <Navbar />

          {/* Story */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
            }}
          >
            <Story />
          </div>

          {/* Feed */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10
            }}
          >
            <Feed />
          </div>
        </Paper>
      </Grid>
    </Grid>
  </>
);
}