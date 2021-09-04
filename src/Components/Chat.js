import { Grid, TextField, Button, Tooltip } from '@material-ui/core'
import { makeStyles } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import UserAvatar from './UserAvatar'
import Message from './Message'

const useStyle = makeStyles(props => ({
    chatContainer: {
        height: '100%'
    },
    contactNicknameContainer: {
        height: '4rem'
    },
    chatBodyContainer: {
        height: 'calc(100% - 8rem)',
        marginLeft: '2rem'
    },
    textInputContainer: {
        width: '100%',
        height: '4rem',
        marginLeft: '2rem'
    },
    chatTextInput: {
        width: '100%'
    },
    sendButton: {
        marginTop: '1.4rem',
        '&:hover': {
            backgroundColor: '#000000'
        }
    }
}));

export default function Chat (props) {
    const nickname = props?.nickname;
    const classes = useStyle();
    const messageColor1 = '#252525';
    const messageColor2 = '#313131';
    
    // TODO use real data
    return (
        <Grid container direction='column' spacing='1' className={classes.chatContainer}>
            <Grid container item className={classes.contactNicknameContainer}>
                <UserAvatar nickname={nickname}></UserAvatar>
            </Grid>

            <Grid container direction='column' item className={classes.chatBodyContainer}>
                <Message nickname='teste' text='Bla bla bla...' backgroundColor={messageColor1} side='left'></Message>
                <Message nickname='eu' text='Mi mi mi...' backgroundColor={messageColor2} side='right'></Message>
                <Message nickname='teste' text='Bla bla bla...' backgroundColor={messageColor1} side='left'></Message>
                <Message nickname='eu' text='Mi mi mi...' backgroundColor={messageColor2} side='right'></Message>
                <Message nickname='teste' text='Bla bla bla...' backgroundColor={messageColor1} side='left'></Message>
                <Message nickname='eu' text='Mi mi mi...' backgroundColor={messageColor2} side='right'></Message>
                <Message nickname='teste' text='Bla bla bla...' backgroundColor={messageColor1} side='left'></Message>
                <Message nickname='eu' text='Mi mi mi...' backgroundColor={messageColor2} side='right'></Message>
            </Grid>

            <Grid container item alignItems='center' spacing='1' className={classes.textInputContainer}>
                <Grid item xs='10'>
                    <TextField className={classes.chatTextInput} label='Send a message...'></TextField>
                </Grid>

                <Grid item xs='2'>
                    <Tooltip title='Send' placement='top'>
                        <Button className={classes.sendButton}><SendIcon></SendIcon></Button>
                    </Tooltip>
                </Grid>
            </Grid>
        </Grid>
    );
}