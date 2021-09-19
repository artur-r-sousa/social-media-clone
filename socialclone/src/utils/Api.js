import axios from 'axios';

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOjEsImlhdCI6MTYzMTk4OTMxMn0.lxcyEVwFpgDDMJ-qP8iT46s7TcJfgNogv6W7g70_QJs'

export const instance = axios.create({
    baseUrl: 'http://localhost:3333/tweets',
    timeout: 1000,
    headers: {'Authorization': `Bearer ${token}`}
})
