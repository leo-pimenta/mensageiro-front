// TODO refresh token

async function createResponseObject(response) {
    return response.headers.get('Content-Type')?.includes('application/json') ? await response.json() : undefined;
}

let api = {
    url: 'https://localhost:5001',

    post: function (url, jsonBody) {
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

        const token = this.getToken();

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        
        return fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(jsonBody)
        })
        .then(createResponseObject)
    },

    get: function (url) {
        const token = this.getToken();
        
        return fetch(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json'
            }
        })
        .then(createResponseObject)
    },

    getToken: () => JSON.parse(localStorage.getItem('user'))?.token
}

export default api