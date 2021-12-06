import userApi from '../api/userApi'

const userService = {
    login: (email, password) => {
        return userApi.login(email, password)
            .then(json => {
                return {
                    id: json.data.id,
                    nickName: json.data.nickName,
                    token: json.data.accessToken,
                    refreshToken: json.data.refreshToken
                }
            })
    },
    getUserId: () => JSON.parse(localStorage.getItem('user'))?.id
}

export default userService