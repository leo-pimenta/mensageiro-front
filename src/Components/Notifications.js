import React from 'react';
import { Grid, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AppModal from './AppModal';
import ContactNotification from './ContactNotification';

const useStyles = makeStyles({
    container: {
        cursor: 'pointer',
        paddingTop: '0.2rem',
        paddingBottom: '0.01rem',
        paddingLeft: '0.2rem',
        paddingRight: '0.2rem',
        borderRadius: '0.5rem',
        '&:hover': {
            backgroundColor: '#171717'
        }
    },
    modalBody: {
        height: '100%',
        maxHeight: '100%',
        minHeight: '100%',
        overflow: 'auto'
    }
});

function Notifications() {
    const [open, setOpen] = React.useState(false);

    function changeModalStatus (status) {
        setOpen(status);
    }
    
    const classes = useStyles();

    const modalBody = 
        <Grid item className={classes.modalBody}>
            <ContactNotification text='Notification number 1' email='email@gmail.com' contactNickname='Leo'></ContactNotification>
            <ContactNotification text='Notification number 2'></ContactNotification>
            <ContactNotification text='Notification number 3'></ContactNotification>
            <ContactNotification text='Notification number 4'></ContactNotification>
            <ContactNotification text='Notification number 5'></ContactNotification>
            <ContactNotification text='Notification number 6'></ContactNotification>
            <ContactNotification text='Notification number 7'></ContactNotification>
            <ContactNotification text='Notification number 8'></ContactNotification>
            <ContactNotification text='Notification number 9'></ContactNotification>
            <ContactNotification text='Notification number 10'></ContactNotification>
            <ContactNotification text='Notification number 11'></ContactNotification>
            <ContactNotification text='Notification number 12'></ContactNotification>
            <ContactNotification text='Notification number 13'></ContactNotification>
            <ContactNotification text='Notification number 14'></ContactNotification>
            <ContactNotification text='Notification number 15'></ContactNotification>
            <ContactNotification text='Notification number 16'></ContactNotification>
            <ContactNotification text='Notification number 17'></ContactNotification>
            <ContactNotification text='Notification number 18'></ContactNotification>
            <ContactNotification text='Notification number 19'></ContactNotification>
            <ContactNotification text='Notification number 20'></ContactNotification>
            <ContactNotification text='Notification number 21'></ContactNotification>
            <ContactNotification text='Notification number 22'></ContactNotification>
            <ContactNotification text='Notification number 23'></ContactNotification>
        </Grid>

    return (
        <div>
            <Tooltip title='Notifications'>
                <Grid className={classes.container} onClick={() => changeModalStatus(true)}>
                    <NotificationsActiveIcon></NotificationsActiveIcon>
                </Grid>
            </Tooltip>
            
            <AppModal
                open={open}
                onClose={() => changeModalStatus(false)}
                label='Notifications'
                headerText='Notifications'
                body={modalBody}
            >
            </AppModal>
        </div>
    );
}

export default  Notifications