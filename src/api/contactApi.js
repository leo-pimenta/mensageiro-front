import api from './api';

const contactApi = {
    getInvitations: () => api.get(`${api.url}/contacts/invitations`)
        .then(json => json.data.invitations),

    acceptInvitation: (guid) => api.post(`${api.url}/contacts/invitation/accept`, {
        invitationGuid: guid
    }),

    refuseInvitation: (guid) => api.post(`${api.url}/contacts/invitation/refuse`, {
        invitationGuid: guid
    }),

    getContacts: () => api.get(`${api.url}/contacts`).then(json => json.data.contacts)
}

export default contactApi