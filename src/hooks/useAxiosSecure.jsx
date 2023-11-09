import axios from "axios";

export const axiosSecure = axios.create({
    baseURL: 'https://meal-connect-server.vercel.app',
    withCredentials: true
})
const useAxiosSecure = () => {


    return axiosSecure;
};

export default useAxiosSecure;