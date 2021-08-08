import { Grid, TextField, Button, FormControl } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    loginGrid: {
        minHeight: '100vh'
    },
    form: {
        backgroundColor: '#2e2e2e',
        padding: '2rem',
        paddingTop: '4rem',
        boxShadow: '0.2rem 0.2rem black'
    }
})

function Login() {
    const classes = useStyles();

    return (
        <Grid id='login' 
            container 
            justifyContent='center' 
            direction='column' 
            alignItems='center'
            className={classes.loginGrid}
        >
            <FormControl className={classes.form}>
                <Grid 
                    container
                    item
                    spacing='2'
                    direction='column'
                >
                    <Grid container item>
                        <TextField 
                            id='input-login' 
                            variant='outlined' 
                            label='Login'
                        />
                    </Grid>
                    
                    <Grid container item>
                        <TextField 
                            id="input-Password" 
                            variant='outlined' 
                            label='Password'
                        />
                    </Grid>

                    <Grid container item justifyContent='center'>
                        <Button id="button-login" variant='outlined'>Log me in</Button>
                    </Grid>
                </Grid>
            </FormControl>
        </Grid>
    );
}

export default Login