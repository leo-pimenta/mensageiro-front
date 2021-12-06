// TODO create a way to show messages received

import api from './api'
const signalR = require('@microsoft/signalr')

let connection = new signalR.HubConnectionBuilder()
    .withUrl(`${api.url}/chat`, {
        accessTokenFactory: () => api.getToken()
    })
    .build();

connection.start().catch(err => console.error(`Connection failed. ${err}`))

connection.on('OnMessage', data => {
    console.log(data);
})

export const chatSocket = {
    send: function(toUserIdentifier, text) {
        return connection.invoke('send', toUserIdentifier, text)
            .catch(err => { 
                console.error(err)
                throw err; 
            });
    }
}