import app from "./api.config";

const http = {
    get : (url : string) => app.get(url),
    post : (url : string, body : {}) => app.post(url, body),
    put : (url : string, body : {}) => app.put(url, body),
    patch : (url : string, body : {}) => app.patch(url, body),
    delete : (url : string) => app.delete(url)
};


export default http;