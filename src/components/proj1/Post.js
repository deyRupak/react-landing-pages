import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

import faker from "faker";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
        height: 430,
        background: 'transparent',
        color: 'white'
    },
    media: {
        height: 0,
        paddingTop: '40.25%', // 16:9
        overflow: 'visible'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function Post() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar} src={faker.image.avatar()}>
                        
          </Avatar>
                }
                title={'@'+faker.name.firstName()}
                subheader="September 14, 2016"
            />
            <CardMedia
                className={classes.media}
                image={faker.image.nightlife()}
            />
            <CardContent style={{padding: 12}}>
                <Typography variant="body2" color="white" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. 
        </Typography>
            </CardContent>
            <CardActions disableSpacing style={{padding: 4}}>
                <IconButton aria-label="add to favorites" style={{color: 'white'}}>
                    <FavoriteBorderIcon />
                </IconButton>
                <IconButton aria-label="share" style={{ color: 'white' }}>
                    <ChatBubbleOutlineIcon />
                </IconButton>
                <IconButton aria-label="share" style={{ color: 'white'}}>
                    <SendOutlinedIcon />
                </IconButton>
            </CardActions>
            
        </Card>
    );
}
