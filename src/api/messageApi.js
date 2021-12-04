import api from './api'

export const messageApi = {
    getMessages: (groupId, page) => api.get(`${api.url}/messages?groupId=${groupId}&page=${page}`)
        .then(json => json.data)
}