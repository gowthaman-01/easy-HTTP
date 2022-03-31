/*
* EasyHTTP library
* Library for making HTTP requests
*
* @version 2.0.0
* @author Gowthaman
* @license MIT
*
*/

class EasyHTTP {
    // Make GET request
    get = async (url) => {
        const response = await fetch(url);
        const responseData = await response.json();
        return responseData
    }

    // Make POST request
    post = async (url, data) => {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const responseData = await response.json();
        return responseData;
    }

    // Make PUT request
    put = async (url, data) => {
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const responseData = response.json();
        return responseData;
    }

    // Make PUT request
    delete = async (url) => {
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json'
            }
        })
        const responseData = await 'Successfully deleted';
        return responseData;
    }
}   