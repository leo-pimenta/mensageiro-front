import api from './api'

let userApi = {
    login: function(email, password) {
        return api.post(`${api.url}/user/login`, {
            email: email,
            password, password
        });
    }
}

export default userApi