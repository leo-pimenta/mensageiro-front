import Notification from './Notification'
import { Grid, Avatar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

const useStyle = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center'
    },
    avatar: {
        marginRight: '0.5rem'
    },
    button: {
        height: '2rem',
        width: '4.5rem',
        marginTop: '1rem'
    }
});

function ContactNotification (props) {
    const userName = props?.contactNickname ?? 'nickname-prop';
    const email = props?.email ?? 'email-prop';
    const classes = useStyle();

    const body = (
        <Grid item container>
            <Grid item container>
                { `Email: ${email}` }
            </Grid>
            
            <Grid item container justifyContent='flex-end' spacing='1'>
                <Grid item>
                    <Button variant='outlined' className={classes.button}>Accept</Button>
                </Grid>
                
                <Grid item>
                    <Button variant='outlined' color='secondary' className={classes.button}>Refuse</Button>
                </Grid>
            </Grid>
        </Grid>
    );

    const header = 
        <Grid item className={classes.container}>
            <Grid item className={classes.avatar}>
                <Avatar alt='contact-avatar' src=''></Avatar>
            </Grid>

            <Grid item>
                { `${userName} would like to be your contact`}
            </Grid>
        </Grid>
    
    return (
        <Notification header={header} expands={true} body={body}></Notification>
    );
}

export default ContactNotification