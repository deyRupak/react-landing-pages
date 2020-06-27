import React from 'react';
import Paper from "@material-ui/core/Paper";
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import faker from "faker";

export default function Story(){
    const c = [1,2,3,4,5,6,7,8]
    return (
      <Paper
        style={{
          width: "auto",
          height: "auto",
          backgroundColor: "transparent",
        }}
        elevation={0}
      >
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          style={{ color: "white" }}
        >
          <Grid item style={{ fontSize: 20 }}>
            <b>Stories</b>
          </Grid>
          <Grid item>
            <Button
              startIcon={<PlayCircleOutlineIcon />}
              style={{
                background: "transparent",
                color: "white",
                textTransform: "none",
              }}
            >
              Watch All
            </Button>
          </Grid>
        </Grid>

        <Grid container justify="center" alignItems="center">
          {c.map((value) => (
            <>
            <Grid Item style={{ padding: 20 }}>
              <IconButton>
                <Avatar
                  alt={value}
                  src={faker.internet.avatar()}
                  style={{
                    width: "60px",
                    height: "60px",
                    border: "4px solid white",
                    borderImageSrc:
                      "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
                    borderRadius: "50%",
                  }}
                />
              </IconButton>
            </Grid>
            </>
          ))}
        </Grid>
      </Paper>
    );
}