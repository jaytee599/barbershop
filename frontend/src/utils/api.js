import axios from "axios";
import toast from "react-hot-toast";
const apiUrl = import.meta.env.VITE_PUBLIC_API_BASE_URL;

export const signup = async (userData) => {
    try {
        const response = await axios.post(
            `${apiUrl}/auth/register`, 
            userData
        )
        return response
    } catch (error) {
        console.log(error)
        throw error.response.data;
    }
};

export const login = async (credentials) => {
    try {
        const response = await axios.post(
            `${apiUrl}/auth/login`, 
            credentials
        )
        return response
    } catch (error) {
        console.log(error)
        throw error.response.data;
    }
};

export const logout = async () => {
    try {
        const response = await axios.post(
            `${apiUrl}/auth/logout`,
            {}, 
            { withCredentials: true }
        )
        // console.log(response.data)
        toast.success(response.data.message)
        window.location.href = '/'
    } catch (error) {
        console.log(error)
        throw error.response.data;
    }
};

export const getUser = async () => {
    try {
        const response = await axios.get(
            `${apiUrl}/auth/user`, 
            { withCredentials: true }
        );
    } catch (error) {
        console.error('Error fetching profile:', error);
    }
};

export const allAppointments = async () => {
    try {
        const response = await axios.get(
            `${apiUrl}/appointment/all`
        )
        // console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
        throw error.response.data;
    }
};

export const allMessages = async () => {
    try {
        const response = await axios.get(
            `${apiUrl}/contact/all`
        )
        // console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
        throw error.response.data;
    }
};

export const allUsers = async () => {
    try {
        const response = await axios.get(
            `${apiUrl}/auth/users`
        )
        // console.log(response.data)
        return response.data
    } catch (error) {
        console.log(error)
        throw error.response.data;
    }
}
