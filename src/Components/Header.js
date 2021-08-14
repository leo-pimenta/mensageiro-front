import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import UserAvatar from './UserAvatar'
import LogOut from './LogOut'

const useStyles = makeStyles({
  headerContainer: {
    minHeight: 'fit-content',
    maxHeight: 'fit-content',
    backgroundColor: '#2e2e2e',
    borderBottom: 'outset 0.1rem #000000',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem'
  },
  logOut: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '2rem'
  }
});

function Header(props) {
  const onLogout = props.onLogout ?? function () {};
  const classes = useStyles();
  
  return (
        <Grid container className={classes.headerContainer} direction='row' justifyContent='space-between'>
          <Grid item>
            <UserAvatar></UserAvatar>
          </Grid>

          <Grid item className={classes.logOut}>
            <LogOut onLogout={onLogout}></LogOut>
          </Grid>
        </Grid>
    );
}

export default Header