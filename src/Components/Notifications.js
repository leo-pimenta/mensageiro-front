import React, { useEffect } from 'react';
import { Grid, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import AppModal from './AppModal';
import ContactNotification from './ContactNotification';
import contactApi from '../api/contactApi'

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
    const classes = useStyles();

    function changeModalStatus (status) {
        setOpen(status);
    }

    function getInvitations() {
        return contactApi.getInvitations()
            .then(inv => {
                const map = new Map();
                inv.forEach(invitation => map.set(invitation.guid, invitation));
                updateInvitations(map);
            });
    }

    function removeInvitation (invitation) {
        updateInvitations(invitations => {
            invitations.delete(invitation.guid);
            const newInvitations = [...invitations];
            return newInvitations;
        });
    }

    function createInvitationNotifications () {        
        const arr = Array.from(invitations.values());

        if (arr.length === 0) {
            return <p className={classes.noNotification}>You don't have any notifications.</p>
        }
        
        return arr.map(invitation =>  
            <ContactNotification 
                invitation={invitation} 
                onAccepted={removeInvitation} 
                onRefused={removeInvitation}
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