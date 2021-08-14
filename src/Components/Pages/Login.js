import { Grid, useMediaQuery } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import LoginForm from '../LoginForm'

const useStyles = makeStyles(theme => ({
    pageGrid: {
        height: 'max-content'
    },
    loginGrid: {
        height: 'max-content'
    },
    imgSmile: {
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '10%',
            height: '9rem',
            width: '11rem',
            marginBottom: '1.5rem'
        },
        [theme.breakpoints.up('md')]: {
            height: '12rem',
            width: '18rem',
            marginBottom: '5rem'
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: '0',
            marginTop: '0.5rem',
            marginLeft: '5rem',
            height: '15rem',
            width: '20rem',
            marginBottom: '0.2rem'
        }
    }
}))

function Login(props) {
    const classes = useStyles();
    const theme = useTheme();
    const shouldCentralize = useMediaQuery(theme.breakpoints.down('md'))
    const onLogin = user => { 
        if (props.onLogin)
            props.onLogin(user)
    };

    return (
        <Grid container className={classes.pageGrid} >
            {
                shouldCentralize
                ?
                    <Grid item container justifyContent='center'>
                        <img src={process.env.PUBLIC_URL + '/img/happy-smile.png'} alt="" className={classes.imgSmile} />
                    </Grid>
                :
                    <Grid item>
                        <img src={process.env.PUBLIC_URL + '/img/happy-smile.png'} alt="" className={classes.imgSmile} />
                    </Grid>
            }

            <Grid item id='login' 
                container 
                justifyContent='center' 
                direction='column' 
                alignItems='center'
                className={classes.loginGrid}
            >
                <LoginForm onLogin={onLogin}></LoginForm>
            </Grid>
        </Grid>
    );
}

export default Login