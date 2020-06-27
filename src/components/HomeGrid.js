import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '30vh',
    backgroundColor: '#333842'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  avatar: {
    backgroundColor: '#474e5c',
  },
}));

export default function InfoCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.number}
            </Avatar>
        }
      />
      <CardMedia className={classes.media} title={props.title} image={props.image}/>
      <CardContent style={{color: 'white', paddingBottom: 40, paddingTop: 25}}>
        {props.title}
      </CardContent>
    </Card>
  );
}
