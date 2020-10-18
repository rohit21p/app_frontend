import React from 'react';
import { Dialog, Button, DialogActions, DialogContent, TextField, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    loginField: {
        margin: '25px',
        width: '228px',
    }
}))

function Login(props) {

    const classes = useStyles();

    const { handleCloseLogin, show } = props;

    const [form, setForm] = React.useState({
        username: '',
        password: ''
    })

    function handleLogin() {
        console.log(form);
    }

    function handleFormChange (e, prop) {
        let value = e.target.value;
        setForm(form => ({
            ...form,
            [prop]: value
        }))
    }

    return (
        <Dialog open={show} onClose={handleCloseLogin}>
            <DialogContent>
                <Grid container direction="column">
                    <TextField variant="outlined" label="Username" className={classes.loginField} value={form.username} onChange={e => handleFormChange(e, 'username')}/>
                    <TextField variant="outlined" label="Password" type="password" className={classes.loginField} value={form.password} onChange={e => handleFormChange(e, 'password')}/>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleCloseLogin}>Close</Button>
                <Button color="primary" onClick={handleLogin}>Login</Button>
            </DialogActions>
        </Dialog>
    )
}

export default Login;