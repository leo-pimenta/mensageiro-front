import api from './api'
import {chatSocket} from './chatSocket'

export const messageApi = {
    getMessages: (groupId, page) => api.get(`${api.url}/messages?groupId=${groupId}&page=${page}`)
        .then(json => json.data),
    send: (toUserIdentifier, text) => chatSocket.send(toUserIdentifier, text)
}