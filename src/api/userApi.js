import api from './api'

let userApi = {
    login: function(email, password) {
        return api.post(`${api.url}/user/login`, {
            email: email,
            password, password
        })
        .then(json => { 
            return {
                nickName: json.data.nickName,
                token: json.data.accessToken
            }
        })
    }
}

export default userApi