const url = 'https://localhost:5001';

async function createResponseObject(response) {
    return response.headers.get('Content-Type')?.includes('application/json') ? await response.json() : undefined;
}

function refreshToken() {
    const token = getRefreshToken();
    
    return fetch(`${url}/user/login/refresh`, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(async response => {
        if (response.status === 200) {
            const result = await createResponseObject(response);
            const user = JSON.parse(localStorage.getItem('user'));
            user.token = result.data.accessToken;
            localStorage.setItem('user', JSON.stringify(user));
        }

        return response;
    })
}

function logout() {
    localStorage.removeItem('user');
    window.location.reload();
}

function handleResponse(response, url, options) {
    const status = response.status;
            
    if (status >= 200 && status < 300) {
        return createResponseObject(response);
    }
    else if (status === 401) {
        return refreshToken(url, options)
            .then(responseRefresh => {
                const statusRefresh = responseRefresh.status;
                
                if (statusRefresh === 401 || statusRefresh === 403) {
                    logout();
                }
                else {
                    options.headers['Authorization'] = `Bearer ${getToken()}`;
                    return Request(url, options);
                }
            })
    }
}

function Request(url, options) {
    return fetch(url, options)
        .then(response => handleResponse(response, url, options));
}

function getToken() {
    return JSON.parse(localStorage.getItem('user'))?.token;
}

function getRefreshToken() {
    return JSON.parse(localStorage.getItem('user'))?.refreshToken;
}

let api = {
    url: url,

    post: function (url, jsonBody) {
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

        const token = getToken();

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        return Request(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(jsonBody)
        });
    },

    get: function (url) {
        const token = getToken();

        return Request(url, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json'
            }
        });
    }
}

export default api