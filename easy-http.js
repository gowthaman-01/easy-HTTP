/*
* EasyHTTP library
* Library for making HTTP requests
*
* @version 1.0.0
* @author Gowthaman
* @license MIT
*
*/

class EasyHTTP {
    // Make GET request
    get = (url) => {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error))
        })
    }

    // Make POST request
    post = (url, data) => {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error))
        })
    }

    // Make PUT request
    put = (url, data) => {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(data => resolve(data))
                .catch(error => reject(error))
        })
    }

    delete = (url) => {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                }
            })
                .then(response => response.json())
                .then(() => resolve('Successfully deleted'))
                .catch(error => reject(error))
        })
    }
}   