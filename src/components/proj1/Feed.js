import React from "react";
import Paper from "@material-ui/core/Paper";
import Post from './Post';

export default function Feed() {

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
