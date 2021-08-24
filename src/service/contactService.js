import contactApi from '../api/contactApi'

const contactService = {
    getInvitations: user => contactApi.getInvitations(user),
    acceptInvitation: invitation => contactApi.acceptInvitation(invitation.guid),
    refuseInvitation: invitation => contactApi.refuseInvitation(invitation.guid)
}

export default contactService