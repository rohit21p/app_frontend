import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../assets/logo.png'

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    intro: {
        height: 'min(800px, 80%)',
        backgroundColor: '#323648'
    },
    features: {
        height: '500px',
        margin: '0 10%',
        boxShadow: '2px 2px 10px 2px gray',
        position: 'relative',
        top: '-100px',
        backgroundColor: 'white',
        borderRadius: '10px'
    }
}))

function Home() {

    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} className={classes.intro}>
            </Grid>
            <Grid item xs={12} className={classes.features}>
            </Grid>
        </Grid>
    )
}

export default Home;