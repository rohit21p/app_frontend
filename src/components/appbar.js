import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Logo from '../assets/logo.png'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'transparent',
        position: 'fixed',
    },
    logo: {
        height: '50px',
        width: '50px',
        margin: '15px'
    },
    navItem: {
        color: 'white',
        margin: '0 25px'
    }
}))

function AppBar() {

    const classes = useStyles();

    return (
        <Grid container className={classes.root} justify="center" alignItems="center">
            <Grid item>
                <Grid container alignItems="center" className={classes.navItem}>
                    <img src={Logo} className={classes.logo}/>
                    <Typography variant="h4"> App FrontEnd </Typography>
                </Grid>
            </Grid>
            <Grid item>
               <Button className={classes.navItem}>New User</Button>
            </Grid>
            <Grid item>
               <Button className={classes.navItem}>Login</Button>
            </Grid>
        </Grid>
    );
}

export default AppBar;