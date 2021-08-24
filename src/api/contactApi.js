import api from './api';

const contactApi = {
    getInvitations: (user) => {
        return api.get(`${api.url}/contacts/invitations`)
            .then(json => json.data.invitations);
    },

    acceptInvitation(guid) {
        return api.post(`${api.url}/contacts/invitation/accept`, {
            invitationGuid: guid
        })
    },

    refuseInvitation(guid) {
        return api.post(`${api.url}/contacts/invitation/refuse`, {
            invitationGuid: guid
        })
    }
}

export default contactApi