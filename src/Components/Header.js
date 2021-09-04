import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import UserAvatar from './UserAvatar'
import LogOut from './LogOut'
import Notifications from './Notifications'

const useStyles = makeStyles(theme => ({
  headerContainer: {
    minHeight: 'fit-content',
    maxHeight: 'fit-content',
    backgroundColor: '#2e2e2e',
    borderBottom: 'outset 0.1rem #000000',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem'
  },
  rightPanel: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '2rem'
  },
  notifications: {
    marginRight: '3rem',
    [theme.breakpoints.down('sm')]: {
      marginRight: '0.5rem'
    }
  }
}));

function Header(props) {
  const onLogout = props.onLogout ?? function () {};
  const classes = useStyles();
  const nickname = JSON.parse(localStorage.getItem('user')).nickName;
  
  return (
        <Grid container className={classes.headerContainer} direction='row' justifyContent='space-between'>
          <Grid item>
            <UserAvatar nickname={nickname}></UserAvatar>
          </Grid>

          <Grid item className={classes.rightPanel}>
            <Grid item className={classes.notifications}>
              <Notifications></Notifications>
            </Grid>

            <Grid item>
              <LogOut onLogout={onLogout}></LogOut>  
            </Grid>
          </Grid>
        </Grid>
    );
}

export default Header