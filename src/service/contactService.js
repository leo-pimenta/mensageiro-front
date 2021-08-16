import contactApi from '../api/contactApi'

const contactService = {
    getContacts: user => {
        return contactApi.getContacts(user);
    }
}

export default contactService