import React from 'react'
import { Grid, useMediaQuery, Drawer, Button } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Chat from '@material-ui/icons/Chat'
import Header from '../Header'
import ContactList from '../ContactList';
import userService from '../../service/userService';

const useStyle = makeStyles({
    contactsButton: {
        position: 'fixed',
        height: '3rem',
        backgroundColor: '#5f5f5f'
    },
    chatIconContainer: {
        paddingTop: '0.4rem',
        marginRight: '0.2rem'
    }
});

function Home(props) {
    const onLogout = props.onLogout ?? function () {};
    const theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down('md'));
    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
    const classes = useStyle();

    function getContactList() {
        if (isSmall) {
            return (
                <div>
                    <Grid 
                        container 
                        item 
                        className={classes.contactsButton} 
                        onClick={() => setIsDrawerOpen(true)}
                        direction='row'
                        alignItems='center'
                        justifyContent='center'
                    >
                        <Grid item className={classes.chatIconContainer}><Chat></Chat></Grid>
                        <Grid item>Contacts</Grid>
                    </Grid>

                    <Drawer anchor='top' open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                        <ContactList></ContactList>
                    </Drawer>
                </div>
            );
        }
        else {
            return (
                <Grid item xs='3'>
                    <ContactList></ContactList>
                </Grid>
            );
        }
    }

    return (
        <Grid container spacing='0' direction='column'>
            <Header onLogout={onLogout}></Header>
            
            <Grid container item spacing='2'>
                { getContactList() }

                <Grid>
                    <p>Chat...</p>
                </Grid>
            </Grid>            
        </Grid>
    );
}

export default Home