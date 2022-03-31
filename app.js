const http = new EasyHTTP;
const data = {
    name: 'Gowthaman',
    school: 'NUS',
    year: '2'
}

// GET users
http.get('https://jsonplaceholder.typicode.com/users')
    .then((data) => console.log(data))
    .catch((error) => console.log(error))

// POST data
http.post('https://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(error => console.log(error))

// PUT data
http.put('https://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(error => console.log(error))

// Delete data
http.delete('https://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(error => console.log(error))