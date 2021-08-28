import React, { useEffect } from 'react';
import { Grid, Tooltip, Snackbar } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert'
import AlertTitle from '@material-ui/lab/AlertTitle'
import { makeStyles } from '@material-ui/core/styles';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AppModal from './AppModal';
import ContactNotification from './ContactNotification';
import service from '../service/contactService'

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
    },
    noNotification: {
        textAlign: 'center'
    }
});

function Notifications() {
    const [open, setOpen] = React.useState(false);
    const [invitations, updateInvitations] = React.useState(new Map());
    const [modalBody, setModalBody] = React.useState(undefined);
    const [alertTitle, setAlertTitle] = React.useState(undefined);
    const [alertMessage, setAlertMessage] = React.useState(undefined);
    const [isAlertOpen, setIsAlertOpen] = React.useState(false);
    const classes = useStyles();

    function showAlert(title, message) {
        setAlertTitle(title);
        setAlertMessage(message)
        setIsAlertOpen(true);
    }

    function changeModalStatus (status) {
        setOpen(status);
    }

    function getInvitations() {
        return service.getInvitations()
            .then(inv => {
                const map = new Map();
                inv.forEach(invitation => map.set(invitation.guid, invitation));
                updateInvitations(map);
            });
    }

    function removeInvitation (invitation) {
        updateInvitations(invitations => {
            invitations.delete(invitation.guid);
            return new Map([...invitations]);
        });
    }

    function onAccepted (invitation) {
        removeInvitation(invitation);
        showAlert('Contact Accepted', 'The contact has been added to your contact list.');
    }

    function onRefused (invitation) {
        removeInvitation(invitation);
        showAlert('Contact Refused', 'The contact has been refused to add you as a contact.')
    }

    function createInvitationNotifications () {        
        const arr = Array.from(invitations.values());

        if (arr.length === 0) {
            return <p className={classes.noNotification}>You don't have any notifications.</p>
        }
        
        return arr.map(invitation =>  
            <ContactNotification 
                invitation={invitation} 
                onAccepted={onAccepted} 
                onRefused={onRefused}
            >    
            </ContactNotification>);
            
    }

    function updateBody () {
        setModalBody(
            <Grid item className={classes.modalBody}>
                { createInvitationNotifications() }
            </Grid>
        );
    }
    
    useEffect(() => getInvitations(), []);
    useEffect(() => updateBody(), [invitations])

    return (
        <div>
            <Tooltip title='Notifications'>
                <Grid className={classes.container} onClick={() => changeModalStatus(true)}>
                    <NotificationsActiveIcon></NotificationsActiveIcon>
                </Grid>
            </Tooltip>

            <Snackbar 
                open={isAlertOpen} 
                autoHideDuration={5000} 
                onClose={() => setIsAlertOpen(false)}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            >
                <Alert severity='success' onClose={() => setIsAlertOpen(false)}>
                    <AlertTitle>{alertTitle}</AlertTitle>
                    {alertMessage}
                </Alert>
            </Snackbar>
            
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