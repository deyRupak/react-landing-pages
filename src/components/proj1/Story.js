import React from 'react';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';


export default function Story(){
    return(
        <Paper style={{width: '90%', height: '16vh'}}>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" style={{ width: '80px', height: '80px' }} />
        </Paper>
    )
}