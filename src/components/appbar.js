import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'transparent',
        height: '7vh',
        position: 'fixed'
    }
}))

function AppBar() {

    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            Navbar
        </Grid>
    );
}

export default AppBar;