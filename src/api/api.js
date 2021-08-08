import { responsiveFontSizes } from "@material-ui/core"

async function createResponseObject(response) {
    return await response.json()
}

let api = {
    url: 'https://localhost:5001',

    post: function (url, jsonBody) {
        return fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(jsonBody)
        })
        .then(createResponseObject)
    }
}

export default api