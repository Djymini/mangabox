import axios from "axios";

axios.defaults.headers.post["Accept"] = "application/json";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = false;

axios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {

        return {
            status: error.response.status,
            response: error.response.data
        };
    }
);

export const get = (url: string, config?: {}) => {
    return axios.get('http://localhost:8080' + url, config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return Promise.reject(error);
        })
}

export const postCineDb = (url: string, data: any, config?: {}) => {
    const jsonData = JSON.stringify(data);
    return axios.post('http://localhost:8080' + url, jsonData, config)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return Promise.reject(error);
        })

}

export const putCineDb = (url: string, data: any, config?: {}) => {
    return axios.put('http://localhost:8080' + url, data, config)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            return Promise.reject(error);
        })

}

export const deleteCineDb = (url: string, config?: {}) => {
    return axios.delete('http://localhost:8080' + url, config)
        .then((response) => {
            return response;
        })
        .catch((error) => {
            return Promise.reject(error);
        })
}

