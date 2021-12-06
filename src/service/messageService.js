import {messageApi} from '../api/messageApi'

export const messageService = {
    getMessages: (groupId, page) => messageApi.getMessages(groupId, page),
    send: (toUserIdentifier, text) => messageApi.send(toUserIdentifier, text)
}