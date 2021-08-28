import contactApi from '../api/contactApi'

const contactService = {
    getInvitations: () => contactApi.getInvitations(),
    acceptInvitation: invitation => contactApi.acceptInvitation(invitation.guid),
    refuseInvitation: invitation => contactApi.refuseInvitation(invitation.guid),
    getContacts: user => contactApi.getContacts(user)
}

export default contactService