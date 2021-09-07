import React from 'react'
import { Grid, useMediaQuery, Drawer, Button } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import ChatIcon from '@material-ui/icons/Chat'
import Header from '../Header'
import ContactList from '../ContactList';
import Chat from '../Chat'
import userService from '../../service/userService';

const useStyle = makeStyles({
    contactsButton: {
        height: '3rem',
        backgroundColor: '#5f5f5f'
    },
    chatIconContainer: {
        paddingTop: '0.4rem',
        marginRight: '0.2rem',
    },
    chatContainer: {
        marginLeft: '1rem',
        height: '100%',
        width: '100%'
    },
    homeBodyContent: {
        height: 'calc(100% - 3.5rem)'
    },
    contactsContainer: {
        height: '100%',
        backgroundColor: '#060606'
    }
});

function Home(props) {
    const onLogout = props.onLogout ?? function () {};
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    const classes = useStyle();

    function getContactList() {
        if (isSmall) {
            return (
                <Grid container>
                    <Grid 
                        container 
                        item 
                        className={classes.contactsButton} 
                        onClick={() => setIsDrawerOpen(true)}
                        direction='row'
                        alignItems='center'
                        justifyContent='center'
                    >
                        <Grid item className={classes.chatIconContainer}><ChatIcon></ChatIcon></Grid>
                        <Grid item>Contacts</Grid>
                    </Grid>

                    <Drawer anchor='top' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                        <ContactList></ContactList>
                    </Drawer>
                </Grid>
            );
        }
        else {
            return (
                <Grid item xs='3' className={classes.contactsContainer}>
                    <ContactList></ContactList>
                </Grid>
            );
        }
    }

    return (
        <Grid container>
            <Header onLogout={onLogout}></Header>
            
            <Grid container item spacing='2' className={classes.homeBodyContent}>
                { getContactList() }

                <Grid item className={classes.chatContainer} xs='8'>
                    <Chat nickname='teste'></Chat>
                </Grid>
            </Grid>            
        </Grid>
    );
}

export default Home