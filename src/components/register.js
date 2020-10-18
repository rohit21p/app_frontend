import React from 'react';
import { Grid, 
    Typography, 
    Button, 
    Dialog,
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

    const personalInfo = {
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
            value: '',
        },
    };

    const businessInfo = {
        business_name: {
            label: 'Business Name',
            placeholder: 'ABC pvt ltd.',
            select: false,
        },
        business_tag: {
            label: 'Business Tag Line',
            placeholder: 'We sell the best xyz',
            select: false,
        },
        business_description: {
            label: 'Business Description',
            placeholder: 'The cheapest xyz all around the world',
            select: false,
        },
        business_email: {
            label: 'Business Email',
            placeholder: 'contact@business.com',
            select: false,
        },
        business_contact: {
            label: 'Business Contact',
            placeholder: '966XX XXX71',
            select: false,
        },
        pan: {
            label: 'PAN Number',
            placeholder: 'BNZPXXXXXF',
            select: false,
        },
        pan_name: {
            label: 'Name on PAN',
            placeholder: 'BNZPXXXXXF',
            select: false,
        },
        bank_acc: {
            label: 'Bank Account Number',
            placeholder: '823XXXXX126',
            select: false,
        },
        ifsc: {
            label: 'Bank IFSC',
            placeholder: 'Ex. SBIXXXXX264',
            select: false,
        },
        business_category: {
            label: 'Business Category',
            placeholder: 'Ex. Education',
            select: true,
            options: ['Education', 'Entertainment', 'Food', 'Travel', 'Other'],
            value: '',
        },
        business_address: {
            label: 'Business Address',
            placeholder: 'Ex. 123 Main Street, New York, NY 10030',
            select: false,
        },
    };

    const loginInfo = {
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
    };

    const [form, setForm] = React.useState({});

    function handleClickRegister() {
        const form_status = isValid(form)
        if (form_status.hasErrors) {
            showErrors(form_status.errors)
            console.log(form_status.errors)
            return;
        }
        console.log(form)
    }

    function handleInputChange(e, prop) {
        const value = e.target.value;
        setForm(forn => ({
            ...form,
            [prop]: value
        }))
    }

    function isValid(form) {
        let status = {
            hasErrors: false,
            errors: []
        };
        return status
    }

    function showErrors(errors) {
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
                    <Typography  className={classes.title}>
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
                                onChange={e => handleInputChange(e, key)}
                                fullWidth
                                defaultValue={''}
                                className={classes.formElement}
                            >   
                                {
                                    personalInfo[key].select ? (
                                        <MenuItem disabled selected value={''}>Select {personalInfo[key].label}</MenuItem>
                                    ) : null
                                }
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
                    <Typography  className={classes.title}>
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
                                onChange={e => handleInputChange(e, key)}
                                fullWidth
                                defaultValue={''}
                                className={classes.formElement}
                            >
                                {
                                    businessInfo[key].select ? (
                                        <MenuItem disabled selected value={''}>Select {businessInfo[key].label}</MenuItem>
                                    ) : null
                                }
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
                    <Typography  className={classes.title}>
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
                                onChange={e => handleInputChange(e, key)}
                                defaultValue={''}
                                fullWidth
                                className={classes.formElement}
                                type={loginInfo[key].type}
                            >  
                                {
                                    loginInfo[key].select ? (
                                        <MenuItem disabled selected value={''}>Select {loginInfo[key].label}</MenuItem>
                                    ) : null
                                }
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