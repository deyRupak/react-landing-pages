import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Avatar } from '@material-ui/core';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CardHeader from '@material-ui/core/CardHeader';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

import IconButton from '@material-ui/core/IconButton';

import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';

import faker from 'faker';


const useStyles = makeStyles({
table: {
maxWidth: '100%',
},
});

export default function Post() {
const classes = useStyles();

return (
<>

    <Grid container
        style={{ display: 'flex', justify: 'space-between', background: 'transparent', width:"100%", height: '100%' }}>
        <Grid item xs={8}>
            <Paper style={{background: 'transparent'}} elevation={0}>

                <TableRow>
                    <TableCell style={{borderBottom: '0px'}}>
                        <CardHeader avatar={ <Avatar aria-label="recipe" className={classes.avatar}
                            src={faker.image.avatar()}>
                            </Avatar>
                            }
                            title={'@'+faker.name.firstName()}
                            subheader="September 14, 2016"
                            style={{ color: 'white' }}
                            />
                            <img src={require('../../static/images/cards/wall.jpg')} height='280' width='580'
                                style={{borderRadius: '3%'}} />
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
                                style={{ border: '1px solid #b5aeae', color: '#b5aeae'}} />
                    </TableCell>
                </TableRow>
            </Paper>
        </Grid>
        <Grid item xs={4}>
            <Paper style={{ background: 'transparent' }} elevation={0}>
                <TableRow>
                    <TableCell style={{ borderBottom: '0px' }}>
                        <CardHeader avatar={<Avatar aria-label="recipe" className={classes.avatar}
                            src={faker.image.avatar()}>
                            </Avatar>
                            }
                            title={'@' + faker.name.firstName()}
                            subheader="September 14, 2016"
                            style={{ color: 'white' }}
                            />
                            <img src={require('../../static/images/cards/wall2.jpg')} height='280' width='280'
                                style={{ borderRadius: '3%' }} />
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