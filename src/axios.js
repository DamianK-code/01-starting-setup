import axios from 'axios';

const instance = axios.create({
    baseURL: "http://localhost:8080/"
});

instance.interceptors.request.use(req => {
    return req;
});

export default instance;