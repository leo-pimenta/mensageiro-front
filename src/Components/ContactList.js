import React, { useEffect } from 'react'
import { Grid, Avatar }  from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import service from '../service/contactService'

const useStyle = makeStyles({
    contactElement: {
        marginTop: '0.5rem'
    },
    elementParagraph: {
        margin: '0',
        padding: '0'
    }
});

function ContactList () {
    const [contacts, setContacts] = React.useState([]);
    const [body, setBody] = React.useState(undefined);
    const classes = useStyle();

    function createContactsList() {
        return contacts.map(createContactElement);
    }

    function createContactElement(contact) {
        let contactObj = contact.contact;
        
        return (
            <Grid container item alignItems='center' spacing='1' className={classes.contactElement}>
                <Grid item>
                    <Avatar></Avatar>
                </Grid>

                <Grid item>
                    <Grid item>
                        <p className={classes.elementParagraph}>
                            <strong>
                                {contactObj.nickname}
                            </strong>
                        </p>
                    </Grid>

                    <Grid item>
                        {/* // TODO put real message here */}
                        <p className={classes.elementParagraph}>This was my last message to you</p>
                    </Grid>
                </Grid>
            </Grid>
        );
    }
    
    useEffect(() => { 
        const contactsList = createContactsList();
        setBody(contactsList);
    }, [contacts])

    useEffect(() => service.getContacts().then(contactsReceived => setContacts(contactsReceived)), [])
    
    return (
        <Grid container>
            {body}
        </Grid>
    );
}

export default ContactList