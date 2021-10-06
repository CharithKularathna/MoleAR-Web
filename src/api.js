import { BACKEND_DEV_URL } from './constants'

let auth_token = ''

export async function api( method, resourse, action,  token, body) {

    const headers = new Headers();
    headers.append('Content-Type', 'application/json')
    headers.append('Accept', 'application/json, */*')
    headers.append('Authorization', `JWT ${token}`)

    try {
        const response = await fetch(`${BACKEND_DEV_URL}${resourse}${action}`, {
            method: method,
            mode: 'cors',
            cache: 'no-cache',
            headers: headers,
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            credentials: 'same-origin',
            body: JSON.stringify(body),
        })
        return response.json();
    } catch (err) {
        console.log("Error performing request: ", err)
        return err;
    }
}

export const setToken = (token) => {
    auth_token = token
}