import { Grid, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    avatar: {
        marginLeft: '1rem'
    },
    nickName: {
        margin: '0'
    }
});

function UserAvatar(props) {
    const classes = useStyles();
    const nickName = props?.nickname;

    return (
        <Grid container direction='row' alignItems='center' spacing='1'>
            <Grid item>
                <Avatar alt='my-avatar' src='' className={classes.avatar}></Avatar>
            </Grid>

            <Grid item>
                <h3 className={classes.nickName}>{nickName}</h3>
            </Grid>
        </Grid>
    );
}

export default UserAvatar