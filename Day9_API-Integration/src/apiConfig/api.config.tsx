import axios from "axios";

const app = axios.create({
    timeout : 1000,
    baseURL : 'https://jsonplaceholder.typicode.com/'
});


app.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');

    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});


app.interceptors.response.use(
    (response) => response , 
    (error) => {
    if(error.response?.status === 401){
        localStorage.remove('token');
        window.location.href = '/login';
    }

    return Promise.reject(error);
});



export default app ; 