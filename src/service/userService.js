import userApi from '../api/userApi'

const userService = {
    login: (email, password) => {
        return userApi.login(email, password)
            .then(json => {
                return {
                    nickName: json.data.nickName,
                    token: json.data.accessToken
                }
            })
    }
}

export default userService