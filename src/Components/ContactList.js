import React, { useEffect } from 'react'
import { Grid, Avatar, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import service from '../service/contactService'

const useStyle = makeStyles({
    contactElement: {
        cursor: 'pointer',
        marginTop: '0.5rem',
        width: '100%',
        '&:hover': {
            backgroundColor: '#000000',
            '& $contactSelectedSpan': {
                backgroundColor: '#ffffff'
            }
        }
    },
    elementParagraph: {
        margin: '0',
        padding: '0'
    },
    messageContainer: {
        whiteSpace: 'nowrap',
        overflow: 'hidden'
    },
    contactInfos: {
        maxWidth: '80%'
    },
    findContactsInput: {
        width: '100%'
    },
    homeContainer: {
        marginLeft: '0.5rem'
    },
    contactSelectedSpanContainer: {
        height: '100%'
    },
    contactSelectedSpan: {
        marginLeft: '0.4rem',
        width: '0.2rem',
        height: '100%'
    }
});

function ContactList (props) {
    const [contacts, setContacts] = React.useState([]);
    const [filteredContacts, setFilteredContacts] = React.useState([]);
    const [body, setBody] = React.useState(undefined);
    const classes = useStyle();
    const onclick = props?.onclick ?? function () {};

    function createContactsList() {
        return filteredContacts.map(createContactElement);
    }

    function onContactsFilterInput (e) {
        const text = e?.target?.value.toLowerCase();
        const internalFilteredContacts = !text ? contacts : contacts.filter(key => key.contact.nickname.toLowerCase().includes(text));
        setFilteredContacts(internalFilteredContacts);
    }

    function createContactElement(contact) {
        let contactObj = contact;
        
        return (
            <Grid container item direction='row' alignItems='center' spacing='1' className={classes.contactElement} onClick={() => onclick(contactObj)}>
                <Grid item>
                    <Avatar></Avatar>
                </Grid>

                <Grid item className={classes.contactInfos}>
                    <Grid item>
                        <p className={classes.elementParagraph}>
                            <strong>
                                {contactObj.contact.nickname}
                            </strong>
                        </p>
                    </Grid>

                    <Grid item className={classes.messageContainer}>
                        {/* // TODO put real message here */}
                        <p className={classes.elementParagraph}>This was my last message to you. This message should be too long to appear in heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeere'</p>
                    </Grid>
                </Grid>

                <Grid item className={classes.contactSelectedSpanContainer}>
                    <div className={classes.contactSelectedSpan}></div>
                </Grid>
            </Grid>
        );
    }
    
    useEffect(() => { 
        onContactsFilterInput();
    }, [contacts])

    useEffect(() => {
        const contactsList = createContactsList();
        setBody(contactsList);
    }, [filteredContacts]);

    useEffect(() => service.getContacts().then(contactsReceived => setContacts(contactsReceived)), []);
    
    return (
        <Grid container className={classes.homeContainer}>
            <Grid container item>
                <TextField className={classes.findContactsInput} label='Find contact...' onInput={onContactsFilterInput}></TextField>
            </Grid>

            <Grid container item>
                {body}
            </Grid>
        </Grid>
    );
}

export default ContactList