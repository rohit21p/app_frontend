import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Intro from '../assets/intro-2.png';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';

const useStyles = makeStyles(theme => ({
    root: {
        height: '100vh',
    },
    intro: {
        height: 'min(800px, 80%)',
        backgroundColor: '#323648',
        color: 'white',
    },
    features: {
        height: '500px',
        margin: '0 10%',
        boxShadow: '2px 2px 10px 2px gray',
        position: 'relative',
        top: '-100px',
        backgroundColor: 'white',
        borderRadius: '10px'
    },
    introImg: {
        margin: 'auto'
    },
    "@keyframes myEffect": {
        "70%, 100%": {
          width: '32ch'
        }
    },
    "@keyframes blink": {
        "50%": {
            borderRight: '1px solid white'
        }
    },
    introText: {
        width: '1ch',
        height: '2ch',
        overflow: 'hidden',
        color: 'white',
        borderColor: 'transparent',
        animation: `$myEffect 3s steps(30) 2s forwards, $blink 0.5s 30`
    },
    introDesc: {
        width: '400px'
    },
    socialIcons: {
        cursor: 'pointer',
        margin: '15px'
    }
}))

function Home() {

    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} className={classes.intro}>
                <Grid container className={classes.intro} alignItems="center">
                    <Grid item xs={6}>
                        <Grid container justify="center">
                            <img className={classes.introImg} src={Intro} alt=""></img>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container direction="column">
                            <Grid item>
                                <h2 className={classes.introText}>Get The Online Presence you deserve!</h2>
                            </Grid>
                            <Grid item className={classes.introDesc}>
                                Register and create a online market. Get a link to your online shop. Upload new products everyday, manage old products and grow your market with us.
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container justify="center">
                    <FacebookIcon className={classes.socialIcons}/>
                    <InstagramIcon className={classes.socialIcons}/>
                    <LinkedInIcon className={classes.socialIcons}/>
                    <TwitterIcon className={classes.socialIcons}/>
                </Grid>
            </Grid>
            <Grid item xs={12} className={classes.features}>
            </Grid>
        </Grid>
    )
}

export default Home;