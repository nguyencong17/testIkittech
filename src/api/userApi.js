import axiosClient from "./axiosClient";
const userApi = {
    register(data) {
        const url = '/register';
        return axiosClient.post(url,data);
    },
    login(data) {
        const url = '/login';
        return axiosClient.post(url,data);
    },
    profile(data){
        const url = '/profile';
        return axiosClient.get(url,data);
    }

};

export default userApi;