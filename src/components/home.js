import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Intro from '../assets/intro-2.png';
import Step1 from '../assets/step-1.png';
import Step2 from '../assets/step-2.png';
import Step3 from '../assets/step-3.png';
import Step4 from '../assets/step-4.png';
import Step5 from '../assets/step-5.png';
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
        margin: '0 20%',
        padding: '2% 0%',
        marginBottom: '20px',
        boxShadow: '2px 2px 10px 2px gray',
        position: 'relative',
        top: '-100px',
        backgroundColor: 'white',
        borderRadius: '10px',
    },
    introImg: {
        margin: 'auto',
        [theme.breakpoints.down('lg')]: {
            width: '580px',
            height: '320px'
        },
        [theme.breakpoints.down('md')]: {
            height: '250px',
            width: '300px',
        },
        [theme.breakpoints.down('md')]: {
            height: '220px',
            width: '200px',
        },
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
        animation: `$myEffect 3s steps(30) 2s forwards, $blink 0.5s 30`,
        [theme.breakpoints.down('md')]: {
            fontSize: '20px'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '14px'
        },
    },
    introDesc: {
        width: '400px',
        [theme.breakpoints.down('lg')]: {
            textAlign: 'center'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '12px'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '8px',
            width: '200px'
        },
    },
    socialIcons: {
        cursor: 'pointer',
        margin: '15px'
    },
    stepsImg: {
        height: '450px',
        width: '600px',
        [theme.breakpoints.down('lg')]: {
            height: '350px',
            width: '500px',
        },
        [theme.breakpoints.down('md')]: {
            height: '250px',
            width: '300px',
        },
    },
    stepDesc: {
        width: '300px'
    }
}))

function Home() {

    const classes = useStyles();

    return (
        <Grid container className={classes.root}>
            <Grid item xs={12} className={classes.intro}>
                <Grid container className={classes.intro} alignItems="center" justify="center">
                    <Grid item xs={12} lg={6}>
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
                <Grid container direction="column" alignItems="center" justify="center">
                    <Grid item>
                        <h2>How to get started?</h2>
                    </Grid>
                    <Grid item>
                        <Grid container alignItems="center" justify="center">
                            <Grid item className={classes.stepDesc}>
                                <p>Step 1:</p>
                                <p>Register your business on the site, and create your online presence</p>
                            </Grid>
                            <Grid item>
                                <img src={Step1} alt="" className={classes.stepsImg}></img>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container alignItems="center" justify="center">
                            <Grid item className={classes.stepDesc}>
                                <p>Step 2:</p>
                                <p>Share the link with your customers</p>
                            </Grid>
                            <Grid item>
                                <img src={Step2} alt="" className={classes.stepsImg}></img>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container alignItems="center" justify="center">
                            <Grid item className={classes.stepDesc}>
                                <p>Step 3:</p>
                                <p>Upload and manage your products on the site</p>
                            </Grid>
                            <Grid item>
                                <img src={Step3} alt="" className={classes.stepsImg}></img>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container alignItems="center" justify="center">
                            <Grid item className={classes.stepDesc}>
                                <p>Step 4:</p>
                                <p>Watch your business grow and see analysis of your buyers and products</p>
                            </Grid>
                            <Grid item>
                                <img src={Step4} alt="" className={classes.stepsImg}></img>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container alignItems="center" justify="center">
                            <Grid item className={classes.stepDesc}>
                                <p>Step 5:</p>
                                <p>Sit back and relax</p>
                            </Grid>
                            <Grid item>
                                <img src={Step5} alt="" className={classes.stepsImg}></img>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Home;