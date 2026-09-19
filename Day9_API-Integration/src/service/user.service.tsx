import http from "../apiConfig/httpMethod.config";

const userService = {
    getUserList : () => http.get('users') ,
    deleteUser : (id : number) => http.delete(`users/${id}`),
    addUser : (data : {}) =>  http.post('users', data)
};


export default userService;