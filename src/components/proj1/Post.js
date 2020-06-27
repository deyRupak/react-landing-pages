// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

// import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
// import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
// import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

// import faker from "faker";

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';


import faker from 'faker';
import { Avatar } from '@material-ui/core';

const useStyles = makeStyles({
table: {
maxWidth: '100%',
},
});

function createData(name, calories, fat, carbs, protein) {
return { name, calories, fat, carbs, protein };
}

const rows = [
createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
createData('Eclair', 262, 16.0, 24, 6.0),
createData('Cupcake', 305, 3.7, 67, 4.3),
createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function Post() {
const classes = useStyles();

return (
<>
    
        <Grid container style={{ display: 'flex', justify: 'space-between', background: 'transparent', width:"100%", height: '100%' }}>
        <Grid item xs={8}>
    <Paper style={{background: 'transparent'}} elevation={0}>

        <TableRow>
            <TableCell style={{borderBottom: '0px'}}>
                <CardHeader avatar={ <Avatar aria-label="recipe" className={classes.avatar} src={faker.image.avatar()}>
                    </Avatar>
                    }
                    title={'@'+faker.name.firstName()}
                    subheader="September 14, 2016"
                                style={{ color: 'white' }}
                />
                <img src={require('../../static/images/cards/wall.jpg')} height='280' width='580' style={{borderRadius: '3%'}} />
                <br />
                <IconButton aria-label="add to favorites" style={{ color: 'white' }}>
                    <FavoriteBorderIcon />
                </IconButton>
                <IconButton aria-label="share" style={{ color: 'white' }}>
                    <ChatBubbleOutlineIcon />
                </IconButton>
                <IconButton aria-label="share" style={{ color: 'white'}}>
                    <SendOutlinedIcon />
                </IconButton>
                <br />
                            <Chip label="Write a Comment ..." variant="outlined"
                                style={{ border: '1px solid #b5aeae', color: '#b5aeae'}}/>
            </TableCell>
</TableRow>
</Paper>
            </Grid>
            <Grid item xs= {4}>
                <Paper style={{ background: 'transparent' }} elevation={0}>
                <TableRow>
                        <TableCell style={{ borderBottom: '0px' }}>
                    <CardHeader avatar={<Avatar aria-label="recipe" className={classes.avatar} src={faker.image.avatar()}>
                    </Avatar>
                    }
                        title={'@' + faker.name.firstName()}
                        subheader="September 14, 2016"
                                style={{ color: 'white' }}
                    />
                    <img src={require('../../static/images/cards/wall2.jpg')} height='280' width='280' style={{ borderRadius: '3%' }} />
                    <br />
                    <IconButton aria-label="add to favorites" style={{ color: 'white' }}>
                        <FavoriteBorderIcon />
                    </IconButton>
                    <IconButton aria-label="share" style={{ color: 'white' }}>
                        <ChatBubbleOutlineIcon />
                    </IconButton>
                    <IconButton aria-label="share" style={{ color: 'white' }}>
                        <SendOutlinedIcon />
                    </IconButton>
                            <br />
                            <Chip label="Write a Comment ..." variant="outlined"
                                style={{ border: '1px solid #b5aeae', color: '#b5aeae' }} />
            </TableCell>
        </TableRow>
    </Paper>
            </Grid>
        </Grid>
</>
);
}