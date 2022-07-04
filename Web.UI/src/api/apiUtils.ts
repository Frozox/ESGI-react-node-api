import axios from 'axios'

const API_URL = 'http://localhost:3000/';

const getBearer = () => {
    const token = localStorage.getItem('token');
    return token
}

export const getAxiosInstanceWithoutAuth = () => {
    const axiosInstance = axios.create({
        baseURL: API_URL,
    });

    return axiosInstance;
}

export const getAxiosInstance = () => {
    const instance = axios.create({ baseURL: API_URL });

    instance.interceptors.request.use(
        (request: any) => {
            request.headers = {
                ...request.headers,
                Accept: 'application/json',
                Authorization: `Bearer ${getBearer()}`
            };

            return request;
        },
        (error: any) => Promise.reject(error),
    );

    return instance;
};