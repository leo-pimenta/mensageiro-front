import { useEffect } from 'react';
import { Grid, TextField, Button, Tooltip, makeStyles } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send';
import UserAvatar from './UserAvatar'
import Message from './Message'

const useStyle = makeStyles(theme => ({
    chatContainer: {
        height: '100%'
    },
    contactNicknameContainer: {
        height: '4rem'
    },
    chatBodyContainer: props => ({
        overflowY: 'auto',
        height: 'calc(100% - 8rem)',
        marginLeft: '2rem',

        [theme.breakpoints.down('md')]: {
            marginBottom: '0.5rem',
            marginLeft: '0',
            width: '138%',
            height: 'calc(100% - 11rem)',

            ['@media (max-height: 550px)']: {
                height: '14rem'
            },
            ['@media (max-height: 450px)']: {
                height: '6rem'
            },
            ['@media (max-height: 400px)']: {
                height: '3.5rem'
            },
            ['@media (max-height: 350px)']: {
                height: '1rem'
            }
        }
    }),
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
    const contact = props?.contact;
    const classes = useStyle();
    const messageColor1 = '#252525';
    const messageColor2 = '#313131';

    function scrollChatToBottom() {
        const chatBodyContainer = document.getElementById('chat-body-container');
        chatBodyContainer.scrollTop = chatBodyContainer.scrollHeight;
    }

    useEffect(scrollChatToBottom, []);
    
    // TODO use real data
    return (
        <Grid container direction='column' spacing='1' className={classes.chatContainer}>
            <Grid container item className={classes.contactNicknameContainer}>
                <UserAvatar nickname={contact.nickname}></UserAvatar>
            </Grid>

            <Grid container item className={classes.chatBodyContainer} id='chat-body-container'>
                
                <Grid container item direction='column' spacing='1'>
                    <Grid item>
                        <Message nickname='teste' text='Bla bla bla...' backgroundColor={messageColor1} side='left'></Message>
                    </Grid>
                    
                    <Grid item>
                        <Message nickname='eu' text='Mi mi mi...' backgroundColor={messageColor2} side='right'></Message>
                    </Grid>

                    <Grid item>
                        <Message nickname='teste' text='Bla bla bla...' backgroundColor={messageColor1} side='left'></Message>
                    </Grid>

                    <Grid item>
                        <Message nickname='eu' text='Mi mi mi...' backgroundColor={messageColor2} side='right'></Message>
                    </Grid>

                    <Grid item>
                        <Message nickname='teste' text='Bla bla bla...' backgroundColor={messageColor1} side='left'></Message>
                    </Grid>

                    <Grid item>
                        <Message nickname='eu' text='Mi mi mi...' backgroundColor={messageColor2} side='right'></Message>
                    </Grid>

                    <Grid item>
                        <Message nickname='teste' text='Bla bla bla...' backgroundColor={messageColor1} side='left'></Message>
                    </Grid>

                    <Grid item>
                        <Message nickname='eu' text='Mi mi mi...' backgroundColor={messageColor2} side='right'></Message>
                    </Grid>
                </Grid>
                
            </Grid>

            <Grid container item alignItems='center' spacing='1' className={classes.textInputContainer}>
                <Grid item xs='11'>
                    <TextField className={classes.chatTextInput} label='Send a message...'></TextField>
                </Grid>

                <Grid item xs='1'>
                    <Tooltip title='Send' placement='top'>
                        <Button className={classes.sendButton}><SendIcon></SendIcon></Button>
                    </Tooltip>
                </Grid>
            </Grid>
        </Grid>
    );
}