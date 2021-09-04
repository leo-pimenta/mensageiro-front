import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import UserAvatar from './UserAvatar'

const useStyle = makeStyles({
    chatContainer: {
        minHeight: '100%'
    },
    chatBody: {
        marginLeft: '2rem'
    },
    textInputContainer: {
        marginLeft: '2rem'
    }
});

export default function Chat (props) {
    const nickname = props?.nickname;
    const classes = useStyle();
    
    return (
        <Grid container direction='column' spacing='1' className={classes.chatContainer}>
            <Grid container item>
                <UserAvatar nickname={nickname}></UserAvatar>
            </Grid>
            
            <Grid container direction='column' item xs='12' className={classes.chatBody}>
                <p>bla bla bla...</p>
            </Grid>

            <Grid container item className={classes.textInputContainer}>
                <p>text input</p>
            </Grid>

        </Grid>
    );
}