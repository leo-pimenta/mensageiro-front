import Notification from './Notification'
import { Grid, Avatar, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import contactService from '../service/contactService';

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
    const invitation = props?.invitation ?? undefined;
    const userName = invitation?.contactNickname ?? 'nickname-prop';
    const email = invitation?.email ?? 'email-prop';
    const onAccepted = props?.onAccepted ?? function () {};
    const onRefused = props?.onRefused ?? function () {};
    const classes = useStyle();

    function acceptInvitation () {
        contactService.acceptInvitation(invitation)
            .then(() => onAccepted(invitation))
    }

    function refuseInvitation() {
        contactService.refuseInvitation(invitation)
            .then(() => onRefused(invitation))
    }

    const body = (
        <Grid item container>
            <Grid item container>
                { `Email: ${email}` }
            </Grid>
            
            <Grid item container justifyContent='flex-end' spacing='1'>
                <Grid item>
                    <Button variant='outlined' className={classes.button} onClick={acceptInvitation}>Accept</Button>
                </Grid>
                
                <Grid item>
                    <Button variant='outlined' color='secondary' className={classes.button} onClick={refuseInvitation}>Refuse</Button>
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