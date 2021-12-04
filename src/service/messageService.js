import {messageApi} from '../api/messageApi'

export const messageService = {
    getMessages: (groupId, page) => messageApi.getMessages(groupId, page)
}