import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles({
    text: {
        margin: '0'
    },
    container: {
        paddingTop: '0.2rem',
        paddingBottom: '0.1rem',
        paddingLeft: '0.2rem',
        paddingRight: '0.4rem',
        borderRadius: '0.5rem',
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#171717'
        }
    }
});

function LogOut(props) {
    const onLogout = props.onLogout ?? function () {};
    const classes = useStyles();
  
    return (
        <Grid container className={classes.container} onClick={onLogout}>
            <Grid item>
                <ExitToAppIcon></ExitToAppIcon>
            </Grid>

            <Grid item>
                <h4 className={classes.text}>Log out</h4>
            </Grid>
        </Grid>
    );
}

export default LogOut