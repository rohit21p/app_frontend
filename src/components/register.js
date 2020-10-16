import React from 'react';
import { Grid, 
    Typography, 
    Button, 
    Dialog, 
    ListItemText, 
    ListItem, 
    List, 
    Divider, 
    AppBar, 
    Toolbar, 
    IconButton, 
    Slide, 
    TextField, 
    MenuItem} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
        backgroundColor: '#323648',
    },
    title: {
        marginLeft: theme.spacing(2),
        flex: 1,
    },
    personalInfoContainer: {
        padding: '25px'
    },
    formElement: {
        margin: '25px',
        width: '228px',
    }
}))

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Register(props) {

    const classes = useStyles();

    const { handleCloseRegister, show } = props;

    const [personalInfo, setPersonalInfo] = React.useState({
        name: {
            label: 'Your Name',
            placeholder: 'John Doe',
            select: false,
        },
        email: {
            label: 'Your E-mail',
            placeholder: 'johndoe@gmail.com',
            select: false,
        },
        contact: {
            label: 'Your Phone Number',
            placeholder: '966XX XXX71',
            select: false,
        },
        age: {
            label: 'Your Age',
            placeholder: 'John Doe',
            select: false,
        },
        gender: {
            label: 'Your Gender',
            placeholder: 'M/F/Other',
            select: true,
            options: ['Male', 'Female', 'Other'],
        },
    });

    const [businessInfo, setBusinessInfo] = React.useState({
        name: {
            label: 'Business Name',
            placeholder: 'ABC pvt ltd.',
            select: false,
        },
        tag: {
            label: 'Business Tag Line',
            placeholder: 'We sell the best xyz',
            select: false,
        },
        description: {
            label: 'Business Description',
            placeholder: 'The cheapest xyz all around the world',
            select: false,
        },
        email: {
            label: 'Business Email',
            placeholder: 'contact@business.com',
            select: false,
        },
        contact: {
            label: 'Business Contact',
            placeholder: '966XX XXX71',
            select: false,
        },
    });

    const [loginInfo, setLoginInfo] = React.useState({
        username: {
            label: 'Your Username',
            placeholder: 'johndoe',
            select: false,
            type: 'text',
        },
        password: {
            label: 'Your Password',
            placeholder: '********',
            select: false,
            type: 'password',
        },
    })

    function handleClickRegister() {
        console.log(personalInfo, businessInfo)
        handleCloseRegister();
    }

    function handleInputChange(e, prop) {
        console.log(e, prop)
    }
  
    return (
        <Dialog fullScreen open={show} onClose={handleCloseRegister} TransitionComponent={Transition}>
            <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton edge="start" color="inherit" onClick={handleCloseRegister} aria-label="close">
                <CloseIcon />
                </IconButton>
                <Typography variant="h5" className={classes.title}>
                Creating a online presence!
                </Typography>
            </Toolbar>
            </AppBar>
            <Grid container className={classes.personalInfoContainer}>
                <Grid item xs={12}>
                    <Typography variant="subtitle" className={classes.title}>
                        Personal Info
                    </Typography>
                </Grid>
                {
                    Object.keys(personalInfo).map(key => (
                        <Grid item key={key.label}>
                            <TextField 
                                variant="outlined"
                                label={personalInfo[key].label}
                                placeholder={personalInfo[key].placeholder}
                                select={personalInfo[key].select}
                                fullWidth
                                className={classes.formElement}
                                onChange={e => handleInputChange(e, key)}
                            >
                                {
                                   (personalInfo[key].options || []).map(option => (
                                       <MenuItem value={option} key={option}>{option}</MenuItem>
                                   )) 
                                }
                            </TextField>
                        </Grid>
                    ))
                }
            </Grid>
            <Divider />
            <Grid container className={classes.personalInfoContainer}>
                <Grid item xs={12}>
                    <Typography variant="subtitle" className={classes.title}>
                        Business Info
                    </Typography>
                </Grid>
                {
                    Object.keys(businessInfo).map(key => (
                        <Grid item key={key.label}>
                            <TextField 
                                variant="outlined"
                                label={businessInfo[key].label}
                                placeholder={businessInfo[key].placeholder}
                                select={businessInfo[key].select}
                                fullWidth
                                className={classes.formElement}
                            >
                                {
                                   (businessInfo[key].options || []).map(option => (
                                       <MenuItem value={option} key={option}>{option}</MenuItem>
                                   )) 
                                }
                            </TextField>
                        </Grid>
                    ))
                }
            </Grid>
            <Divider />
            <Grid container className={classes.personalInfoContainer}>
                <Grid item xs={12}>
                    <Typography variant="subtitle" className={classes.title}>
                        Login Info
                    </Typography>
                </Grid>
                {
                    Object.keys(loginInfo).map(key => (
                        <Grid item key={key.label}>
                            <TextField 
                                variant="outlined"
                                label={loginInfo[key].label}
                                placeholder={loginInfo[key].placeholder}
                                select={loginInfo[key].select}
                                fullWidth
                                className={classes.formElement}
                                type={loginInfo[key].type}
                            >
                                {
                                   (loginInfo[key].options || []).map(option => (
                                       <MenuItem value={option} key={option}>{option}</MenuItem>
                                   )) 
                                }
                            </TextField>
                        </Grid>
                    ))
                }
            </Grid>
            <Divider />
            <Button autoFocus color="inherit" onClick={handleClickRegister}>
                Go Online
            </Button>
        </Dialog>
    );
}

export default Register;