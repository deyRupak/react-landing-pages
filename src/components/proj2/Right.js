import React from 'react'
import Left from "./Left";

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from "@material-ui/core/Typography";

import IconButton from '@material-ui/core/IconButton';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

import './Styles.css'

export default function Right() {
    return (
      <Paper
        style={{
          height: "690px",
          background: "transparent",
        }}
        elevation={0}
      >
        <Grid container>
          <Grid
            item
            xs={12}
            style={{
              height: "430px",
              fontSize: "80px",
              textAlign: "left",
              justify: "center",
              paddingTop: 40,
              paddingLeft: 30,
              color: "black",
              background: "transparent",
              fontFamily: "Lobster, cursive",
            }}
          >
            <p>
              The place with
              <br /> the peace and
              <br /> calmness.
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              background: "transparent",
              height: "230px",
            }}
          >
            <Grid
              container
              direction="row"
              justify="flex-end"
              alignItems="center"
            >
              <Grid item>
                <Paper
                  style={{
                    width: "100%",
                    textAlign: "center",
                  }}
                  elevation={0}
                >
                  <ListItem button style={{ padding: 40, paddingRight: 80 }}>
                    <ListItemIcon>
                      <ArrowForwardIcon />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          style={{
                            fontFamily: "Lobster, cursive",
                            fontSize: "20px",
                          }}
                        >
                          Explore
                        </Typography>
                      }
                    />
                  </ListItem>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              background: "transparent",
              height: "30px",
            }}
          >
            <Grid
              container
              direction="row"
              justify="space-around"
              alignItems="center"
            >
              <Grid item style={{ fontWeight: 700, color: "white" }}>
                Instagram
              </Grid>
              <Grid item style={{ fontWeight: 700, color: "white" }}>
                Youtube
              </Grid>
              <Grid item style={{ fontWeight: 700, color: "white" }}>
                Twitter
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    );
}