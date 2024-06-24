import { API_URL } from '../environment'

export const register = async (body: any) => {

    console.log('body', body)

    const response = await fetch(`${API_URL}/register`, {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })

    const data = await response.json();

    console.log(data)

    return data;
}

