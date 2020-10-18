import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import Register from './register'

import Logo from '../assets/logo.png'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: 'transparent',
        position: 'fixed',
        color: 'white !important',
    },
    scrolledRoot: {
        backgroundColor: 'white',
        position: 'fixed',
    },
    logo: {
        height: '50px',
        width: '50px',
        margin: '15px'
    },
    navItem: {
        margin: '0 25px',
        color: 'inherit'
    },
}))

function Navbar() {

    const classes = useStyles();

    let listener = null;
    const [scrollState, setScrollState] = React.useState(false);
    const [dialogs, setDialogs] = React.useState({
        register: false
    })

    React.useEffect(() => {
        // eslint-disable-next-line
        listener = document.addEventListener("scroll", e => {
        var scrolled = document.scrollingElement.scrollTop
        if (scrolled >= 50 && !scrollState) {
            setScrollState(true)
        } else if (scrolled < 100 && scrollState) {
            setScrollState(false)
        }
        })
        return () => {
            document.removeEventListener("scroll", listener)
        }
    }, [scrollState])

    function handleCloseRegister() {
        changeDialogs("register", false);
    }

    function handleClickNewUser() {
        changeDialogs("register", true);
    }

    function changeDialogs(prop, value) {
        setDialogs(dialogs => ({
            ...dialogs,
            [prop]: value
        }))
    }

    return (
        <>
            <Grid container className={scrollState ? classes.scrolledRoot : classes.root} justify="center" alignItems="center">
                <Grid item>
                    <Grid container alignItems="center" className={classes.navItem}>
                        <img src={Logo} className={classes.logo} alt=""/>
                        <Typography variant="h4"> App FrontEnd </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                <Button className={classes.navItem} onClick={handleClickNewUser}>New User</Button>
                </Grid>
                <Grid item>
                <Button className={classes.navItem}>Login</Button>
                </Grid>
            </Grid>
            <Register show={dialogs.register} handleCloseRegister={handleCloseRegister}/>
        </>
    );
}

export default Navbar;