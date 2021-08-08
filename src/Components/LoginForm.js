import { Grid, TextField, Button, FormControl } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { useState } from 'react'
import userApi from '../api/userApi'

const useStyles = makeStyles(theme => ({
    form: {
        backgroundColor: '#2e2e2e',
        padding: '2rem',
        paddingTop: '0.5rem',
        boxShadow: '0.2rem 0.2rem black',
        [theme.breakpoints.up('sm')]: {
            width: '60%'
        },
        [theme.breakpoints.up('lg')]: {
            width: '18%'
        }
    },
    text: {
        color: '#cac4c4',
        marginTop: '1.5rem',
    },
    textField: {
        width: '100%'
    },
    button: {
        width: '60%'
    }
}))

function LoginForm(props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const classes = useStyles();
    const onLogin = props.onLogin ?? function () { };
    
    function handleSubmit(e) {
        e.preventDefault();
        
        userApi.login(email, password)
        .then(token => {
            localStorage.setItem('token', token)
            onLogin();
        })
    }

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <Grid 
                container
                item
                spacing='2'
                direction='column'
            >
                <Grid container item justifyContent='center'>
                    <p><strong className={classes.text}>Log in into Mensageiro</strong></p>
                </Grid>

                <Grid container item>
                    <TextField 
                        id='input-email' 
                        variant='outlined' 
                        label='Email'
                        className={classes.textField}
                        onInput={event => setEmail(event.target.value)}
                    />
                </Grid>
                
                <Grid container item>
                    <TextField 
                        id="input-Password" 
                        variant='outlined' 
                        label='Password'
                        type='password'
                        className={classes.textField}
                        onInput={event => setPassword(event.target.value)}
                    />
                </Grid>

                <Grid container item justifyContent='center'>
                    <Button type='submit' id="button-login" variant='outlined' className={classes.button}>Log me in</Button>
                </Grid>
            </Grid>
        </form>
    );
}

export default LoginForm