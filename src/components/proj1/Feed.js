import React from "react";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import faker from "faker";
import Post from './Post';

export default function Feed() {
  const c = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Paper
      style={{
        width: "90%",
        height: "auto",
        backgroundColor: "transparent",
        textAlign: "left",
        overflow: 'hidden'
      }}
      elevation={0}
    >
      <Post />
    </Paper>
  );
}
