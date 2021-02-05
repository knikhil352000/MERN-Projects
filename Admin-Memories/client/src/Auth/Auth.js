import React,{useState} from 'react'
import {Avatar, Button, Paper, Grid, Typography, Container, TextField} from '@material-ui/core'
import useStyles from './styles'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Input from './Input'
const Auth = () => {
    const state = null;
    const isSignUp = false;
    const classes = useStyles();
    const handleSubmit = () => {
         
    }
    const handleChange = () => {

    }

    const [showPassword, setShowPassword] = useState(false);
    const handleShowPassword = () => setShowPassword((prevState) => !prevState)

    return (
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.Avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography variant='h5'>{isSignUp ? 'Sign Up' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                    <Grid xs={6} md={12}>
                                        <Input name='firstName' label='First Name' handleChange={handleChange} autoFocus half/>
                                        <Input name='firstName' label='First Name' handleChange={handleChange} half/>
                                    </Grid>
                                </>
                            )
                        }
                        <Input name='email' label='Email Address' handleChange={handleChange} type='email'/>
                        <Input name='password' label='Password' handleChange={handleChange} type={showPassword ? 'text' : 'password'} handleShowPassword= {handleShowPassword}/>
                        {isSignUp && <Input name='confirmPassword' label='Repeat Password' handleChange={handleChange} type='password'/>}
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth
