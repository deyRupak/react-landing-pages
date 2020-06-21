import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import VisibilityIcon from "@material-ui/icons/Visibility";
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import test from '../static/images/cards/test.png';

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
            r
            </Avatar>
        }
        title=""
        subheader=""
      />
      <CardMedia className={classes.media} title="Paella dish" />
      <CardContent>
        {props.number}
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <VisibilityIcon style={{ color: 'white' }} />
        </IconButton>
      </CardActions>
    </Card>
  );
}
